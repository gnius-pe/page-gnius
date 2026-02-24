import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleSphereProps {
  scrollProgress: number;
}

// ============================================
// SIMPLEX NOISE IMPLEMENTATION
// ============================================
class SimplexNoise {
  private perm: number[] = [];
  
  constructor() {
    for (let i = 0; i < 512; i++) {
      this.perm[i] = Math.floor(Math.random() * 256);
    }
  }
  
  noise3D(x: number, y: number, z: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);
    
    const u = this.fade(x);
    const v = this.fade(y);
    const w = this.fade(z);
    
    const A = this.perm[X] + Y;
    const AA = this.perm[A] + Z;
    const AB = this.perm[A + 1] + Z;
    const B = this.perm[X + 1] + Y;
    const BA = this.perm[B] + Z;
    const BB = this.perm[B + 1] + Z;
    
    return this.lerp(w,
      this.lerp(v,
        this.lerp(u, this.grad(this.perm[AA], x, y, z), this.grad(this.perm[BA], x - 1, y, z)),
        this.lerp(u, this.grad(this.perm[AB], x, y - 1, z), this.grad(this.perm[BB], x - 1, y - 1, z))
      ),
      this.lerp(v,
        this.lerp(u, this.grad(this.perm[AA + 1], x, y, z - 1), this.grad(this.perm[BA + 1], x - 1, y, z - 1)),
        this.lerp(u, this.grad(this.perm[AB + 1], x, y - 1, z - 1), this.grad(this.perm[BB + 1], x - 1, y - 1, z - 1))
      )
    );
  }
  
  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  
  private lerp(t: number, a: number, b: number): number {
    return a + t * (b - a);
  }
  
  private grad(hash: number, x: number, y: number, z: number): number {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }
}

// ============================================
// CONFIGURATION - Adjust these values to taste
// ============================================

// --- IDLE ANIMATION ---

// How fast the noise animates
const NOISE_SPEED = 0.3;

// How much vertices displace from noise
const NOISE_INTENSITY = 0.4;

// Breathing speed
const BREATH_SPEED = 0.5;

// How much it expands during breathing
const BREATH_INTENSITY = 1.25;

// How much it flattens during breathing
const FLATTEN_INTENSITY = 0.75;

// --- SCROLL ANIMATION ---

// Initial scale when page loads
const INITIAL_SCALE = 0.35;

// Maximum scale when fully scrolled (5% larger than text)
const MAX_SCALE = 1.05;

// How fast particles disperse on scroll
const DISPERSION_INTENSITY = 1.2;

// How fast the scale grows on scroll
const SCROLL_EXPANSION_SPEED = 0.6;

// --- MOUSE ATTRACTION ---

// Radius of mouse influence (higher = affects more particles)
const MOUSE_RADIUS = 1.8;

// Force of mouse attraction (higher = stronger pull)
const MOUSE_FORCE = 0.08;

// Damping for smooth movement (lower = more slippery, higher = more sticky)
const MOUSE_DAMPING = 0.92;

// --- FLOATING/WANDERING MOVEMENT ---

// How fast the object wanders around (lower = slower, more peaceful)
const FLOATING_SPEED = 0.15;

// How far from center it can wander (amplitude in X and Y)
const FLOATING_RANGE = 0.8;

// Different noise offset for wandering (so it's independent from particle noise)
const FLOATING_NOISE_OFFSET = 1000;

// Particle size
const PARTICLE_SIZE = 0.018;

// ============================================

const noise = new SimplexNoise();
const noise2D = new SimplexNoise(); // Separate noise for wandering

export function ParticleSphere({ scrollProgress }: ParticleSphereProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const { camera } = useThree();
  
  // Mouse position in 3D space
  const mousePos = useRef(new THREE.Vector3(0, 0, 0));
  const targetMousePos = useRef(new THREE.Vector3(0, 0, 0));
  
  const { geometry, basePositions, velocities } = useMemo(() => {
    const geo = new THREE.SphereGeometry(1, 48, 48);
    const positions = geo.attributes.position;
    const count = positions.count;
    
    const basePos = new Float32Array(count * 3);
    const vels = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      basePos[i * 3] = positions.getX(i);
      basePos[i * 3 + 1] = positions.getY(i);
      basePos[i * 3 + 2] = positions.getZ(i);
      
      // Initialize velocities to 0
      vels[i * 3] = 0;
      vels[i * 3 + 1] = 0;
      vels[i * 3 + 2] = 0;
    }
    
    return { geometry: geo, basePositions: basePos, velocities: vels };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.elapsedTime;
    const positions = geometry.attributes.position;
    const count = positions.count;
    
    // ============================================
    // MOUSE TRACKING
    // ============================================
    
    // Project mouse to 3D space on z=0 plane
    const vector = new THREE.Vector3(state.mouse.x, state.mouse.y, 0.5);
    vector.unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));
    
    targetMousePos.current.copy(pos);
    mousePos.current.lerp(targetMousePos.current, 0.1);
    
    // ============================================
    // IDLE ANIMATION - Breathing + Noise
    // ============================================
    
    const breathPhase = (Math.sin(time * BREATH_SPEED * Math.PI * 2) + 1) / 2;
    const breathScale = 1 + breathPhase * (BREATH_INTENSITY - 1);
    const flattenY = 1 - breathPhase * (1 - FLATTEN_INTENSITY);
    
    const scrollFactor = Math.pow(scrollProgress, SCROLL_EXPANSION_SPEED);
    const scrollScale = INITIAL_SCALE + (MAX_SCALE - INITIAL_SCALE) * scrollFactor;
    const totalScale = breathScale * scrollScale;
    
    const dispersion = scrollFactor * DISPERSION_INTENSITY;
    
    // ============================================
    // UPDATE VERTICES
    // ============================================
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      const bx = basePositions[i3];
      const by = basePositions[i3 + 1];
      const bz = basePositions[i3 + 2];
      
      const len = Math.sqrt(bx * bx + by * by + bz * bz);
      const nx = bx / len;
      const ny = by / len;
      const nz = bz / len;
      
      // Noise displacement
      const noiseX = noise.noise3D(nx * 2 + time * NOISE_SPEED, ny * 2, nz * 2) * NOISE_INTENSITY;
      const noiseY = noise.noise3D(nx * 2, ny * 2 + time * NOISE_SPEED * 1.1, nz * 2) * NOISE_INTENSITY;
      const noiseZ = noise.noise3D(nx * 2, ny * 2, nz * 2 + time * NOISE_SPEED * 0.9) * NOISE_INTENSITY;
      
      // Base position with breathing + scroll
      let px = nx * totalScale + noiseX * (1 + dispersion * 0.5);
      let py = ny * totalScale * flattenY + noiseY * (1 + dispersion * 0.5);
      let pz = nz * totalScale + noiseZ * (1 + dispersion * 0.5);
      
      // Dispersion on scroll
      px += nx * dispersion * 0.8;
      py += ny * dispersion * 0.8;
      pz += nz * dispersion * 0.8;
      
      // ============================================
      // MOUSE ATTRACTION
      // ============================================
      
      // Calculate distance to mouse
      const dx = mousePos.current.x - px;
      const dy = mousePos.current.y - py;
      const dz = mousePos.current.z - pz;
      const distToMouse = Math.sqrt(dx * dx + dy * dy + dz * dz);
      
      // Apply magnetic attraction if within radius
      if (distToMouse < MOUSE_RADIUS) {
        // Force decreases with distance
        const force = (1 - distToMouse / MOUSE_RADIUS) * MOUSE_FORCE;
        
        // Add attraction to velocity
        velocities[i3] += dx * force;
        velocities[i3 + 1] += dy * force;
        velocities[i3 + 2] += dz * force;
      }
      
      // Apply damping to velocity
      velocities[i3] *= MOUSE_DAMPING;
      velocities[i3 + 1] *= MOUSE_DAMPING;
      velocities[i3 + 2] *= MOUSE_DAMPING;
      
      // Apply velocity to position
      px += velocities[i3];
      py += velocities[i3 + 1];
      pz += velocities[i3 + 2];
      
      positions.setXYZ(i, px, py, pz);
    }
    
    positions.needsUpdate = true;
    
    // ============================================
    // FLOATING/WANDERING MOVEMENT
    // ============================================
    
    // Use separate noise for wandering (different offset from particle noise)
    const wanderX = noise2D.noise3D(
      time * FLOATING_SPEED,
      FLOATING_NOISE_OFFSET,
      0
    ) * FLOATING_RANGE;
    
    const wanderY = noise2D.noise3D(
      time * FLOATING_SPEED,
      FLOATING_NOISE_OFFSET + 100,
      0
    ) * FLOATING_RANGE;
    
    // Apply floating position to the entire mesh
    pointsRef.current.position.x = wanderX;
    pointsRef.current.position.y = wanderY;
    
    // Slow rotation
    const rotationSpeed = 0.0002 * (1 + scrollFactor * 2);
    pointsRef.current.rotation.y += rotationSpeed;
  });

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      color: 0xffffff,
      size: PARTICLE_SIZE,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  return (
    <points ref={pointsRef} geometry={geometry} material={material} />
  );
}
