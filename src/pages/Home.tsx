import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const services = [
  { 
    title: 'Software a Medida', 
    desc: 'Desarrollo de sistemas web y aplicaciones que digitalizan procesos específicos.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60'
  },
  { 
    title: 'Ecosistema Digital', 
    desc: 'Gestión total de infraestructura: hosting, dominio y certificados SSL.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60'
  },
  { 
    title: 'Automatización', 
    desc: 'Implementación de herramientas para reducir tareas manuales.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60'
  },
];

export default function Home() {
  return (
    <div>
      {/* Video Hero - Edge to Edge Panoramic */}
      <section className="relative w-full overflow-hidden">
        <div className="hidden md:block relative h-[60vh] w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto video-panoramic"
          >
            <source src="https://pub-bcc6063f2ea749b78e82ad516e2f7aef.r2.dev/landing-web/videos/gnius-video-preview.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="md:hidden relative w-full aspect-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://pub-bcc6063f2ea749b78e82ad516e2f7aef.r2.dev/landing-web/videos/gnius-video-preview.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-secondary/70" />
        </div>
      </section>

      {/* Content Section - Title, Subtitle & Buttons */}
      <section className="relative -mt-16 md:-mt-24 pb-8 z-10">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-secondary/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-white/10 p-6 md:p-8 text-center"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-secondary dark:text-white">
              Transformamos ideas que ayudan a que tu negocio crezca.
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto"
            >
              Gestión e innovación con soluciones integrales. Transformamos tu negocio con tecnología de vanguardia.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-3 items-stretch sm:items-center sm:flex-row sm:justify-center"
            >
              <Link to="/contacto" className="btn-primary inline-flex items-center justify-center gap-2">
                Comenzar proyecto <FiArrowRight size={16} />
              </Link>
              <Link to="/servicios" className="btn-secondary inline-flex items-center justify-center gap-2">
                Ver servicios
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50 dark:bg-secondary/50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="heading-2 mb-3 text-secondary dark:text-white">¿Cómo podemos ayudarte?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Ofrecemos soluciones integrales para transformar tu negocio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl h-48 md:h-56"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="heading-3 mb-2 text-white">{service.title}</h3>
                  <p className="text-sm text-gray-200 line-clamp-2">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/servicios" className="btn-secondary">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-3">¿Listo para transformar tu negocio?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
          <Link to="/contacto" className="btn-primary inline-flex items-center gap-2">
            Iniciar proyecto <FiArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}