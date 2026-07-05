import { motion } from 'framer-motion';
import '../../styles/section-heading.css';

function SectionHeading({ eyebrow, title }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && (
        <p className="section-heading__eyebrow">
          <span className="section-heading__dot">·</span> {eyebrow}
        </p>
      )}
      <h2 className="section-heading__title">{title}</h2>
    </motion.div>
  );
}

export default SectionHeading;