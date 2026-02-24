import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode, FiSmartphone, FiCpu, FiLayers, FiShield, FiZap } from 'react-icons/fi';
import { Section } from '../ui/Section';
import './Divisions.css';

export function Divisions() {
  const { t } = useTranslation();

  return (
    <Section id="divisions" background="primary">
      <div className="divisions-container">
        <h2 className="divisions-main-title">{t('divisions.title')}</h2>
        
        <div className="divisions-grid">
          <Link to="/code" className="division-card division-card-code">
            <div className="division-card-visual">
              <div className="card-shape card-shape-1" />
              <div className="card-shape card-shape-2" />
              <div className="card-shape card-shape-3" />
              <FiCode className="division-card-icon" />
            </div>
            <div className="division-card-content">
              <span className="division-card-label">{t('divisions.code.label')}</span>
              <h3 className="division-card-title">GNIUS <span className="gradient-text">Code</span></h3>
              <p className="division-card-subtitle">{t('divisions.code.subtitle')}</p>
              <div className="division-card-services">
                <span><FiCode /> {t('divisions.code.services.0')}</span>
                <span><FiSmartphone /> {t('divisions.code.services.1')}</span>
                <span><FiCpu /> {t('divisions.code.services.3')}</span>
              </div>
              <div className="division-card-action">
                <span>{t('divisions.explore')} <FiArrowRight /></span>
              </div>
            </div>
          </Link>

          <Link to="/pictures" className="division-card division-card-pictures">
            <div className="division-card-visual">
              <div className="card-shape card-shape-1 pictures" />
              <div className="card-shape card-shape-2 pictures" />
              <div className="card-shape card-shape-3 pictures" />
              <FiLayers className="division-card-icon" />
            </div>
            <div className="division-card-content">
              <span className="division-card-label">{t('divisions.pictures.label')}</span>
              <h3 className="division-card-title">GNIUS <span className="gradient-text-purple">Pictures</span></h3>
              <p className="division-card-subtitle">{t('divisions.pictures.subtitle')}</p>
              <div className="division-card-services">
                <span><FiLayers /> {t('divisions.pictures.services.0')}</span>
                <span><FiZap /> {t('divisions.pictures.services.1')}</span>
                <span><FiShield /> {t('divisions.pictures.services.3')}</span>
              </div>
              <div className="division-card-action">
                <span>{t('divisions.explore')} <FiArrowRight /></span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
}
