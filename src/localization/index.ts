import { createI18n } from 'vue-i18n';

import en from '../../locales/en.json';
import pt from '../../locales/pt.json';

const loadLocaleMessages = async (locale: string) => {
  try {
    const messages = await import(`../../locales/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load locale messages for ${locale}:`, error);
    return {}; 
  }
};

const formatsCache: Record<string, any> = {};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: { en, pt },  
  numberFormats: {},
  datetimeFormats: {},
});

const loadAndSetLocale = async (locale: string) => {  
  i18n.global.locale.value = locale;  
};

export { i18n, loadAndSetLocale };