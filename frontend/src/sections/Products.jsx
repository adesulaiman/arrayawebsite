import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const Frame = ({ src, alt, dark = false, testid }) => (
  <div className="[perspective:1400px]">
    <div
      data-testid={testid}
      className={`rounded-2xl overflow-hidden border rotate-1 hover:rotate-0 transition-transform duration-500 ${
        dark
          ? 'border-brand-cyan/25 bg-brand-ink shadow-[0_30px_70px_rgba(13,27,42,0.5),0_0_60px_rgba(79,195,247,0.12)]'
          : 'border-brand-blue/15 bg-white shadow-[0_30px_60px_rgba(31,58,95,0.18)]'
      }`}
    >
      <div className={`flex items-center gap-2 px-4 py-3 ${dark ? 'bg-black/60' : 'bg-brand-ink'}`}>
        <span className="w-2.5 h-2.5 rounded-full bg-brand-red/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-brand-blue/80" />
        <span className="ml-3 flex-1 text-[10px] font-medium text-slate-400 bg-white/10 rounded-md px-3 py-1 truncate">
          {alt}
        </span>
      </div>
      <img src={src} alt={alt} loading="lazy" className="w-full aspect-[16/10] object-cover object-top" />
    </div>
  </div>
);

const Products = () => {
  const { t } = useLanguage();
  const p = t.products;
  const media = {
    jewelry: { src: '/assets/jewelry-dashboard.webp', dark: false, route: '/products/jewelry-management' },
    loge: { src: '/assets/loge-main.webp', dark: true, route: '/products/loge-knowledge-ai' },
  };

  return (
    <section id="products" className="relative py-20 lg:py-32 bg-brand-mist overflow-hidden" data-testid="products-section">
      <div className="absolute inset-0 molecule-pattern opacity-40" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <SectionHeading badge={p.badge} title={p.title} sub={p.sub} testid="products" />

        {p.items.map((item, i) => {
          const m = media[item.id];
          return (
            <div
              key={item.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i > 0 ? 'mt-24 lg:mt-36' : ''}`}
              data-testid={`product-block-${item.id}`}
            >
              <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <span className="inline-block text-xs font-semibold tracking-[0.16em] uppercase text-brand-blue bg-white border border-brand-blue/20 rounded-full px-4 py-1.5">
                  {item.category}
                </span>
                <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight">
                  {item.name}
                </h3>
                <p className="mt-3 text-base md:text-lg font-medium text-brand-red">{item.tagline}</p>
                <p className="mt-3 text-sm md:text-base text-brand-slate leading-relaxed">{item.desc}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
                  {item.features.slice(0, 8).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-brand-slate">
                      <Check size={15} className="mt-0.5 shrink-0 text-brand-blue" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={m.route}
                  data-testid={`product-card-${item.id}-link`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-navy hover:bg-brand-ink text-white text-sm font-semibold px-6 py-3 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  {p.detail}
                  <ArrowRight size={16} />
                </Link>
              </Reveal>
              <Reveal delay={0.15} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <Frame src={m.src} alt={item.imageAlt} dark={m.dark} testid={`product-frame-${item.id}`} />
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
