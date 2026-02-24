import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import './FutureExpansion.css';

export function FutureExpansion() {
  const { t } = useTranslation();

  return (
    <Section id="future" background="primary">
      <div className="future-container">
        <div className="future-content">
          <h2 className="future-title">{t('future.title')}</h2>
          <p className="future-text">
            {t('future.text')}
          </p>
          <p className="future-tagline">
            {t('future.taglineBefore')}<span className="gradient-text">{t('future.taglineHighlight')}</span>{t('future.taglineAfter')}
          </p>
        </div>
        <div className="future-visual">
          <div className="future-shapes">
            <div className="future-circle future-circle-1" />
            <div className="future-circle future-circle-2" />
            <div className="future-circle future-circle-3" />
            <div className="future-circle future-circle-4" />
          </div>
        </div>
      </div>
    </Section>
  );
}
