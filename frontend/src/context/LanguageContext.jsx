import { createContext, useContext, useEffect, useState } from 'react';
import id from '../i18n/id.json';
import en from '../i18n/en.json';

const dictionaries = { id, en };
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('arraya-lang') || 'id');

  useEffect(() => {
    localStorage.setItem('arraya-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
