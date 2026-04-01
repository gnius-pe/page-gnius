import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import type { Service } from '../types';

const heroImages = [
  'https://pub-bcc6063f2ea749b78e82ad516e2f7aef.r2.dev/landing-web/fotos/mjermirandoofficina.jpg',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80',
];

const services: Service[] = [
  {
    id: 1,
    title: 'Software a Medida (SaaS)',
    description: 'Desarrollo de sistemas web y aplicaciones que digitalizan procesos específicos del negocio.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
    features: [
      'Desarrollo web personalizado',
      'Aplicaciones empresariales',
      'APIs e integraciones',
      'Escalabilidad garantizada',
    ],
  },
  {
    id: 2,
    title: 'Ecosistema Digital "Todo Incluido"',
    description: 'Gestión total de infraestructura: hosting de alta velocidad, dominio y certificados SSL.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
    features: [
      'Hosting de alta velocidad',
      'Dominio incluido',
      'Certificado SSL',
      'Mantenimiento incluido',
    ],
  },
  {
    id: 3,
    title: 'Automatización de Procesos',
    description: 'Implementación de herramientas (bots, flujos de trabajo) para reducir tareas manuales.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80',
    features: [
      'Bots automatizados',
      'Flujos de trabajo',
      'Integración de herramientas',
      'Reducción de errores',
    ],
  },
  {
    id: 4,
    title: 'Transformación y Consultoría',
    description: 'Diagnóstico y guía para migrar negocios tradicionales a modelos digitales.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80',
    features: [
      'Diagnóstico digital',
      'Plan de migración',
      'Estrategia tecnológica',
      'Acompañamiento experto',
    ],
  },
  {
    id: 5,
    title: 'Soporte y Evolución Continua',
    description: 'Mantenimiento preventivo y actualizaciones constantes.',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=80',
    features: [
      'Mantenimiento preventivo',
      'Actualizaciones constantes',
      'Soporte técnico 24/7',
      'Mejoras continuas',
    ],
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16">
      <section className="relative min-h-[45vh] xl:min-h-[54vh] overflow-hidden -mt-16">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={heroImages[currentIndex]}
              alt="Servicios tecnológicos"
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-end justify-center pb-8 xl:pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto px-6"
          >
            <h1 className="heading-1 mb-3 text-white">Servicios</h1>
            <p className="text-lg text-gray-200">
              Soluciones integrales para impulsar tu transformación digital.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-secondary">
        <div className="container-custom">
          <div className="space-y-5">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card flex flex-col md:flex-row gap-4 overflow-hidden"
              >
                <div className="md:w-48 h-48 md:h-auto flex-shrink-0 rounded-xl overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="heading-2 text-xl mb-2 text-secondary dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <FiCheck className="text-accent flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-secondary/50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-3 text-secondary dark:text-white">¿Necesitas algo personalizado?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-5 max-w-xl mx-auto">
            Contáctanos y te ayudamos a encontrar la mejor solución para tu negocio.
          </p>
          <a href="/contacto" className="btn-primary">Contáctanos</a>
        </div>
      </section>
    </div>
  );
}
