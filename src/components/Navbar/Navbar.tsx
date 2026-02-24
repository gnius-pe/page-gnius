import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import './Navbar.css';

export function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  const navLinks = [
    { href: '#philosophy', label: t('nav.philosophy') },
    { href: '#divisions', label: t('nav.divisions') },
    { href: '#vision', label: t('nav.vision') },
    { href: '#culture', label: t('nav.culture') },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img 
            src="/logo-gnius.svg" 
            alt="GNIUS" 
          />
        </a>

        <nav className={`navbar-nav ${isOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <LanguageSelector />
          <ThemeToggle />
          <button
            className="navbar-menu"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu" onClick={() => setIsOpen(false)} />
      )}
    </header>
  );
}
