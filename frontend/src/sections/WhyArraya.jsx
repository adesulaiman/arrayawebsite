import { MapPin, Layers, ShieldCheck, Route, BadgeCheck, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const iconMap = { mappin: MapPin, layers: Layers, shield: ShieldCheck, route: Route, badge: BadgeCheck, headphones: Headphones };

const WhyArraya = () => {
  const { t } = useLanguage();
  const w = t.why;

  return (
    <section id="why-us" className="relative py-20 lg:py-32 bg-brand-navy overflow-hidden" data-testid="why-section">
      <div className="absolute inset-0 molecule-pattern-light opacity-70" aria-hidden="true" />
      <div
        className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-brand-blue/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <SectionHeading badge={w.badge} title={w.title} sub={w.sub} dark testid="why" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {w.points.map((point, i) => {
            const Icon = iconMap[point.icon];
            return (
              <Reveal key={point.title} delay={(i % 3) * 0.08}>
                <div
                  data-testid={`why-point-${i}`}
                  className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7 hover:bg-white/10 hover:border-brand-cyan/30 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center text-white shadow-lg">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-base font-heading font-bold text-white">{point.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{point.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyArraya;
