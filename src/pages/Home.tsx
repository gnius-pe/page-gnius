import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
  {
    title: 'Software a Medida',
    desc: 'Desarrollo de sistemas web y aplicaciones que digitalizan procesos específicos.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Ecosistema Digital',
    desc: 'Gestión total de infraestructura: hosting, dominio y certificados SSL.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Automatización',
    desc: 'Implementación de herramientas para reducir tareas manuales.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60',
  },
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div>
      <section className="relative w-full overflow-hidden">
        <div className="relative hidden h-[60vh] w-full overflow-hidden md:block">
          <video autoPlay loop muted playsInline className="video-panoramic absolute left-1/2 top-1/2 h-auto min-h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2">
            <source src="https://pub-bcc6063f2ea749b78e82ad516e2f7aef.r2.dev/landing-web/videos/gnius-video-preview.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/55 to-primary/25" />
        </div>
        <div className="relative aspect-video w-full md:hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
            <source src="https://pub-bcc6063f2ea749b78e82ad516e2f7aef.r2.dev/landing-web/videos/gnius-video-preview.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/55 to-primary/25" />
        </div>
      </section>

      <section className="relative z-10 -mt-16 pb-8 md:-mt-24">
        <div className="container-custom">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/20 bg-white/80 p-6 text-center shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-secondary/80 md:p-8"
          >
            <h1 className="mb-4 text-2xl font-bold leading-tight text-secondary dark:text-white md:text-4xl lg:text-5xl">
              Transformamos ideas que ayudan a que tu negocio crezca.
            </h1>
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.65, delay: prefersReducedMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mb-6 max-w-2xl text-base text-gray-600 dark:text-gray-300 md:text-xl"
            >
              Gestión e innovación con soluciones integrales. Transformamos tu negocio con tecnología de vanguardia.
            </motion.p>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.65, delay: prefersReducedMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
            >
              <Link to="/contacto" className="btn-primary inline-flex items-center justify-center gap-2">Comenzar proyecto <FiArrowRight size={16} /></Link>
              <Link to="/servicios" className="btn-secondary inline-flex items-center justify-center gap-2">Ver servicios</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.35 }}
            className="mb-8 text-center"
          >
            <h2 className="heading-2 mb-3 text-secondary dark:text-white">¿Cómo podemos ayudarte?</h2>
            <p className="mx-auto max-w-xl text-gray-600 dark:text-gray-400">Ofrecemos soluciones integrales para transformar tu negocio.</p>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 36, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.015 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.25 }}
                className="group relative h-48 overflow-hidden rounded-xl border border-white/15 shadow-lg shadow-primary/10 md:h-56"
              >
                <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transform-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15 transition-colors duration-300 group-hover:ring-primary/70" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="heading-3 mb-2 text-white">{service.title}</h3>
                  <p className="line-clamp-2 text-sm text-gray-200">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/servicios" className="btn-secondary">Ver todos los servicios</Link>
          </div>
        </div>
      </section>

      <ScrollCta />
    </div>
  );
}

function ScrollCta() {
  const prefersReducedMotion = useReducedMotion();
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';
  const footerBackground = isLightTheme ? '#ffffff' : '#1a202c';
  const footerFrom = isLightTheme
    ? { '--footer-main': '#172033', '--footer-muted': '#4b5563', '--footer-divider': '#d1d5db', '--footer-social': '#e5e7eb' }
    : { '--footer-main': '#ffffff', '--footer-muted': '#9ca3af', '--footer-divider': 'rgba(255,255,255,0.1)', '--footer-social': 'rgba(255,255,255,0.1)' };
  const footerTo = isLightTheme
    ? { '--footer-main': '#ffffff', '--footer-muted': '#9ca3af', '--footer-divider': 'rgba(255,255,255,0.1)', '--footer-social': 'rgba(255,255,255,0.1)' }
    : { '--footer-main': '#1a202c', '--footer-muted': '#4b5563', '--footer-divider': '#d1d5db', '--footer-social': '#e5e7eb' };
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !trackRef.current || prefersReducedMotion) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
    const media = gsap.matchMedia();

    media.add('(min-width: 768px)', () => {
      const scroll = { trigger: section, start: 'top top', end: () => '+=' + distance(), scrub: 1, invalidateOnRefresh: true };
      const horizontalTimeline = gsap.timeline({ scrollTrigger: { ...scroll, pin: true } });
      horizontalTimeline.to(track, { x: () => -distance(), duration: 1, ease: 'none' }, 0);
      gsap.to('.cta-shape--orbit', { x: -150, y: 90, rotation: 120, scale: 0.82, ease: 'none', scrollTrigger: scroll });
      gsap.to('.cta-shape--diamond', { x: 210, y: -80, rotation: 220, ease: 'none', scrollTrigger: scroll });
      gsap.to('.cta-underline:not(.cta-brand-underline)', { scaleX: 1, ease: 'none', stagger: 0.1, scrollTrigger: scroll });
      gsap.to('.cta-contact-highlight', { rotation: 3, scale: 1.05, ease: 'none', stagger: 0.12, scrollTrigger: scroll });
      gsap.to('.cta-brand-underline', { scaleX: 1, ease: 'none', scrollTrigger: { ...scroll, end: () => '+=' + window.innerWidth } });
      gsap.fromTo('.cta-brand-kicker', { x: -70, opacity: 1 }, { x: 0, opacity: 1, ease: 'none', scrollTrigger: { ...scroll, end: () => '+=' + window.innerWidth } });
      gsap.fromTo('.cta-brand-name', { x: 120, opacity: 1 }, { x: 0, opacity: 1, ease: 'none', scrollTrigger: { ...scroll, end: () => '+=' + window.innerWidth } });
      gsap.fromTo('.cta-brand-digital', { x: -90, rotation: -12, scale: 0.82, opacity: 1 }, { x: 0, rotation: -3, scale: 1, opacity: 1, ease: 'none', scrollTrigger: { ...scroll, end: () => '+=' + window.innerWidth } });
      const footer = document.querySelector<HTMLElement>('[data-site-footer]');
      const footerWipe = footer?.querySelector<HTMLElement>('[data-footer-wipe]');
      if (footer && footerWipe) {
        const footerScroll = { trigger: footer, start: 'top 80%', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true };
        gsap.set(footer, { backgroundColor: footerBackground });
        gsap.fromTo(footer, footerFrom, {
          ...footerTo,
          ease: 'none',
          scrollTrigger: footerScroll,
        });
        const footerLogo = footer.querySelector<HTMLElement>('[data-footer-logo]');
        if (footerLogo) {
          gsap.fromTo(footerLogo, { filter: isLightTheme ? 'invert(0)' : 'invert(1)' }, {
            filter: isLightTheme ? 'invert(1)' : 'invert(0)',
            ease: 'none',
            scrollTrigger: footerScroll,
          });
        }
        gsap.fromTo(footerWipe, { clipPath: 'circle(0% at 100% 0%)' }, {
          clipPath: 'circle(150% at 100% 0%)',
          ease: 'none',
          scrollTrigger: footerScroll,
        });
      }
    });

    media.add('(max-width: 767px)', () => {
      const footer = document.querySelector<HTMLElement>('[data-site-footer]');
      const footerWipe = footer?.querySelector<HTMLElement>('[data-footer-wipe]');
      if (footer && footerWipe) {
        const footerScroll = { trigger: footer, start: 'top 80%', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true };
        gsap.set(footer, { backgroundColor: footerBackground });
        gsap.fromTo(footer, footerFrom, {
          ...footerTo,
          ease: 'none',
          scrollTrigger: footerScroll,
        });
        const footerLogo = footer.querySelector<HTMLElement>('[data-footer-logo]');
        if (footerLogo) {
          gsap.fromTo(footerLogo, { filter: isLightTheme ? 'invert(0)' : 'invert(1)' }, {
            filter: isLightTheme ? 'invert(1)' : 'invert(0)',
            ease: 'none',
            scrollTrigger: footerScroll,
          });
        }
        gsap.fromTo(footerWipe, { clipPath: 'circle(0% at 100% 0%)' }, {
          clipPath: 'circle(150% at 100% 0%)',
          ease: 'none',
          scrollTrigger: footerScroll,
        });
      }
    });
    return () => media.revert();
  }, { scope: sectionRef, dependencies: [prefersReducedMotion, theme], revertOnUpdate: true });

  return (
    <section ref={sectionRef} aria-label="GNIUS DIGITAL, soluciones digitales" className={'relative h-auto overflow-hidden md:h-[100svh] ' + (theme === 'dark' ? 'bg-secondary text-white' : 'bg-white text-secondary')}>
      {prefersReducedMotion && (
        <div className="container-custom flex h-full items-center justify-center py-16 text-center">
          <div className="max-w-3xl">
            <p className="mb-4 text-2xl font-black text-primary md:text-4xl">GNIUS DIGITAL</p>
            <h2 className="mb-5 text-4xl font-extrabold leading-tight md:text-7xl">¿Listo para transformar tu negocio?</h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-gray-600 dark:text-gray-300 md:text-2xl">Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos.</p>
            <Link to="/contacto" className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3">Iniciar proyecto <FiArrowRight size={18} /></Link>
          </div>
        </div>
      )}
      <div ref={trackRef} aria-hidden={prefersReducedMotion || undefined} className={prefersReducedMotion ? 'hidden' : 'hidden h-full w-max will-change-transform md:flex'}>
        <div className="relative flex h-full w-screen shrink-0 items-center justify-center overflow-hidden px-6 md:px-12">
          <div className="cta-shape--orbit absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-300 via-emerald-300 to-lime-200 opacity-80 md:h-[28rem] md:w-[28rem]" aria-hidden="true" />
          <div className="cta-shape--diamond absolute right-[12%] top-[18%] h-16 w-16 rotate-45 rounded-xl bg-gradient-to-br from-orange-300 to-fuchsia-300 shadow-xl md:h-24 md:w-24" aria-hidden="true" />
          <div className="relative z-10 w-full max-w-[92vw] text-center">
            <p className="cta-brand-kicker mb-5 text-[clamp(1.6rem,4vw,4rem)] font-bold leading-none tracking-tight text-secondary dark:text-white md:mb-8">Tecnología <span className="text-primary dark:text-cyan-300">que impulsa</span></p>
            <h2 className="cta-brand-name whitespace-nowrap text-[clamp(3rem,15vw,15rem)] font-black leading-[0.85] tracking-[-0.08em] text-secondary dark:text-white">GNIUS</h2>
            <div className="relative mt-4 flex items-center justify-center md:mt-6">
              <span className="cta-brand-digital -rotate-3 rounded-xl bg-cyan-300 px-5 py-2 text-[clamp(1.5rem,5vw,4.5rem)] font-extrabold leading-none tracking-tight text-secondary shadow-[8px_9px_0_rgba(15,23,42,0.12)] md:px-8 md:py-3">DIGITAL</span>
              <svg className="cta-brand-spark absolute -right-1 top-1/2 h-12 w-12 -translate-y-1/2 text-primary md:-right-8 md:h-20 md:w-20" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                <path d="M40 4v72M4 40h72M14.5 14.5l51 51m0-51-51 51" stroke="currentColor" strokeLinecap="round" strokeWidth="7" />
              </svg>
            </div>
            <svg className="cta-underline cta-brand-underline mx-auto mt-7 h-4 w-[min(72vw,42rem)] origin-left scale-x-0 overflow-visible text-primary md:mt-10 md:h-6" viewBox="0 0 600 24" fill="none" aria-hidden="true">
              <path d="M3 17C145 3 303 4 597 13" stroke="currentColor" strokeLinecap="round" strokeWidth="12" />
            </svg>
          </div>
        </div>
        <div className="relative flex h-full w-screen shrink-0 items-center justify-center overflow-hidden px-6 md:px-12">
          <div className="cta-shape--diamond absolute left-[12%] top-[18%] h-16 w-16 rotate-45 rounded-xl bg-gradient-to-br from-amber-300 to-pink-300 md:h-24 md:w-24" aria-hidden="true" />
          <div className="absolute -bottom-20 right-[8%] h-56 w-56 rounded-full border-[24px] border-cyan-200 md:h-80 md:w-80 md:border-[36px]" aria-hidden="true" />
          <div className="relative z-10 text-center">
            <p className="mb-2 text-lg font-bold uppercase tracking-[0.28em] text-primary dark:text-cyan-300 md:text-2xl">Creamos</p>
            <h2 className="text-[clamp(2.75rem,12vw,12rem)] font-black leading-[0.82] tracking-[-0.07em] text-secondary dark:text-white">Soluciones</h2>
            <p className="mt-4 text-[clamp(3rem,9vw,8rem)] font-light leading-none tracking-[-0.05em] text-primary dark:text-cyan-300"><span className="underline decoration-cyan-300 decoration-[6px] underline-offset-8">digitales</span></p>
          </div>
        </div>
        <div className="relative flex h-full w-screen shrink-0 items-center justify-center overflow-hidden px-6 md:px-12">
          <div className="cta-shape--orbit absolute -right-20 top-[10%] h-56 w-56 rounded-full bg-gradient-to-br from-fuchsia-200 to-violet-300 opacity-80 md:h-80 md:w-80" aria-hidden="true" />
          <div className="cta-shape--diamond absolute bottom-[12%] left-[12%] h-16 w-16 rotate-45 rounded-xl bg-gradient-to-br from-lime-200 to-cyan-200 md:h-24 md:w-24" aria-hidden="true" />
          <div className="relative z-10 max-w-[90vw] text-center md:max-w-6xl">
            <p className="mb-4 text-[clamp(2rem,5vw,5rem)] font-light leading-tight text-secondary dark:text-white">¿Listo para</p>
            <h2 className="text-[clamp(2.75rem,10vw,9rem)] font-black leading-[0.92] tracking-[-0.07em] text-secondary dark:text-white">transformar <span className="block text-primary dark:text-cyan-300">tu negocio?</span></h2>
            <div className="cta-underline mx-auto mt-6 h-1.5 w-1/2 origin-left scale-x-0 rounded-full bg-cyan-400 md:h-2" />
          </div>
        </div>
        <div className="relative flex h-full w-max min-w-screen shrink-0 items-center px-[8vw] md:px-[12vw]">
          <div className="cta-shape--orbit absolute -bottom-28 left-[12%] h-64 w-64 rounded-full bg-gradient-to-br from-cyan-200 via-violet-200 to-fuchsia-200 opacity-80 md:h-80 md:w-80" aria-hidden="true" />
          <div className="cta-shape--diamond absolute right-[14%] top-[16%] h-16 w-16 rotate-45 rounded-xl bg-gradient-to-br from-amber-200 to-pink-200 md:h-24 md:w-24" aria-hidden="true" />
          <p className="relative z-10 whitespace-nowrap text-[clamp(2.4rem,6vw,5.5rem)] font-semibold leading-tight tracking-tight text-secondary dark:text-white">
            <span className="cta-contact-highlight inline-block -rotate-2 rounded-xl bg-primary px-4 py-2 text-white shadow-[8px_9px_0_rgba(15,23,42,0.12)]">Contáctanos</span> hoy y <span className="cta-contact-highlight inline-block -rotate-1 rounded-lg bg-cyan-200 px-3 py-1 font-extrabold text-secondary">descubre</span> cómo podemos ayudarte a <span className="cta-contact-highlight inline-block rotate-2 rounded-xl bg-cyan-300 px-4 py-2 text-secondary shadow-[8px_9px_0_rgba(15,23,42,0.12)]">alcanzar tus objetivos.</span>
          </p>
          <svg className="absolute bottom-[18%] right-[8%] h-16 w-16 text-primary md:h-24 md:w-24" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <path d="M40 4v72M4 40h72M14.5 14.5l51 51m0-51-51 51" stroke="currentColor" strokeLinecap="round" strokeWidth="7" />
          </svg>
        </div>
        <div className="relative flex h-full w-screen shrink-0 items-center justify-center overflow-hidden px-6 md:px-12">
          <div className="cta-shape--orbit absolute -bottom-28 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-200 via-blue-200 to-violet-200 opacity-90 md:h-[28rem] md:w-[28rem]" aria-hidden="true" />
          <div className="cta-shape--diamond absolute left-[12%] top-[18%] h-16 w-16 rotate-45 rounded-xl bg-gradient-to-br from-pink-300 to-orange-200 md:h-24 md:w-24" aria-hidden="true" />
          <div className="relative z-10 text-center">
            <p className="mb-5 text-xl font-semibold text-gray-600 dark:text-gray-300 md:text-3xl">Hagamos crecer tu idea</p>
            <Link to="/contacto" className="btn-primary inline-flex items-center gap-3 rounded-xl px-8 py-4 text-lg shadow-lg shadow-primary/20 md:px-10 md:py-5 md:text-2xl">Iniciar proyecto <FiArrowRight size={24} /></Link>
          </div>
        </div>
      </div>
      {!prefersReducedMotion && (
        <div className="relative z-10 flex flex-col md:hidden">
          <section className="relative flex min-h-[72svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
            <motion.div className="absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-gradient-to-br from-cyan-300 via-emerald-300 to-lime-200 opacity-80" aria-hidden="true" initial={{ scale: 0.7, y: 60 }} whileInView={{ scale: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8 }} />
            <motion.div className="absolute right-10 top-16 h-10 w-10 rotate-45 rounded-lg bg-gradient-to-br from-orange-300 to-fuchsia-300 shadow-xl" aria-hidden="true" initial={{ rotate: 0, y: -30 }} whileInView={{ rotate: 135, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8 }} />
            <motion.div className="relative z-10" initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }}>
              <p className="mb-5 text-2xl font-bold leading-tight tracking-tight text-secondary dark:text-white">Tecnología <span className="text-primary dark:text-cyan-300">que impulsa</span></p>
              <h2 className="text-[clamp(4.5rem,23vw,7rem)] font-black leading-[0.8] tracking-[-0.09em] text-secondary dark:text-white">GNIUS</h2>
              <div className="relative mt-5 inline-flex -rotate-3 items-center rounded-xl bg-cyan-300 px-6 py-2 text-4xl font-extrabold leading-none tracking-tight text-secondary shadow-[7px_8px_0_rgba(15,23,42,0.12)]">DIGITAL
                <svg className="absolute -right-8 -top-5 h-10 w-10 text-primary" viewBox="0 0 80 80" fill="none" aria-hidden="true"><path d="M40 4v72M4 40h72M14.5 14.5l51 51m0-51-51 51" stroke="currentColor" strokeLinecap="round" strokeWidth="7" /></svg>
              </div>
              <div className="mx-auto mt-7 h-2 w-4/5 -rotate-2 rounded-full bg-primary" />
            </motion.div>
          </section>

          <section className="relative flex min-h-[62svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
            <motion.div className="absolute -bottom-10 -right-12 h-44 w-44 rounded-full border-[18px] border-cyan-200" aria-hidden="true" initial={{ scale: 0.6, rotate: -30 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8 }} />
            <motion.div className="relative z-10" initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }}>
              <p className="mb-3 text-base font-bold uppercase tracking-[0.28em] text-primary dark:text-cyan-300">Creamos</p>
              <h2 className="text-[clamp(3.4rem,16vw,5.5rem)] font-black leading-[0.82] tracking-[-0.08em] text-secondary dark:text-white">Soluciones</h2>
              <p className="mt-4 text-6xl font-light leading-none tracking-[-0.05em] text-primary dark:text-cyan-300"><span className="underline decoration-cyan-300 decoration-[5px] underline-offset-8">digitales</span></p>
            </motion.div>
          </section>

          <section className="relative flex min-h-[65svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
            <motion.div className="absolute -right-12 top-8 h-44 w-44 rounded-full bg-gradient-to-br from-fuchsia-200 to-violet-300 opacity-80" aria-hidden="true" initial={{ x: 45, rotate: -25 }} whileInView={{ x: 0, rotate: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8 }} />
            <motion.div className="relative z-10 max-w-md" initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }}>
              <p className="mb-3 text-3xl font-light leading-tight text-secondary dark:text-white">¿Listo para</p>
              <h2 className="text-[clamp(3.5rem,16vw,5.5rem)] font-black leading-[0.88] tracking-[-0.08em] text-secondary dark:text-white">transformar <span className="text-primary dark:text-cyan-300">tu negocio?</span></h2>
              <div className="mx-auto mt-6 h-1.5 w-1/2 rounded-full bg-cyan-400" />
            </motion.div>
          </section>

          <section className="relative flex min-h-[70svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
            <motion.div className="absolute -bottom-12 left-4 h-48 w-48 rounded-full bg-gradient-to-br from-cyan-200 via-violet-200 to-fuchsia-200 opacity-80" aria-hidden="true" initial={{ y: 45, scale: 0.7 }} whileInView={{ y: 0, scale: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8 }} />
            <motion.div className="relative z-10 max-w-lg text-[clamp(2rem,9vw,3.4rem)] font-semibold leading-[1.35] tracking-tight text-secondary dark:text-white" initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }}>
              <span className="inline-block -rotate-2 rounded-xl bg-primary px-3 py-1 text-white shadow-[6px_7px_0_rgba(15,23,42,0.12)]">Contáctanos</span> hoy y <span className="inline-block -rotate-1 rounded-lg bg-cyan-200 px-2 py-1 font-extrabold text-secondary">descubre</span> cómo podemos ayudarte a <span className="inline-block rotate-2 rounded-xl bg-cyan-300 px-3 py-1 text-secondary shadow-[6px_7px_0_rgba(15,23,42,0.12)]">alcanzar tus objetivos.</span>
            </motion.div>
          </section>

          <section className="relative flex min-h-[55svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
            <motion.div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-200 via-blue-200 to-violet-200 opacity-90" aria-hidden="true" initial={{ scale: 0.65, rotate: -25 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8 }} />
            <motion.div className="relative z-10" initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }}>
              <p className="mb-5 text-2xl font-semibold text-gray-600 dark:text-gray-300">Hagamos crecer tu idea</p>
              <Link to="/contacto" className="btn-primary inline-flex items-center gap-3 rounded-xl px-7 py-4 text-lg shadow-lg shadow-primary/20">Iniciar proyecto <FiArrowRight size={22} /></Link>
            </motion.div>
          </section>
        </div>
      )}
    </section>
  );
}
