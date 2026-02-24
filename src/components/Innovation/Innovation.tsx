import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ParticleSphere } from './ParticleSphere';
import './Innovation.css';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export function Innovation() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { 
          opacity: 0.3,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );
    }

    return () => {
      scrollTriggerInstance.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="innovation-section">
      <div className="innovation-canvas">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ParticleSphere scrollProgress={scrollProgress} />
        </Canvas>
      </div>

      <div className="innovation-content">
        <h1 ref={textRef} className="innovation-title">
          <span className="title-main">{t('about.heroTitle')}</span>
          <span className="title-accent">{t('about.heroSubtitle')}</span>
        </h1>
      </div>
    </section>
  );
}
