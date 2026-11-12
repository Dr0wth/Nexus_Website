import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import zhCN from './locales/zh-CN.json';

export const LANGUAGE_STORAGE_KEY = 'nexus-website-language';
export type SupportedLanguage = 'en' | 'zh-CN';

function initialLanguage(): SupportedLanguage {
  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === 'en' || saved === 'zh-CN') return saved;
  } catch {
    // Storage is optional (for example in strict private browsing).
  }

  const preferred = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  return preferred.some((language) => language.toLowerCase().startsWith('zh'))
    ? 'zh-CN'
    : 'en';
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    'zh-CN': { translation: zhCN },
  },
  lng: initialLanguage(),
  fallbackLng: 'en',
  supportedLngs: ['en', 'zh-CN'],
  interpolation: { escapeValue: false },
  // Empty Chinese strings intentionally fall back to the English text.
  returnEmptyString: false,
  react: { useSuspense: false },
  initAsync: false,
});

export default i18n;
