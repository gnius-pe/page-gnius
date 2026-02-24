import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCode, FiSmartphone, FiCpu, FiCloud, FiGitBranch, FiDatabase, FiShield, FiServer } from 'react-icons/fi';
import { Button } from '../components/ui/Button';
import './CodePage.css';

const codeServices = [
  { icon: <FiCode />, title: 'services.0', description: 'code.servicesDesc.0' },
  { icon: <FiSmartphone />, title: 'services.1', description: 'code.servicesDesc.1' },
  { icon: <FiCpu />, title: 'services.2', description: 'code.servicesDesc.2' },
  { icon: <FiCloud />, title: 'services.3', description: 'code.servicesDesc.3' },
  { icon: <FiGitBranch />, title: 'services.4', description: 'code.servicesDesc.4' },
  { icon: <FiDatabase />, title: 'services.5', description: 'code.servicesDesc.5' },
  { icon: <FiShield />, title: 'services.6', description: 'code.servicesDesc.6' },
  { icon: <FiServer />, title: 'services.7', description: 'code.servicesDesc.7' },
];

const features = [
  'code.features.0',
  'code.features.1',
  'code.features.2',
  'code.features.3',
];

export function CodePage() {
  const { t } = useTranslation();

  return (
    <div className="page-code">
      <section className="page-hero">
        <Link to="/" className="back-link">
          <FiArrowLeft /> {t('code.back')}
        </Link>
        <div className="page-hero-content">
          <div className="page-hero-shapes">
            <div className="hero-shape hero-shape-1" />
            <div className="hero-shape hero-shape-2" />
            <div className="hero-shape hero-shape-3" />
          </div>
          <span className="page-hero-label">{t('code.label')}</span>
          <h1 className="page-hero-title">GNIUS <span className="gradient-text">Code</span></h1>
          <p className="page-hero-subtitle">{t('code.subtitle')}</p>
          <p className="page-hero-description">{t('code.description')}</p>
        </div>
      </section>

      <section className="page-services">
        <div className="container">
          <h2 className="section-title">{t('code.servicesTitle')}</h2>
          
          <div className="services-grid">
            {codeServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{t(`code.${service.title}`)}</h3>
                <p>{t(`code.${service.description}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-features">
        <div className="container">
          <div className="features-content">
            <div className="features-text">
              <h2 className="section-title">{t('code.whyTitle')}</h2>
              <ul className="features-list">
                {features.map((feature, index) => (
                  <li key={index}>{t(feature)}</li>
                ))}
              </ul>
            </div>
            <div className="features-visual">
              <div className="code-visual">
                <div className="code-line">
                  <span className="keyword">const</span> <span className="variable">gnius</span> = <span className="bracket">{'{'}</span>
                </div>
                <div className="code-line indent-1">
                  <span className="property">innovation</span>: <span className="string">"unlimited"</span>,
                </div>
                <div className="code-line indent-1">
                  <span className="property">quality</span>: <span className="string">"excellence"</span>,
                </div>
                <div className="code-line indent-1">
                  <span className="property">commitment</span>: <span className="string">"long-term"</span>,
                </div>
                <div className="code-line indent-1">
                  <span className="property">impact</span>: <span className="string">"global"</span>
                </div>
                <div className="code-line">
                  <span className="bracket">{'}'}</span>;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <h2>{t('code.ctaTitle')}</h2>
          <p>{t('code.ctaText')}</p>
          <div className="cta-buttons">
            <Button variant="primary">{t('code.ctaButton')}</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
