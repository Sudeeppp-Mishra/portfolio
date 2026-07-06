import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { Github, Linkedin } from '../ui/BrandIcons.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Button from '../ui/Button.jsx';
import { SITE_CONFIG } from '../../siteConfig.js';
import '../../styles/contact.css';

const CONTACT_ITEMS = [
  { label: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, Icon: Mail, external: false },
  { label: 'LinkedIn', href: SITE_CONFIG.linkedin, Icon: Linkedin, external: true },
  { label: 'GitHub', href: SITE_CONFIG.github, Icon: Github, external: true },
  { label: SITE_CONFIG.location, href: null, Icon: MapPin, external: false },
];

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', 'bot-field': '' });
  const [status, setStatus] = useState('idle');
  const shouldReduceMotion = useReducedMotion();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    const encode = (data) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then((response) => {
        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '', 'bot-field': '' });
        } else {
          setStatus('error');
        }
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="contact" aria-label="Contact">
      <div className="container">
        <SectionHeading eyebrow="Let's talk" title="Contact" />

        <div className="contact__grid">
          <motion.ul
            className="contact__list"
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: -30 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 90, damping: 16 }}
          >
            {CONTACT_ITEMS.map(({ label, href, Icon, external }) => (
              <li key={label} className="contact__item">
                <Icon size={18} className="contact__icon" aria-hidden="true" />
                {href ? (
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="contact__link"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="contact__text">{label}</span>
                )}
              </li>
            ))}
          </motion.ul>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            noValidate
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: 30 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 90, damping: 16 }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div style={{ display: 'none' }}>
              <label>
                Don't fill this out if you're human:{' '}
                <input
                  name="bot-field"
                  value={formData['bot-field']}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="contact__field">
              <label htmlFor="name" className="contact__label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="contact__input"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email" className="contact__label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="contact__input"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message" className="contact__label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="contact__input contact__input--textarea"
              />
            </div>

            <Button variant="primary" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </Button>

            <div role="status" aria-live="polite" className="contact__status">
              {status === 'submitting' && 'Sending message...'}
              {status === 'success' && "Message sent — thank you, I'll reply soon."}
              {status === 'error' && 'Something went wrong. Please try again.'}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;