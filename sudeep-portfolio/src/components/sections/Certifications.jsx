import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading.jsx';
import '../../styles/certifications.css';

const CERTIFICATIONS = [
  {
    id: 'cert-one',
    name: 'Certification Name One',
    issuer: 'Issuing Organization',
    date: 'Mar 2025',
  },
  {
    id: 'cert-two',
    name: 'Certification Name Two',
    issuer: 'Issuing Organization',
    date: 'Nov 2024',
  },
  {
    id: 'cert-three',
    name: 'Certification Name Three',
    issuer: 'Issuing Organization',
    date: 'Jul 2024',
  },
];

function Certifications() {
  return (
    <section id="certifications" className="certifications" aria-label="Certifications">
      <div className="container">
        <SectionHeading eyebrow="Verified learning" title="Certifications" />

        <ol className="certifications__timeline">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.li
              key={cert.id}
              className="certifications__item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
            >
              <span className="certifications__node" aria-hidden="true" />
              <div className="certifications__card">
                <p className="certifications__date">{cert.date}</p>
                <h3 className="certifications__name">{cert.name}</h3>
                <p className="certifications__issuer">{cert.issuer}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Certifications;