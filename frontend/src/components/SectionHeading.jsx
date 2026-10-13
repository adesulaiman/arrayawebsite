import { Reveal } from './Reveal';

const SectionHeading = ({ badge, title, sub, dark = false, align = 'center', testid }) => (
  <Reveal
    className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-14 lg:mb-20`}
  >
    <span
      data-testid={`${testid}-badge`}
      className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border ${
        dark
          ? 'border-brand-cyan/30 text-brand-cyan bg-brand-cyan/10'
          : 'border-brand-blue/20 text-brand-blue bg-brand-blue/5'
      }`}
    >
      {badge}
    </span>
    <h2
      className={`mt-5 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight ${
        dark ? 'text-white' : 'text-brand-navy'
      }`}
    >
      {title}
    </h2>
    {sub && (
      <p className={`mt-4 text-base md:text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-brand-slate'}`}>
        {sub}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
