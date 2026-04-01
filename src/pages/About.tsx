import { motion } from 'framer-motion';
import { FiFacebook, FiInstagram, FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa6';

const team = [
  {
    name: 'Irwin R. Huasupo M.',
    role: 'CEO & Fundador',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60',
    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Gerson A. Huasupo M.',
    role: 'Director Creativo',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60',
    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Juan C. Perez L.',
    role: 'Desarrollador Frontend',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Maria F. Lopez R.',
    role: 'Diseñadora UI/UX',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
      github: '#',
    },
  },
];

function SimplicityIcon() {
  return (
    <svg className="w-16 h-16 mx-auto mb-3" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" stroke="#0052FF" strokeWidth="2" strokeDasharray="113" strokeDashoffset="113" className="draw-circle" />
      <path d="M24 14V34M14 24H34" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeDasharray="28" strokeDashoffset="28" className="draw-line delay-1" />
      <circle cx="24" cy="24" r="6" stroke="#0052FF" strokeWidth="2" strokeDasharray="38" strokeDashoffset="38" className="draw-inner delay-2" />
      <style>{`
        .draw-circle {
          animation: drawOuter 10s ease-out infinite;
        }
        .draw-line {
          animation: drawLine 10s ease-out 0.5s infinite;
        }
        .draw-inner {
          animation: drawOuter 10s ease-out 1s infinite;
        }
        @keyframes drawOuter {
          0% { stroke-dashoffset: 113; }
          40% { stroke-dashoffset: 0; }
          60% { stroke-dashoffset: 0; opacity: 1; }
          75% { stroke-dashoffset: 0; opacity: 0; }
          76%, 100% { stroke-dashoffset: 113; opacity: 0; }
        }
        @keyframes drawLine {
          0% { stroke-dashoffset: 28; }
          40% { stroke-dashoffset: 0; }
          60% { stroke-dashoffset: 0; opacity: 1; }
          75% { stroke-dashoffset: 0; opacity: 0; }
          76%, 100% { stroke-dashoffset: 28; opacity: 0; }
        }
      `}</style>
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg className="w-16 h-16 mx-auto mb-3" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="6" stroke="#0052FF" strokeWidth="2" strokeDasharray="38" strokeDashoffset="38" className="draw-circle-1" />
      <circle cx="32" cy="16" r="6" stroke="#0052FF" strokeWidth="2" strokeDasharray="38" strokeDashoffset="38" className="draw-circle-2" />
      <circle cx="24" cy="32" r="6" stroke="#0052FF" strokeWidth="2" strokeDasharray="38" strokeDashoffset="38" className="draw-circle-3" />
      <path d="M20 18L28 18M18 20L18 28M30 20L30 28" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeDasharray="20" strokeDashoffset="20" className="draw-lines" />
      <style>{`
        .draw-circle-1 {
          animation: drawDot 10s ease-out infinite;
        }
        .draw-circle-2 {
          animation: drawDot 10s ease-out 0.5s infinite;
        }
        .draw-circle-3 {
          animation: drawDot 10s ease-out 1s infinite;
        }
        .draw-lines {
          animation: drawLines 10s ease-out 1.5s infinite;
        }
        @keyframes drawDot {
          0% { stroke-dashoffset: 38; }
          25% { stroke-dashoffset: 0; }
          60% { stroke-dashoffset: 0; opacity: 1; }
          75% { stroke-dashoffset: 0; opacity: 0; }
          76%, 100% { stroke-dashoffset: 38; opacity: 0; }
        }
        @keyframes drawLines {
          0% { stroke-dashoffset: 20; }
          30% { stroke-dashoffset: 0; }
          60% { stroke-dashoffset: 0; opacity: 1; }
          75% { stroke-dashoffset: 0; opacity: 0; }
          76%, 100% { stroke-dashoffset: 20; opacity: 0; }
        }
      `}</style>
    </svg>
  );
}

function EvolutionIcon() {
  return (
    <svg className="w-16 h-16 mx-auto mb-3" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 32L16 20L24 26L32 14L40 20" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="80" strokeDashoffset="80" className="draw-path" />
      <circle cx="40" cy="20" r="4" stroke="#0052FF" strokeWidth="2" strokeDasharray="25" strokeDashoffset="25" className="draw-dot" />
      <path d="M36 24L40 20L44 24" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="20" strokeDashoffset="20" className="draw-arrow" />
      <style>{`
        .draw-path {
          animation: drawPath 10s ease-out infinite;
        }
        .draw-dot {
          animation: drawDot 10s ease-out 1.5s infinite;
        }
        .draw-arrow {
          animation: drawArrow 10s ease-out 2s infinite;
        }
        @keyframes drawPath {
          0% { stroke-dashoffset: 80; }
          35% { stroke-dashoffset: 0; }
          60% { stroke-dashoffset: 0; opacity: 1; }
          75% { stroke-dashoffset: 0; opacity: 0; }
          76%, 100% { stroke-dashoffset: 80; opacity: 0; }
        }
        @keyframes drawDot {
          0% { stroke-dashoffset: 25; }
          40% { stroke-dashoffset: 0; }
          60% { stroke-dashoffset: 0; opacity: 1; }
          75% { stroke-dashoffset: 0; opacity: 0; }
          76%, 100% { stroke-dashoffset: 25; opacity: 0; }
        }
        @keyframes drawArrow {
          0% { stroke-dashoffset: 20; }
          45% { stroke-dashoffset: 0; }
          60% { stroke-dashoffset: 0; opacity: 1; }
          75% { stroke-dashoffset: 0; opacity: 0; }
          76%, 100% { stroke-dashoffset: 20; opacity: 0; }
        }
      `}</style>
    </svg>
  );
}

const values = [
  { icon: SimplicityIcon, title: 'Simplicidad', desc: 'Hacemos que lo complejo parezca fácil' },
  { icon: IntegrationIcon, title: 'Integración', desc: 'Unimos tecnología y negocio en un ecosistema' },
  { icon: EvolutionIcon, title: 'Evolución', desc: 'Impulsamos el crecimiento constante' },
];

const titleText = "Sobre GNIUS CODE";
const subtitleText = "Más que una empresa de software, somos tu socio estratégico en la transformación digital.";

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-block"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + index * 0.05 }}
          className="inline"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Nucleus() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];
    
    const particleCount = 80;
    const radius = 0.5;
    
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * (0.5 + Math.random() * 0.5);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      positions.push(x, y, z);
      
      const brightness = 0.7 + Math.random() * 0.3;
      colors.push(brightness, brightness, brightness);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    return geometry;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.005;
      pointsRef.current.rotation.x += 0.003;
    }
  });

  return (
    <points ref={pointsRef} geometry={particleGeometry}>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

function OrbitWithElectron({ radius, tiltAngle, speed }: { radius: number; tiltAngle: number; speed: number }) {
  const electronRef = useRef<THREE.Mesh>(null);
  const trailRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    
    const x = Math.cos(t) * radius;
    const y = Math.sin(t) * radius;
    const z = 0;
    
    const cos = Math.cos(tiltAngle);
    const sin = Math.sin(tiltAngle);
    
    const rotatedX = x;
    const rotatedY = y * cos - z * sin;
    const rotatedZ = y * sin + z * cos;
    
    if (electronRef.current) {
      electronRef.current.position.set(rotatedX, rotatedY, rotatedZ);
    }
    if (trailRef.current) {
      trailRef.current.position.set(rotatedX, rotatedY, rotatedZ);
    }
  });

  const orbitGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = 0;
      
      const cos = Math.cos(tiltAngle);
      const sin = Math.sin(tiltAngle);
      
      points.push(new THREE.Vector3(
        x,
        y * cos - z * sin,
        y * sin + z * cos
      ));
    }
    const curve = new THREE.CatmullRomCurve3(points);
    return new THREE.TubeGeometry(curve, 64, 0.008, 8, false);
  }, [radius, tiltAngle]);

  return (
    <group>
      <mesh geometry={orbitGeometry}>
        <meshStandardMaterial 
          color="#E5E7EB"
          transparent
          opacity={0.15}
        />
      </mesh>
      <Sphere ref={trailRef} args={[0.04, 8, 8]}>
        <meshStandardMaterial 
          color="#D1D5DB"
          emissive="#FFFFFF"
          emissiveIntensity={0.5}
          transparent
          opacity={0.4}
        />
      </Sphere>
      <Sphere ref={electronRef} args={[0.1, 16, 16]}>
        <meshStandardMaterial 
          color="#FFFFFF"
          emissive="#FFFFFF"
          emissiveIntensity={2}
        />
      </Sphere>
    </group>
  );
}

function Atom() {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#FFFFFF" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#F9FAFB" />
      
      <Nucleus />
      
      <OrbitWithElectron radius={1.2} tiltAngle={0} speed={1} />
      <OrbitWithElectron radius={1.2} tiltAngle={Math.PI / 3} speed={0.7} />
      <OrbitWithElectron radius={1.2} tiltAngle={Math.PI / 1.5} speed={1.3} />
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI * 3 / 4}
      />
    </group>
  );
}

function AnimatedAtom() {
  return (
    <div className="flex justify-center mt-2 lg:mt-3 w-full max-w-[160px] lg:max-w-xs mx-auto aspect-square">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Atom />
      </Canvas>
    </div>
  );
}

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] xl:min-h-[80vh] overflow-hidden -mt-16">
        <div className="absolute inset-0">
          <motion.img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80" 
            alt="Equipo de trabajo"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute inset-0 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          />
        </div>
        <div className="absolute inset-0 flex items-start justify-center px-6 xl:px-8 pt-36 xl:pt-40 pb-6 xl:pb-8">
          <div className="w-full mx-auto relative z-10 px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center text-white"
            >
              <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold leading-tight mb-4">
                <TypewriterText text={titleText} delay={0.2} />
              </h1>
              <p className="text-sm md:text-base xl:text-xl text-gray-200 max-w-2xl mx-auto mb-2">
                <TypewriterText text={subtitleText} delay={0.2 + titleText.length * 0.05 + 0.3} />
              </p>
              <AnimatedAtom />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-gray-50 dark:bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-12 md:py-16 px-8 md:px-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">MISIÓN</h2>
            <p className="text-base md:text-lg text-secondary dark:text-white leading-relaxed">
              Eliminar la barrera de entrada tecnológica para las empresas, ofreciendo soluciones integrales que permiten a nuestros clientes enfocarse en su negocio mientras nosotros digitalizamos sus procesos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section 
        className="relative section-padding overflow-hidden cursor-pointer group"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
          const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
          const img = e.currentTarget.querySelector('.vision-img') as HTMLElement;
          if (img) {
            img.style.transform = `translate(${-x * 20}px, ${-y * 20}px) scale(1.1)`;
          }
        }}
        onMouseLeave={(e) => {
          const img = e.currentTarget.querySelector('.vision-img') as HTMLElement;
          if (img) {
            img.style.transform = 'translate(0, 0) scale(1)';
          }
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://pub-bcc6063f2ea749b78e82ad516e2f7aef.r2.dev/landing-web/fotos/miradaprofunda.jpg" 
            alt="Visión"
            className="vision-img w-full h-full object-cover transition-transform duration-300 ease-out"
          />
          <div className="vision-overlay absolute inset-0 bg-black/30 transition-[background] duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-black/60" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">VISIÓN</h2>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Ser la empresa de tecnología de referencia en Perú, democratizando el acceso a soluciones digitales innovadoras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50 dark:bg-secondary/50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="heading-2 mb-3 text-secondary dark:text-white">Nuestro Equipo</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Profesionales apasionados por la tecnología y la innovación.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-white/5 rounded-xl overflow-hidden text-center shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-secondary dark:text-white text-sm">{member.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">{member.role}</p>
                  <div className="flex justify-center gap-2">
                    <a href={member.social.facebook} className="w-7 h-7 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <FiFacebook size={12} />
                    </a>
                    <a href={member.social.instagram} className="w-7 h-7 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <FiInstagram size={12} />
                    </a>
                    <a href={member.social.linkedin} className="w-7 h-7 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <FaLinkedin size={12} />
                    </a>
                    <a href={member.social.github} className="w-7 h-7 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <FiGithub size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white dark:bg-secondary">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="heading-2 mb-3 text-secondary dark:text-white">Nuestros Valores</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Los principios que guían cada decisión y proyecto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group cursor-pointer"
              >
                <value.icon />
                <h3 className="heading-3 mb-2 text-secondary dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}