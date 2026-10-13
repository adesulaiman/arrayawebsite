import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';

const Counter = ({ value, suffix, testid }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} data-testid={testid}>
      {display}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-12 bg-white" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <Reveal>
          <div className="rounded-3xl bg-brand-navy molecule-pattern-light px-8 py-10 sm:px-12 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 shadow-[0_20px_50px_rgba(31,58,95,0.25)]">
            {t.stats.items.map((s, i) => (
              <div
                key={i}
                className="text-center lg:text-left lg:border-l lg:border-white/10 lg:pl-8 lg:first:border-0 lg:first:pl-0"
              >
                <p className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-gradient">
                  <Counter value={s.value} suffix={s.suffix} testid={`stat-value-${i}`} />
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 font-medium leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Stats;
