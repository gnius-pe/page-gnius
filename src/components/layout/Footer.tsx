import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiYoutube, FiTwitter, FiGithub } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa6';
import Logo from '../../assets/logo-gnius.svg';

const socialLinks = [
  { name: 'GitHub', icon: FiGithub, url: '#' },
  { name: 'Facebook', icon: FiFacebook, url: '#' },
  { name: 'Instagram', icon: FiInstagram, url: '#' },
  { name: 'YouTube', icon: FiYoutube, url: '#' },
  { name: 'TikTok', icon: FaTiktok, url: '#' },
  { name: 'X', icon: FiTwitter, url: '#' },
];

const quickLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contacto', path: '/contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div>
            <Link to="/" className="inline-block mb-3">
              <img src={Logo} alt="GNIUS CODE" className="h-8 invert" />
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Gestión e innovación con soluciones integrales. Transformamos tu negocio con tecnología de vanguardia.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Enlaces Rápidos</h3>
            <ul className="space-y-1.5">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Servicios</h3>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li>Software a Medida (SaaS)</li>
              <li>Ecosistema Digital</li>
              <li>Automatización</li>
              <li>Consultoría</li>
              <li>Soporte Continuo</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Contacto</h3>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li>Tingo María, Huánuco, Perú</li>
              <li>gnius.code@gmail.com</li>
              <li>+51 916 439 905</li>
              <li>Lun - Vie: 9am - 7pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 text-center">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} GNIUS CODE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}