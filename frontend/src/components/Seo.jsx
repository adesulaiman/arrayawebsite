import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Seo = ({ titleKey, descKey }) => {
  const { lang, t } = useLanguage();
  useEffect(() => {
    document.title = t.meta[titleKey];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t.meta[descKey]);
  }, [lang, t, titleKey, descKey]);
  return null;
};

export default Seo;
