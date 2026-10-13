import { ShieldCheck, Lightbulb, BadgeCheck, Handshake, Eye, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const iconMap = { shield: ShieldCheck, lightbulb: Lightbulb, badge: BadgeCheck, handshake: Handshake };
const TEAM_IMG =
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjBlbnRlcnByaXNlJTIwdGVjaG5vbG9neSUyMHRlYW18ZW58MHx8fHwxNzkxOTAyMDI5fDA&ixlib=rb-4.1.0&q=85';

const About = () => {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="relative py-20 lg:py-32 bg-white overflow-hidden" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <SectionHeading badge={a.badge} title={a.title} testid="about" />

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <div className="space-y-5 text-base md:text-lg text-brand-slate leading-relaxed">
              <p>{a.story1}</p>
              <p>{a.story2}</p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-brand-blue/15 bg-brand-mist p-6">
                <Eye className="text-brand-blue" size={22} />
                <h3 className="mt-3 text-base font-heading font-bold text-brand-navy">{a.visionTitle}</h3>
                <p className="mt-2 text-sm text-brand-slate leading-relaxed">{a.vision}</p>
              </div>
              <div className="rounded-2xl border border-brand-blue/15 bg-brand-mist p-6">
                <Target className="text-brand-blue" size={22} />
                <h3 className="mt-3 text-base font-heading font-bold text-brand-navy">{a.missionTitle}</h3>
                <p className="mt-2 text-sm text-brand-slate leading-relaxed">{a.mission}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative [perspective:1200px]">
              <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-10 blur-2xl" aria-hidden="true" />
              <div className="relative rounded-3xl overflow-hidden border border-brand-blue/15 shadow-[0_30px_60px_rgba(31,58,95,0.18)] rotate-1 hover:rotate-0 transition-transform duration-500">
                <img src={TEAM_IMG} alt={a.imageAlt} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 glass-card rounded-2xl px-5 py-4">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-blue">ARRAYA</p>
                <p className="text-sm font-heading font-bold text-brand-navy">PT Arraya Mitra Informatika</p>
              </div>
            </div>
          </Reveal>
        </div>

        <h3 className="mt-20 mb-8 text-center text-xl sm:text-2xl font-heading font-semibold text-brand-navy" data-testid="about-values-title">
          {a.valuesTitle}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {a.values.map((v, i) => {
            const Icon = iconMap[v.icon];
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <div
                  data-testid={`about-value-card-${i}`}
                  className="h-full rounded-2xl border border-brand-blue/15 bg-white p-6 shadow-[0_10px_30px_rgba(30,136,229,0.06)] hover:shadow-[0_20px_40px_rgba(30,136,229,0.12)] hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center text-white">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-4 text-base font-heading font-bold text-brand-navy">{v.title}</h4>
                  <p className="mt-2 text-sm text-brand-slate leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
