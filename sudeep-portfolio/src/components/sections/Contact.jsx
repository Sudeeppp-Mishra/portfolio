import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <section id="contact" className="contact" aria-label="Contact">
      <div className="container">
        <SectionHeading eyebrow="Let's talk" title="Contact" />

        <div className="contact__grid">
          <ul className="contact__list">
            {CONTACT_ITEMS.map(({ label, href, Icon, external }) => (
              <li key={label} className="contact__item">
                <Icon size={18} className="contact__icon" aria-hidden="true" />
                {href ? (
                  
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
          </ul>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
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

            <Button variant="primary" type="submit">
              Send Message
            </Button>

            <div role="status" aria-live="polite" className="contact__status">
              {status === 'success' && 'Message sent — thank you, I\'ll reply soon.'}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;