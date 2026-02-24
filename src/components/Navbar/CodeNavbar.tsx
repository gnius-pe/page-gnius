import { Link, useLocation } from 'react-router-dom';
import { FiCode, FiLayers } from 'react-icons/fi';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import './NavbarDivision.css';

export function CodeNavbar() {
  const location = useLocation();
  const isCodePage = location.pathname === '/code';

  return (
    <header className="navbar navbar-division">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo-gnius.svg" alt="GNIUS" />
        </Link>

        <nav className="navbar-division-links">
          <Link to="/code" className={`division-link ${isCodePage ? 'active' : ''}`}>
            <FiCode className="division-icon" />
            <span>Code</span>
          </Link>
          <Link to="/pictures" className="division-link">
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
