import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locale/en.json'; 

i18n
  .use(initReactI18next)
  .init({
    returnObjects: true,
    resources: {
      en: {
        translation: en, 
      },
    },
    lng: 'en', 
    fallbackLng: 'en', 
    debug: true,
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;