import { useLanguage } from '../context/LanguageContext';
import { scrollToId } from '../lib/scroll';
import Logo from './Logo';
import { Linkedin, Instagram, Github, MapPin, Mail, Phone } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const go = (e, hash) => {
    e.preventDefault();
    if (location.pathname !== '/') navigate('/', { state: { scrollTo: hash } });
    else scrollToId(hash);
  };

  const navLinks = [
    { hash: '#home', label: t.nav.home },
    { hash: '#about', label: t.nav.about },
    { hash: '#products', label: t.nav.products },
    { hash: '#projects', label: t.nav.projects },
    { hash: '#services', label: t.nav.services },
    { hash: '#contact', label: t.nav.contact },
  ];

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: '#', testid: 'footer-social-linkedin' },
    { icon: Instagram, label: 'Instagram', href: '#', testid: 'footer-social-instagram' },
    { icon: Github, label: 'GitHub', href: '#', testid: 'footer-social-github' },
  ];

  return (
    <footer className="bg-brand-ink text-slate-300 molecule-pattern-light" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo onWhiteBadge className="h-10" />
          <p className="mt-5 text-sm leading-relaxed text-slate-400">{t.footer.desc}</p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                data-testid={s.testid}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-colors"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">{t.footer.navTitle}</h4>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.hash}>
                <a href={l.hash} onClick={(e) => go(e, l.hash)} className="text-sm text-slate-400 hover:text-brand-cyan transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">{t.footer.productsTitle}</h4>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link to="/products/jewelry-management" data-testid="footer-product-jewelry-link" className="text-sm text-slate-400 hover:text-brand-cyan transition-colors">
                Jewelry Management
              </Link>
            </li>
            <li>
              <Link to="/products/loge-knowledge-ai" data-testid="footer-product-loge-link" className="text-sm text-slate-400 hover:text-brand-cyan transition-colors">
                Loge Knowledge AI
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">{t.footer.contactTitle}</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex gap-2.5">
              <MapPin size={16} className="shrink-0 mt-0.5 text-brand-cyan" />
              {t.contact.info.address}
            </li>
            <li className="flex gap-2.5">
              <Mail size={16} className="shrink-0 mt-0.5 text-brand-cyan" />
              {t.contact.info.email}
            </li>
            <li className="flex gap-2.5">
              <Phone size={16} className="shrink-0 mt-0.5 text-brand-cyan" />
              {t.contact.info.phone}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-6 text-xs text-slate-500" data-testid="footer-copyright">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
