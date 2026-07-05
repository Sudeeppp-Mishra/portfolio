import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import '../../styles/skills.css';

const SKILL_CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    Icon: Code2,
    skills: ['JavaScript', 'Python', 'C/C++', 'Java'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    Icon: Layout,
    skills: ['HTML', 'CSS', 'React'],
  },
  {
    id: 'backend',
    label: 'Backend',
    Icon: Server,
    skills: [
      'Node.js',
      'Express',
      { name: 'REST APIs', status: 'learning' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    Icon: Database,
    skills: ['MongoDB', 'MySQL'],
  },
  {
    id: 'tools',
    label: 'Tools',
    Icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'Linux',
      { name: 'Netlify', status: 'learning' },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills" aria-label="Skills">
      <div className="container">
        <SectionHeading eyebrow="What I work with" title="Skills" />

        <div className="skills__grid">
          {SKILL_CATEGORIES.map(({ id, label, Icon, skills }, index) => (
            <motion.div
              key={id}
              className="skills__card"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ type: 'spring', stiffness: 90, damping: 16, delay: index * 0.05 }}
            >
              <div className="skills__card-header">
                <Icon size={18} className="skills__card-icon" aria-hidden="true" />
                <span className="skills__card-label">{label}</span>
                <span className="skills__card-count">
                  {String(skills.length).padStart(2, '0')}
                </span>
              </div>

              <ul className="skills__list">
                {skills.map((skill) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const isLearning = typeof skill === 'object' && skill.status === 'learning';
                  return (
                    <li key={name} className="skills__item">
                      <span>{name}</span>
                      {isLearning && (
                        <span className="skills__item-badge">
                          <span className="skills__item-badge-dot" aria-hidden="true" />
                          Learning
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;