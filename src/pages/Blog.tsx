import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import type { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Cómo la transformación digital puede triplicar tus ventas',
    excerpt: 'Descubre cómo las empresas están utilizando la tecnología para aumentar sus ingresos de manera significativa.',
    date: '15 Feb 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    category: 'Transformación Digital',
  },
  {
    id: 2,
    title: '5 razones por las que tu empresa necesita un SaaS personalizado',
    excerpt: 'Ventajas de tener un software hecho a la medida de tu negocio y cómo puede mejorar tu eficiencia.',
    date: '10 Feb 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    category: 'SaaS',
  },
  {
    id: 3,
    title: 'El futuro del trabajo: Automatización inteligente',
    excerpt: 'Cómo la inteligencia artificial y la automatización están cambiando la forma en que trabajamos.',
    date: '5 Feb 2025',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60',
    category: 'Automatización',
  },
];

export default function Blog() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="heading-1 mb-3">Blog</h1>
            <p className="text-lg text-blue-100">
              Artículos sobre tecnología, innovación y transformación digital.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-5">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <FiCalendar />
                  <span>{post.date}</span>
                </div>
                <h3 className="heading-3 mb-2 text-secondary dark:text-white group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Leer más</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-secondary/50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-3 text-secondary dark:text-white">¿Quieres estar al día?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-5 max-w-xl mx-auto">
            Suscríbete a nuestro newsletter y recibe las últimas noticias sobre tecnología e innovación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn-primary">Suscribirse</button>
          </div>
        </div>
      </section>
    </div>
  );
}