import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Shot = ({ src, alt, dark, testid }) => (
  <div
    data-testid={testid}
    className={`rounded-2xl overflow-hidden border ${
      dark
        ? 'border-brand-cyan/25 bg-brand-ink shadow-[0_30px_70px_rgba(13,27,42,0.5),0_0_60px_rgba(79,195,247,0.12)]'
        : 'border-brand-blue/15 bg-white shadow-[0_30px_60px_rgba(31,58,95,0.18)]'
    }`}
  >
    <div className={`flex items-center gap-2 px-4 py-3 ${dark ? 'bg-black/60' : 'bg-brand-ink'}`}>
      <span className="w-2.5 h-2.5 rounded-full bg-brand-red/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-brand-blue/80" />
      <span className="ml-3 flex-1 text-[10px] font-medium text-slate-400 bg-white/10 rounded-md px-3 py-1 truncate">{alt}</span>
    </div>
    <img src={src} alt={alt} loading="lazy" className="w-full object-cover object-top" />
  </div>
);

const ProductPage = ({ productKey }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const product = t.products.items.find((i) => i.id === productKey);
  const detail = t.productPages[productKey];
  const pp = t.productPages;
  const dark = productKey === 'loge';
  const mainImg = productKey === 'jewelry' ? '/assets/jewelry-dashboard.webp' : '/assets/loge-main.webp';
  const secondImg = productKey === 'loge' ? '/assets/loge-connectors.webp' : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo titleKey={productKey === 'jewelry' ? 'jewelryTitle' : 'logeTitle'} descKey={productKey === 'jewelry' ? 'jewelryDesc' : 'logeDesc'} />
      <Navbar />
      <main data-testid={`product-page-${productKey}`} className="pt-28">
        <section className="relative py-14 lg:py-20 bg-gradient-to-b from-brand-mist to-white overflow-hidden">
          <div className="absolute inset-0 molecule-pattern opacity-50" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <Reveal>
              <Link
                to="/"
                data-testid="product-back-link"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-navy transition-colors"
              >
                <ArrowLeft size={15} />
                {pp.back}
              </Link>
              <span className="mt-8 block w-fit text-xs font-semibold tracking-[0.16em] uppercase text-brand-blue bg-white border border-brand-blue/20 rounded-full px-4 py-1.5">
                {detail.category}
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-brand-navy">
                {product.name}
              </h1>
              <p className="mt-4 text-base md:text-lg font-medium text-brand-red max-w-2xl">{product.tagline}</p>
              <p className="mt-4 text-sm md:text-base text-brand-slate leading-relaxed max-w-3xl">{detail.desc}</p>
              <button
                data-testid="product-cta-button"
                onClick={() => navigate('/', { state: { scrollTo: '#contact' } })}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-redDark text-white text-sm font-semibold px-7 py-3.5 shadow-[0_12px_30px_rgba(211,47,47,0.28)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                {pp.ctaButton}
                <ArrowRight size={16} />
              </button>
            </Reveal>

            <Reveal delay={0.15} className="mt-14">
              <Shot src={mainImg} alt={detail.heroNote} dark={dark} testid="product-main-shot" />
            </Reveal>

            <div className="mt-12 grid sm:grid-cols-3 gap-5">
              {detail.highlights.map((h, i) => (
                <Reveal key={h.label} delay={i * 0.08}>
                  <div className="rounded-2xl border border-brand-blue/15 bg-white p-6 text-center shadow-[0_10px_30px_rgba(30,136,229,0.06)]" data-testid={`product-highlight-${i}`}>
                    <p className="text-3xl font-heading font-extrabold text-brand-gradient">{h.value}</p>
                    <p className="mt-1.5 text-xs sm:text-sm text-brand-slate font-medium">{h.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-navy tracking-tight">
                {pp.featuresTitle}
              </h2>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.features.map((f, i) => (
                <Reveal key={f} delay={(i % 3) * 0.06}>
                  <div
                    className="flex items-start gap-3 rounded-2xl border border-brand-blue/15 bg-brand-mist px-5 py-4 h-full"
                    data-testid={`product-feature-${i}`}
                  >
                    <span className="shrink-0 mt-0.5 w-6 h-6 rounded-lg bg-brand-gradient text-white flex items-center justify-center">
                      <Check size={13} />
                    </span>
                    <p className="text-sm font-medium text-brand-navy leading-relaxed">{f}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {secondImg && (
              <Reveal delay={0.1} className="mt-14">
                <Shot src={secondImg} alt="Loge Knowledge AI connectors" dark testid="product-second-shot" />
              </Reveal>
            )}
          </div>
        </section>

        <section className="relative py-16 lg:py-24 bg-brand-gradient overflow-hidden">
          <div className="absolute inset-0 molecule-pattern-light" aria-hidden="true" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">{pp.ctaTitle}</h2>
              <p className="mt-3 text-base md:text-lg text-blue-50">{pp.ctaSub}</p>
              <button
                data-testid="product-bottom-cta-button"
                onClick={() => navigate('/', { state: { scrollTo: '#contact' } })}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-brand-blue text-sm font-bold px-8 py-4 shadow-[0_16px_40px_rgba(13,27,42,0.25)] transition-all duration-200 hover:scale-[1.04] active:scale-[0.98]"
              >
                {pp.ctaButton}
                <ArrowRight size={16} />
              </button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default ProductPage;
