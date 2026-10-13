import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const Process = () => {
  const { t } = useLanguage();
  const p = t.process;

  return (
    <section id="process" className="relative py-20 lg:py-32 bg-white" data-testid="process-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <SectionHeading badge={p.badge} title={p.title} sub={p.sub} testid="process" />
        <div className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
          <div
            className="hidden lg:block absolute top-7 left-[11%] right-[11%] h-px bg-gradient-to-r from-brand-blue/20 via-brand-blue/50 to-brand-cyan/40"
            aria-hidden="true"
          />
          {p.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative text-center">
              <div
                data-testid={`process-step-${i}`}
                className="relative z-10 mx-auto w-14 h-14 rounded-2xl bg-white border border-brand-blue/20 shadow-[0_10px_25px_rgba(30,136,229,0.12)] flex items-center justify-center text-lg font-heading font-extrabold text-brand-gradient"
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-5 text-base font-heading font-bold text-brand-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-brand-slate leading-relaxed max-w-[240px] mx-auto">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
