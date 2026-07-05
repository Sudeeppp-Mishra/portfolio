import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading.jsx';
import { SITE_CONFIG } from '../../siteConfig.js';
import '../../styles/experience.css';

function Experience() {
  return (
    <section id="experience" className="experience" aria-label="Experience">
      <div className="container">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        <motion.div
          className="experience__empty"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="experience__node" aria-hidden="true" />
          <div className="experience__card">
            <p className="experience__message">
              Actively seeking internship and co-op opportunities — reach out if
              you're hiring.
            </p>
            <a href={`mailto:${SITE_CONFIG.email}`} className="experience__link">
              {SITE_CONFIG.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;