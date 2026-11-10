import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { useTheme } from '../../context/ThemeContext';
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
  const { theme } = useTheme();
  const footerIsDark = theme === 'light';
  const footerColors = footerIsDark
    ? { '--footer-main': '#ffffff', '--footer-muted': '#9ca3af', '--footer-divider': 'rgba(255,255,255,0.1)', '--footer-social': 'rgba(255,255,255,0.1)' }
    : { '--footer-main': '#1a202c', '--footer-muted': '#4b5563', '--footer-divider': '#d1d5db', '--footer-social': '#e5e7eb' };

  return (
    <footer data-site-footer className={'relative isolate overflow-hidden pt-12 pb-6 text-[color:var(--footer-main)] ' + (footerIsDark ? 'bg-secondary' : 'bg-white')} style={footerColors as CSSProperties}>
      <div data-footer-wipe className={'absolute inset-0 z-0 ' + (footerIsDark ? 'bg-secondary' : 'bg-white')} style={{ clipPath: 'circle(0% at 100% 0%)' }} aria-hidden="true" />
      <div className="relative z-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div>
            <Link to="/" className="inline-block mb-3">
              <img data-footer-logo src={Logo} alt="GNIUS CODE" className={footerIsDark ? 'h-8 invert' : 'h-8'} />
            </Link>
            <p className="text-sm text-[color:var(--footer-muted)] mb-4">
              Gestión e innovación con soluciones integrales. Transformamos tu negocio con tecnología de vanguardia.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-8 h-8 rounded-full bg-[color:var(--footer-social)] flex items-center justify-center hover:bg-primary transition-colors"
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
                  <Link to={link.path} className="text-sm text-[color:var(--footer-muted)] hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Servicios</h3>
            <ul className="space-y-1.5 text-sm text-[color:var(--footer-muted)]">
              <li>Software a Medida (SaaS)</li>
              <li>Ecosistema Digital</li>
              <li>Automatización</li>
              <li>Consultoría</li>
              <li>Soporte Continuo</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Contacto</h3>
            <ul className="space-y-1.5 text-sm text-[color:var(--footer-muted)]">
              <li>Tingo María, Huánuco, Perú</li>
              <li>gnius.code@gmail.com</li>
              <li>+51 916 439 905</li>
              <li>Lun - Vie: 9am - 7pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[color:var(--footer-divider)] pt-4 text-center">
          <p className="text-xs text-[color:var(--footer-muted)]">&copy; {new Date().getFullYear()} GNIUS CODE. Todos los derechos reservados.</p>
        </div>
      </div>
      </div>
    </footer>
  );
}