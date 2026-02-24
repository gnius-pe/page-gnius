import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import './Hero.css';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://pub-bcc6063f2ea749b78e82ad516e2f7aef.r2.dev/landing-web/fotos/piezas.png" 
          alt="" 
          className="hero-bg-image"
        />
        <div className="hero-overlay" />
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />
        <div className="hero-gradient" />
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          {t('hero.titleBefore')}<span className="gradient-text">{t('hero.titleHighlight')}</span>{t('hero.titleAfter')}
        </h1>
        
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        
        <div className="hero-actions">
          <Button variant="primary">{t('hero.cta1')}</Button>
          <Button variant="outline">{t('hero.cta2')}</Button>
        </div>
      </div>

      <div className="hero-scroll">
        <span>{t('hero.scroll')}</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
