import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import './Culture.css';

interface CultureValue {
  title: string;
  description: string;
  image: string;
}

export function Culture() {
  const { t } = useTranslation();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                const newSet = new Set(prev);
                newSet.add(index);
                return newSet;
              });
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const values = t('culture.values', { returnObjects: true }) as CultureValue[];

  return (
    <section id="culture" className="culture-section">
      <div className="culture-container">
        <div className="culture-cards">
          {values.map((value, index) => (
            <article
              key={value.title}
              ref={(el) => { cardRefs.current[index] = el; }}
              className={`culture-card culture-card-${index % 2 === 0 ? 'left' : 'right'} ${visibleCards.has(index) ? 'visible' : ''}`}
            >
              <div
                className="culture-card-image"
                style={{ backgroundImage: `url(${value.image})` }}
              >
                <div className="culture-card-overlay" />
              </div>
              <div className="culture-card-content">
                <h3 className="culture-card-title">{value.title}</h3>
                <p className="culture-card-description">{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
