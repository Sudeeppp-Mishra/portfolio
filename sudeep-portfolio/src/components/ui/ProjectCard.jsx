import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Github } from './BrandIcons.jsx';
import '../../styles/project-card.css';

function ProjectCard({ project, index, total }) {
  const { title, description, image, tech, githubUrl, liveUrl } = project;
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  const stickyTop = 100 + index * 24;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'sticky',
        top: `${stickyTop}px`,
        paddingBottom: `${(total - index) * 16}px`,
        zIndex: index + 1,
      }}
      className="project-card-sticky-wrapper"
    >
      <motion.article
        style={shouldReduceMotion ? undefined : { scale, opacity }}
        className="project-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="project-card__image-wrap">
          <img
            src={image}
            alt={`Screenshot of the ${title} project`}
            className="project-card__image"
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
    </div>
  );
}

export default ProjectCard;