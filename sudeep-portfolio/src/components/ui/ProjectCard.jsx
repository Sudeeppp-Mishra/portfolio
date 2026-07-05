import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Github } from './BrandIcons.jsx';
import '../../styles/project-card.css';

function ProjectCard({ project, index }) {
  const { title, description, image, tech, githubUrl, liveUrl } = project;

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.08 }}
      whileHover="hover"
    >
      <div className="project-card__image-wrap">
        <motion.img
          src={image}
          alt={`Screenshot of the ${title} project`}
          className="project-card__image"
          variants={{ hover: { scale: 1.03 } }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <p className="project-card__tech">{tech.join(' · ')}</p>

        <div className="project-card__actions">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
            aria-label={`View ${title} source code on GitHub`}
          >
            <Github size={16} aria-hidden="true" />
            Code
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
            aria-label={`View live demo of ${title}`}
          >
            <ArrowUpRight size={16} aria-hidden="true" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;