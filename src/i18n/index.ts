import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import es from './es';
import pt from './pt';
import zh from './zh';

const resources = {
  en,
  es,
  pt,
  zh,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('gnius-language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
