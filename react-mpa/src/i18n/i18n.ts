import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tranKo from './ko'
// import tranEn from './Files/en.json';

const resources = {
    // en: { translation: tranEn },
    ko: { translation: tranKo },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'ko',
    fallbackLng: 'ko',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
})

export default i18n;