import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Landmark, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const Projects = () => {
  const { t } = useLanguage();
  const p = t.projects;
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-white" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <SectionHeading badge={p.badge} title={p.title} sub={p.sub} testid="projects" />

        <div className="grid md:grid-cols-2 gap-8">
          {p.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1}>
              <article
                data-testid={`project-card-${item.id}`}
                className="group h-full rounded-2xl border border-brand-blue/15 bg-white overflow-hidden shadow-[0_10px_30px_rgba(30,136,229,0.06)] hover:shadow-[0_24px_50px_rgba(30,136,229,0.14)] hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  {item.id === 'kusuma' ? (
                    <img
                      src="/assets/kusuma.webp"
                      alt={item.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-brand-navy molecule-pattern-light flex items-center justify-center group-hover:scale-[1.04] transition-transform duration-500">
                      <div className="text-center">
                        <div className="mx-auto w-16 h-16 rounded-2xl bg-brand-gradient flex items-center justify-center text-white shadow-lg">
                          <Landmark size={30} />
                        </div>
                        <p className="mt-4 text-sm font-heading font-bold text-white tracking-wide">SAMPANG</p>
                        <p className="text-[11px] text-brand-cyan tracking-[0.2em] uppercase">Governance System</p>
                      </div>
                    </div>
                  )}
                  <span className="absolute top-4 left-4 text-[11px] font-semibold tracking-wide uppercase bg-white/90 backdrop-blur text-brand-navy rounded-full px-3 py-1.5 border border-brand-blue/15">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-heading font-bold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-brand-slate leading-relaxed">{item.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.chips.map((c) => (
                      <span
                        key={c}
                        className="text-[11px] font-medium text-brand-blue bg-brand-blue/5 border border-brand-blue/15 rounded-full px-3 py-1"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <button
                    data-testid={`portfolio-modal-open-button-${item.id}`}
                    onClick={() => setActive(item)}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-redDark transition-colors"
                  >
                    {p.caseStudy}
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8 bg-brand-ink/70 backdrop-blur-sm"
            onClick={() => setActive(null)}
            data-testid="portfolio-modal-backdrop"
          >
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-7 sm:p-10 shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              data-testid="portfolio-modal"
            >
              <button
                data-testid="portfolio-modal-close-button"
                onClick={() => setActive(null)}
                aria-label={p.modal.close}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-brand-mist hover:bg-brand-blue/10 flex items-center justify-center text-brand-navy transition-colors"
              >
                <X size={18} />
              </button>
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-blue">{active.category}</span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-heading font-bold text-brand-navy">{active.title}</h3>
              <div className="mt-7 space-y-6">
                {[
                  { label: p.modal.challenge, text: active.challenge },
                  { label: p.modal.solution, text: active.solution },
                  { label: p.modal.result, text: active.result },
                ].map((row, i) => (
                  <div key={row.label} className="flex gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-lg bg-brand-gradient text-white text-xs font-bold flex items-center justify-center">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="text-sm font-heading font-bold text-brand-navy uppercase tracking-wide">{row.label}</h4>
                      <p className="mt-1.5 text-sm text-brand-slate leading-relaxed">{row.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
