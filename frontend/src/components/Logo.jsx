import { useLanguage } from '../context/LanguageContext';

const Logo = ({ onWhiteBadge = false, className = 'h-10' }) => {
  const { t } = useLanguage();
  const img = (
    <img
      src="/assets/logo-arraya.webp"
      alt={t.footer.logoAlt}
      className={`${className} w-auto`}
      loading="eager"
    />
  );
  if (onWhiteBadge) {
    return <span className="inline-flex bg-white rounded-xl px-4 py-3 shadow-lg">{img}</span>;
  }
  return img;
};

export default Logo;
