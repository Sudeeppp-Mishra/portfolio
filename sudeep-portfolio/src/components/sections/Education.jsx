import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading.jsx';
import '../../styles/education.css';

const EDUCATION = [
  {
    id: 'edu-one',
    institution: 'University or College Name',
    degree: 'Bachelor of Engineering, Computer Engineering',
    date: '2023 — 2027',
    detail: 'Focus areas: systems programming, data structures & algorithms, distributed systems.',
  },
  {
    id: 'edu-two',
    institution: 'Previous School Name',
    degree: 'Higher Secondary Education, Science',
    date: '2021 — 2023',
    detail: 'Focus areas: physics, mathematics, computer science fundamentals.',
  },
];

function Education() {
  return (
    <section id="education" className="education" aria-label="Education">
      <div className="container">
        <SectionHeading eyebrow="Academic background" title="Education" />

        <ol className="education__timeline">
          {EDUCATION.map((item, index) => (
            <motion.li
              key={item.id}
              className="education__item"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ type: 'spring', stiffness: 90, damping: 16, delay: index * 0.05 }}
            >
              <span className="education__node" aria-hidden="true" />
              <div className="education__card">
                <p className="education__date">{item.date}</p>
                <h3 className="education__institution">{item.institution}</h3>
                <p className="education__degree">{item.degree}</p>
                <p className="education__detail">{item.detail}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Education;