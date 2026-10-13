import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Gem, Sparkles, Database, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { scrollToId } from '../lib/scroll';
import MoleculeCanvas from '../components/MoleculeCanvas';

const cardIcons = [Gem, Sparkles, Database];
const cardPositions = ['top-4 left-0', 'top-[42%] right-0', 'bottom-2 left-10'];

const Hero = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const lines = [t.hero.line1, t.hero.line2, t.hero.line3];

  return (
    <section
      id="home"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-brand-mist via-white to-white pt-32 pb-20"
    >
      <div className="absolute inset-0 molecule-pattern opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-48 -right-48 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-cyan/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            data-testid="hero-badge"
            className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-brand-blue bg-white border border-brand-blue/20 rounded-full px-4 py-2 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gradient" aria-hidden="true" />
            {t.hero.badge}
          </motion.span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-brand-navy leading-[1.1]">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1 -mb-1">
                <motion.span
                  className={`block ${i === 1 ? 'text-brand-red' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 text-base md:text-lg text-brand-slate leading-relaxed max-w-xl"
            data-testid="hero-subheadline"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              data-testid="hero-products-button"
              onClick={() => scrollToId('#products')}
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient text-white text-sm font-semibold px-7 py-3.5 shadow-[0_12px_30px_rgba(30,136,229,0.35)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_16px_36px_rgba(30,136,229,0.45)] active:scale-[0.98]"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={16} />
            </button>
            <button
              data-testid="hero-contact-cta-button"
              onClick={() => scrollToId('#contact')}
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white text-sm font-semibold px-7 py-3.5 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              {t.hero.ctaSecondary}
            </button>
          </motion.div>
        </div>

        <motion.div
          style={{ y: yVisual }}
          className="relative h-[420px] sm:h-[500px] hidden md:block"
          data-testid="hero-visual"
        >
          <MoleculeCanvas className="absolute inset-0" />
          {t.hero.cards.map((card, i) => {
            const Icon = cardIcons[i];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute ${cardPositions[i]} z-10`}
              >
                <div
                  className="glass-card rounded-2xl p-4 w-56 animate-float-slow"
                  style={{ animationDelay: `${i * 1.4}s` }}
                  data-testid={`hero-glass-card-${i}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-heading font-bold text-brand-navy leading-tight">{card.title}</p>
                      <p className="text-xs text-brand-slate mt-0.5">{card.desc}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] font-semibold text-brand-blue tracking-wide">{card.stat}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => scrollToId('#about')}
        data-testid="hero-scroll-indicator"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-brand-blue/60 hover:text-brand-blue transition-colors"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
