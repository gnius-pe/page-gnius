import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import Logo from '../../assets/logo-gnius.svg';

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contacto', path: '/contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-secondary/80 backdrop-blur-md border-b border-white/20 dark:border-white/10">
      <div className="container-custom">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="GNIUS CODE" className="h-10 dark:invert" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-secondary dark:text-white hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-secondary shadow-lg transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="container-custom py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium py-2 transition-colors ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-secondary dark:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 py-2 font-medium"
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
            {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
          </button>
        </div>
      </div>
    </nav>
  );
}