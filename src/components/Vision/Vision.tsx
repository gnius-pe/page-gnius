import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import './Vision.css';

export function Vision() {
  const { t } = useTranslation();

  return (
    <Section id="vision" background="dark">
      <div className="vision-container">
        <div className="vision-content">
          <h2 className="vision-title">{t('vision.title')}</h2>
          <p className="vision-text">
            {t('vision.text')}
          </p>
          <p className="vision-text-secondary">
            {t('vision.textSecondary')}
          </p>
        </div>
      </div>
    </Section>
  );
}
