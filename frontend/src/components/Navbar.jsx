import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { scrollToId } from '../lib/scroll';
import Logo from './Logo';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { hash: '#home', label: t.nav.home, testid: 'nav-link-home' },
    { hash: '#about', label: t.nav.about, testid: 'nav-link-about' },
    { hash: '#products', label: t.nav.products, testid: 'nav-link-products' },
    { hash: '#projects', label: t.nav.projects, testid: 'nav-link-projects' },
    { hash: '#services', label: t.nav.services, testid: 'nav-link-services' },
    { hash: '#contact', label: t.nav.contact, testid: 'nav-link-contact' },
  ];

  const go = (e, hash) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== '/') navigate('/', { state: { scrollTo: hash } });
    else scrollToId(hash);
  };

  const LangToggle = () => (
    <div className="flex items-center rounded-full border border-brand-blue/20 bg-brand-mist p-1" data-testid="language-toggle">
      {['id', 'en'].map((l) => (
        <button
          key={l}
          data-testid={`language-toggle-${l}`}
          onClick={() => setLang(l)}
          className={`px-3 py-1 text-xs font-bold rounded-full transition-colors duration-200 ${
            lang === l ? 'bg-brand-navy text-white shadow-sm' : 'text-brand-navy/60 hover:text-brand-navy'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white/85 backdrop-blur-xl border-b border-blue-100 shadow-[0_8px_30px_rgba(30,136,229,0.08)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 h-[76px] flex items-center justify-between gap-4">
        <a href="#home" onClick={(e) => go(e, '#home')} data-testid="nav-logo-link" aria-label="ARRAYA — Home" className="shrink-0">
          <Logo className="h-10 sm:h-11" />
        </a>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.hash}
              href={l.hash}
              onClick={(e) => go(e, l.hash)}
              data-testid={l.testid}
              className="text-sm font-medium text-brand-navy/80 hover:text-brand-blue transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LangToggle />
          <a
            href="#contact"
            onClick={(e) => go(e, '#contact')}
            data-testid="nav-contact-cta-button"
            className="inline-flex items-center rounded-full bg-brand-red hover:bg-brand-redDark text-white text-sm font-semibold px-5 py-2.5 shadow-[0_8px_20px_rgba(211,47,47,0.25)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <LangToggle />
          <button
            data-testid="mobile-menu-button"
            onClick={() => setOpen(!open)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="w-10 h-10 rounded-xl border border-brand-blue/20 bg-white flex items-center justify-center text-brand-navy"
          >
            {open ? <Menu className="hidden" /> : null}
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-blue-100"
            data-testid="mobile-menu"
            aria-label="Mobile"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.hash}
                  href={l.hash}
                  onClick={(e) => go(e, l.hash)}
                  data-testid={`mobile-${l.testid}`}
                  className="py-3 px-2 text-base font-medium text-brand-navy border-b border-blue-50 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => go(e, '#contact')}
                data-testid="mobile-nav-contact-cta-button"
                className="mt-3 inline-flex justify-center items-center rounded-full bg-brand-red text-white text-sm font-semibold px-5 py-3"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
