import { PenLine, Network, Database, Code2, BrainCircuit, PlugZap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const iconMap = { pen: PenLine, network: Network, database: Database, code: Code2, brain: BrainCircuit, plug: PlugZap };

const Services = () => {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="relative py-20 lg:py-32 bg-brand-mist overflow-hidden" data-testid="services-section">
      <div className="absolute inset-0 molecule-pattern opacity-40" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <SectionHeading badge={s.badge} title={s.title} sub={s.sub} testid="services" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <div
                  data-testid={`service-card-${i}`}
                  className="group h-full rounded-2xl border border-brand-blue/15 bg-white p-7 shadow-[0_10px_30px_rgba(30,136,229,0.06)] hover:shadow-[0_20px_44px_rgba(30,136,229,0.14)] hover:-translate-y-1.5 hover:border-brand-blue/35 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-mist border border-brand-blue/15 flex items-center justify-center text-brand-blue group-hover:bg-brand-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-heading font-bold text-brand-navy">{item.title}</h3>
                  <p className="mt-2.5 text-sm text-brand-slate leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
