import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';

const contactInfo = [
  { icon: FiMapPin, label: 'Ubicación', value: 'Tingo María, Huánuco, Perú' },
  { icon: FiMail, label: 'Email', value: 'gnius.code@gmail.com' },
  { icon: FiPhone, label: 'Teléfono', value: '+51 916 439 905' },
  { icon: FiClock, label: 'Horario', value: 'Lun - Vie: 9am - 7pm' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-20">
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="heading-1 mb-3">Contacto</h1>
            <p className="text-lg text-blue-100">
              ¿Tienes un proyecto en mente? Hablemos.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-4 text-secondary dark:text-white">Escríbenos</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Completa el formulario y te contactaremos lo más pronto posible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-secondary dark:text-white">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-secondary dark:text-white">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-secondary dark:text-white">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-secondary dark:text-white">Mensaje *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <FiSend /> Enviar mensaje
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-4 text-secondary dark:text-white">Información de contacto</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                También puedes contactarnos a través de estos medios.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{info.label}</div>
                      <div className="text-gray-600 dark:text-gray-400">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gray-50 dark:bg-secondary/50 rounded-xl">
                <h3 className="font-semibold mb-2">¿Necesitas ayuda inmediata?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Contáctanos por WhatsApp para una respuesta más rápida.
                </p>
                <a
                    href="https://wa.me/51"
                    className="inline-flex items-center gap-2 mt-4 text-primary font-medium"
                >
                    Chatear ahora →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}