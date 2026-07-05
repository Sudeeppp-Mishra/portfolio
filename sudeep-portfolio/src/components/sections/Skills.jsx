import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import '../../styles/skills.css';

const SKILL_CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    Icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    Icon: Layout,
    skills: ['React', 'Vite', 'Framer Motion', 'CSS'],
  },
  {
    id: 'backend',
    label: 'Backend',
    Icon: Server,
    skills: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    id: 'databases',
    label: 'Databases',
    Icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    id: 'tools',
    label: 'Tools',
    Icon: Wrench,
    skills: ['Git', 'Docker', 'Linux', 'VS Code'],
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
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
            >
              <div className="skills__card-header">
                <Icon size={18} className="skills__card-icon" aria-hidden="true" />
                <span className="skills__card-label">{label}</span>
                <span className="skills__card-count">
                  {String(skills.length).padStart(2, '0')}
                </span>
              </div>

              <ul className="skills__list">
                {skills.map((skill) => (
                  <li key={skill} className="skills__item">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;