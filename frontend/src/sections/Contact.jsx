import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { MapPin, Mail, Phone, MessageCircle, Send, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const Field = ({ label, error, children, testid }) => (
  <div>
    <label className="block text-sm font-semibold text-brand-navy mb-1.5" data-testid={`${testid}-label`}>
      {label}
    </label>
    {children}
    {error && (
      <p className="mt-1.5 text-xs font-medium text-brand-red" data-testid={`${testid}-error`}>
        {error}
      </p>
    )}
  </div>
);

const inputCls =
  'w-full rounded-xl border border-brand-blue/20 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-slate-400 outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 transition-all';

const Contact = () => {
  const { t } = useLanguage();
  const c = t.contact;
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = c.form.required;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = c.form.invalidEmail;
    if (form.message.trim().length < 10) e.message = c.form.minMessage;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, form);
      toast.success(c.form.success);
      setForm({ name: '', email: '', phone: '', company: '', message: '' });
      setErrors({});
    } catch {
      toast.error(c.form.error);
    } finally {
      setSending(false);
    }
  };

  const infoRows = [
    { icon: MapPin, label: c.info.addressLabel, value: c.info.address, testid: 'contact-info-address' },
    { icon: Mail, label: c.info.emailLabel, value: c.info.email, testid: 'contact-info-email' },
    { icon: Phone, label: c.info.phoneLabel, value: c.info.phone, testid: 'contact-info-phone' },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-white overflow-hidden" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <SectionHeading badge={c.badge} title={c.title} sub={c.sub} testid="contact" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <form onSubmit={submit} noValidate className="rounded-3xl border border-brand-blue/15 bg-brand-mist p-7 sm:p-9 space-y-5" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label={c.form.name} error={errors.name} testid="contact-form-name">
                  <input data-testid="contact-form-name-input" className={inputCls} placeholder={c.form.namePh} value={form.name} onChange={set('name')} />
                </Field>
                <Field label={c.form.email} error={errors.email} testid="contact-form-email">
                  <input data-testid="contact-form-email-input" type="email" className={inputCls} placeholder={c.form.emailPh} value={form.email} onChange={set('email')} />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label={c.form.phone} testid="contact-form-phone">
                  <input data-testid="contact-form-phone-input" className={inputCls} placeholder={c.form.phonePh} value={form.phone} onChange={set('phone')} />
                </Field>
                <Field label={c.form.company} testid="contact-form-company">
                  <input data-testid="contact-form-company-input" className={inputCls} placeholder={c.form.companyPh} value={form.company} onChange={set('company')} />
                </Field>
              </div>
              <Field label={c.form.message} error={errors.message} testid="contact-form-message">
                <textarea data-testid="contact-form-message-input" rows={5} className={`${inputCls} resize-none`} placeholder={c.form.messagePh} value={form.message} onChange={set('message')} />
              </Field>
              <button
                type="submit"
                disabled={sending}
                data-testid="contact-form-submit-button"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-brand-red hover:bg-brand-redDark disabled:opacity-60 text-white text-sm font-semibold px-8 py-3.5 shadow-[0_10px_25px_rgba(211,47,47,0.25)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {sending ? c.form.sending : c.form.submit}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full flex flex-col gap-6">
              <div className="rounded-3xl border border-brand-blue/15 bg-white p-7 sm:p-8 shadow-[0_10px_30px_rgba(30,136,229,0.06)]">
                <h3 className="text-lg font-heading font-bold text-brand-navy">{c.info.title}</h3>
                <ul className="mt-5 space-y-4">
                  {infoRows.map((row) => (
                    <li key={row.label} className="flex gap-3.5" data-testid={row.testid}>
                      <span className="shrink-0 w-10 h-10 rounded-xl bg-brand-mist border border-brand-blue/15 flex items-center justify-center text-brand-blue">
                        <row.icon size={17} />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">{row.label}</span>
                        <span className="block text-sm font-medium text-brand-navy mt-0.5">{row.value}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={c.info.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-whatsapp-button"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white text-sm font-semibold px-6 py-3 shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <MessageCircle size={16} />
                  {c.info.waButton}
                </a>
              </div>

              <div
                className="flex-1 min-h-[220px] rounded-3xl border-2 border-dashed border-brand-blue/25 bg-brand-mist molecule-pattern flex flex-col items-center justify-center text-center p-8"
                data-testid="contact-map-placeholder"
              >
                <span className="w-12 h-12 rounded-2xl bg-brand-gradient text-white flex items-center justify-center shadow-lg">
                  <MapPin size={22} />
                </span>
                <p className="mt-4 text-sm font-heading font-bold text-brand-navy">{c.map.title}</p>
                <p className="mt-1 text-xs text-slate-400">{c.map.note}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
