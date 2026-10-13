import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const TechStack = () => {
  const { t } = useLanguage();
  const items = [...t.tech.items, ...t.tech.items];

  return (
    <section className="relative py-20 lg:py-28 bg-brand-mist overflow-hidden" data-testid="tech-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <SectionHeading badge={t.tech.badge} title={t.tech.title} sub={t.tech.sub} testid="tech" />
      </div>
      <Reveal>
        <div className="relative" data-testid="tech-marquee">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-mist to-transparent z-10" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-mist to-transparent z-10" aria-hidden="true" />
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {items.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="shrink-0 rounded-full border border-brand-blue/20 bg-white px-7 py-3.5 text-sm sm:text-base font-heading font-semibold text-brand-navy shadow-[0_8px_20px_rgba(30,136,229,0.08)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default TechStack;
