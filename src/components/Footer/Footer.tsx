import { useTranslation } from 'react-i18next';
import { FiInstagram, FiLinkedin, FiTwitter, FiYoutube, FiMail } from 'react-icons/fi';
import './Footer.css';

const socialLinks = [
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
  { icon: FiYoutube, href: '#', label: 'YouTube' },
  { icon: FiMail, href: 'mailto:hello@gnius.com', label: 'Email' },
];

export function Footer() {
  const { t } = useTranslation();

  const companyLinks = t('footer.company.links', { returnObjects: true }) as string[];
  const educationLinks = t('footer.education.links', { returnObjects: true }) as string[];
  const legalLinks = t('footer.legal.links', { returnObjects: true }) as string[];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-main">
          <div className="footer-brand">
            <img 
              src="/logo-gnius.svg" 
              alt="GNIUS" 
              className="footer-logo"
            />
            <p className="footer-description">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">{t('footer.company.title')}</h4>
              <ul className="footer-list">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">{t('footer.education.title')}</h4>
              <ul className="footer-list">
                {educationLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">{t('footer.legal.title')}</h4>
              <ul className="footer-list">
                {legalLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Connect</h4>
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    className="footer-social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-copyright">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
