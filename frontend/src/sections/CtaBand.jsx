import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { scrollToId } from '../lib/scroll';
import { Reveal } from '../components/Reveal';

const CtaBand = () => {
  const { t } = useLanguage();
  const c = t.ctaBand;

  return (
    <section className="relative py-20 lg:py-28 bg-brand-gradient overflow-hidden" data-testid="cta-band">
      <div className="absolute inset-0 molecule-pattern-light" aria-hidden="true" />
      <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto px-6 sm:px-12 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white">
            {c.title}
          </h2>
          <p className="mt-4 text-base md:text-lg text-blue-50 leading-relaxed">{c.sub}</p>
          <button
            data-testid="cta-band-button"
            onClick={() => scrollToId('#contact')}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white text-brand-blue text-sm font-bold px-8 py-4 shadow-[0_16px_40px_rgba(13,27,42,0.25)] transition-all duration-200 hover:scale-[1.04] active:scale-[0.98]"
          >
            {c.button}
            <ArrowRight size={16} />
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaBand;
