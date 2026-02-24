import { useTranslation } from 'react-i18next';
import './Philosophy.css';

interface PhilosophyItem {
  title: string;
  description: string;
  image: string;
  number: string;
  metadata: string;
}

export function Philosophy() {
  const { t } = useTranslation();

  const philosophies = t('philosophy.items', { returnObjects: true }) as PhilosophyItem[];

  return (
    <section id="philosophy" className="philosophy-section">
      <div className="philosophy-container">
        <div className="philosophy-collage">
          {philosophies.map((item, idx) => (
            <article 
              key={item.number} 
              className={`philosophy-card philosophy-card-${idx}`}
            >
              <div className="philosophy-card-inner">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                />
                <div className="philosophy-card-overlay" />
                
                <span className="philosophy-card-number">{item.number}</span>
                <span className="philosophy-card-metadata">{item.metadata}</span>
                
                <div className="philosophy-card-info">
                  <span className="philosophy-card-info-number">{item.number}</span>
                  <h3 className="philosophy-card-info-title">{item.title}</h3>
                  <p className="philosophy-card-info-desc">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
