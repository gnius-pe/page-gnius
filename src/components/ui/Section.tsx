import type { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Section.css';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'primary' | 'secondary' | 'gradient' | 'dark';
  fadeBottom?: boolean;
  fadeTop?: boolean;
}

export function Section({ 
  id, 
  children, 
  className = '', 
  background = 'primary',
  fadeBottom = false,
  fadeTop = false
}: SectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const sectionClasses = [
    'section',
    `section-bg-${background}`,
    fadeBottom ? 'fade-bottom' : '',
    fadeTop ? 'fade-top' : '',
    isVisible ? 'visible' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <section
      id={id}
      ref={ref}
      className={sectionClasses}
    >
      {children}
    </section>
  );
}
