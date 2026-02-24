import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiFilm, FiVideo, FiCamera, FiImage, FiMusic, FiMonitor, FiPlay, FiStar, FiUsers, FiAward } from 'react-icons/fi';
import { Button } from '../components/ui/Button';
import './PicturesPage.css';

const picturesServices = [
  { icon: <FiFilm />, title: 'services.0', description: 'pictures.servicesDesc.0' },
  { icon: <FiVideo />, title: 'services.1', description: 'pictures.servicesDesc.1' },
  { icon: <FiCamera />, title: 'services.2', description: 'pictures.servicesDesc.2' },
  { icon: <FiImage />, title: 'services.3', description: 'pictures.servicesDesc.3' },
  { icon: <FiMusic />, title: 'services.4', description: 'pictures.servicesDesc.4' },
  { icon: <FiMonitor />, title: 'services.5', description: 'pictures.servicesDesc.5' },
];

const portfolio = [
  { icon: <FiFilm />, category: 'pictures.portfolio.0.category', title: 'pictures.portfolio.0.title' },
  { icon: <FiVideo />, category: 'pictures.portfolio.1.category', title: 'pictures.portfolio.1.title' },
  { icon: <FiCamera />, category: 'pictures.portfolio.2.category', title: 'pictures.portfolio.2.title' },
  { icon: <FiImage />, category: 'pictures.portfolio.3.category', title: 'pictures.portfolio.3.title' },
];

const heroFeatures = [
  { title: 'pictures.heroFeatures.0.title', desc: 'pictures.heroFeatures.0.desc', icon: <FiFilm /> },
  { title: 'pictures.heroFeatures.1.title', desc: 'pictures.heroFeatures.1.desc', icon: <FiVideo /> },
  { title: 'pictures.heroFeatures.2.title', desc: 'pictures.heroFeatures.2.desc', icon: <FiCamera /> },
];

export function PicturesPage() {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="page-pictures">
      <section className="pictures-hero-new">
        <div className="hero-new-container">
          {/* Social Sidebar */}
          <div className="hero-social-sidebar">
            <a href="#" className="social-icon"><FiFilm /></a>
            <a href="#" className="social-icon"><FiVideo /></a>
            <a href="#" className="social-icon"><FiCamera /></a>
            <a href="#" className="social-icon"><FiImage /></a>
          </div>

          {/* Left Column - Content */}
          <div className="hero-content-new">
            <Link to="/" className="back-link-hero">
              <FiArrowLeft /> {t('pictures.back')}
            </Link>

            <span className="hero-eyebrow">
              {t('pictures.eyebrow')}
            </span>
            
            <h1 className="hero-title-new">
              GNIUS <span className="text-gradient-purple">Pictures</span>
            </h1>
            
            <div className="hero-title-line" />
            
            <p className="hero-description">
              {t('pictures.description')}
            </p>

            <div className="hero-features">
              {heroFeatures.map((feature, index) => (
                <div key={index} className="feature-pill">
                  <div className="feature-pill-icon">{feature.icon}</div>
                  <div className="feature-pill-text">
                    <span className="feature-pill-title">{t(feature.title)}</span>
                    <span className="feature-pill-desc">{t(feature.desc)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hero-visual-new">
            <div className="visual-card">
              <div className="visual-main">
                <div className="visual-circle">
                  <FiPlay className="visual-play-icon" />
                </div>
                <div className="visual-model-decoration">
                  <FiStar className="decoration-star" />
                  <FiAward className="decoration-award" />
                  <FiUsers className="decoration-users" />
                </div>
              </div>
              <div className="visual-floating-circle circle-1" />
              <div className="visual-floating-circle circle-2" />
              <div className="visual-floating-circle circle-3" />
            </div>
          </div>
        </div>
      </section>

      <section className="pictures-services">
        <div className="container">
          <div className="services-header">
            <h2 className="section-title">{t('pictures.servicesTitle')}</h2>
            <p className="services-subtitle">{t('pictures.servicesSubtitle')}</p>
          </div>
          
          <div className="carousel-wrapper">
            <button 
              className="carousel-arrow carousel-arrow-left" 
              onClick={() => scrollCarousel('left')}
              aria-label={t('pictures.carouselPrev')}
            >
              <FiArrowLeft />
            </button>
            
            <div 
              className="carousel-container"
              ref={carouselRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className={`carousel-track ${isPaused ? 'paused' : ''}`}>
                {[...picturesServices, ...picturesServices].map((service, index) => (
                  <div key={index} className="service-carousel-card">
                    <div className="service-carousel-icon">{service.icon}</div>
                    <div className="service-carousel-content">
                      <h3>{t(`pictures.${service.title}`)}</h3>
                      <p>{t(`pictures.${service.description}`)}</p>
                    </div>
                    <div className="service-carousel-number">{String((index % picturesServices.length) + 1).padStart(2, '0')}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="carousel-arrow carousel-arrow-right" 
              onClick={() => scrollCarousel('right')}
              aria-label={t('pictures.carouselNext')}
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </section>

      <section className="pictures-portfolio">
        <div className="container">
          <div className="portfolio-header">
            <h2 className="section-title">{t('pictures.portfolioTitle')}</h2>
            <p className="portfolio-subtitle">{t('pictures.portfolioSubtitle')}</p>
          </div>
          
          <div className="portfolio-grid">
            {portfolio.map((item, index) => (
              <div key={index} className={`portfolio-card portfolio-card-${index + 1}`}>
                <div className="portfolio-card-overlay">
                  <div className="portfolio-card-icon">{item.icon}</div>
                  <span className="portfolio-card-category">{t(item.category)}</span>
                  <h3>{t(item.title)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pictures-process">
        <div className="container">
          <h2 className="section-title">{t('pictures.processTitle')}</h2>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>{t('pictures.process.0.title')}</h3>
              <p>{t('pictures.process.0.desc')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>{t('pictures.process.1.title')}</h3>
              <p>{t('pictures.process.1.desc')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>{t('pictures.process.2.title')}</h3>
              <p>{t('pictures.process.2.desc')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>{t('pictures.process.3.title')}</h3>
              <p>{t('pictures.process.3.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pictures-cta">
        <div className="cta-content">
          <h2>{t('pictures.ctaTitle')}</h2>
          <p>{t('pictures.ctaText')}</p>
          <Button variant="primary" className="cta-button">{t('pictures.ctaButton')}</Button>
        </div>
      </section>
    </div>
  );
}
