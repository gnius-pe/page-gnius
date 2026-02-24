import { Link, useLocation } from 'react-router-dom';
import { FiCode, FiLayers } from 'react-icons/fi';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import './NavbarDivision.css';

export function PicturesNavbar() {
  const location = useLocation();
  const isPicturesPage = location.pathname === '/pictures';

  return (
    <header className="navbar navbar-division">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo-gnius.svg" alt="GNIUS" />
        </Link>

        <nav className="navbar-division-links">
          <Link to="/code" className="division-link">
            <FiCode className="division-icon" />
            <span>Code</span>
          </Link>
          <Link to="/pictures" className={`division-link ${isPicturesPage ? 'active' : ''}`}>
            <FiLayers className="division-icon" />
            <span>Pictures</span>
          </Link>
        </nav>

        <div className="navbar-actions">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
