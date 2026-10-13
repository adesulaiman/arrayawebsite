import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhatsAppFloat = () => {
  const { t } = useLanguage();
  return (
    <a
      href={t.contact.info.waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.contact.info.waButton}
      data-testid="whatsapp-floating-button"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_12px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-transform duration-200"
    >
      <MessageCircle size={26} />
    </a>
  );
};

export default WhatsAppFloat;
