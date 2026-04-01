import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Plataforma E-commerce',
    description: 'Tienda online completa con gestión de inventario, pasarela de pagos y panel de administración.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60',
    category: 'E-commerce',
  },
  {
    id: 2,
    title: 'Sistema de Gestión',
    description: 'ERP personalizado para empresa de distribución con control de inventario y rutas de entrega.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    category: 'ERP',
  },
  {
    id: 3,
    title: 'App Mobile',
    description: 'Aplicación de delivery con geolocalización, tracking en tiempo real y panel de administración.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60',
    category: 'Mobile',
  },
  {
    id: 4,
    title: 'Portal Corporativo',
    description: 'Sitio web institucional con blog, área de clientes y sistema de gestión de contenidos.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60',
    category: 'Web',
  },
];

export default function Portfolio() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="heading-1 mb-3">Portfolio</h1>
            <p className="text-lg text-blue-100">
              Proyectos que demuestran nuestra experiencia y capacidad de innovación.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-accent text-secondary text-sm font-medium rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex gap-3">
                    <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <FiExternalLink className="text-white" />
                    </button>
                    <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <FiGithub className="text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-secondary/50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-3 text-secondary dark:text-white">¿Tienes un proyecto en mente?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-5 max-w-xl mx-auto">
            Cuéntanos tu idea y convirtámosla en realidad.
          </p>
          <a href="/contacto" className="btn-primary">Iniciar proyecto</a>
        </div>
      </section>
    </div>
  );
}