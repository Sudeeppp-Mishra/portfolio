import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button.jsx';
import '../../styles/hero.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.94]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  const imageScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.06]);
  const imageY = useTransform(scrollYProgress, [0, 0.8], [0, 60]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} id="home" className="hero" aria-label="Introduction">
      <div className="hero__inner container">
        <motion.div
          className="hero__content"
          style={shouldReduceMotion ? undefined : { opacity: textOpacity, scale: textScale, y: textY }}
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="hero__eyebrow">
            <span className="hero__eyebrow-dot">·</span> Computer Engineering Student
          </motion.p>

          <motion.h1 variants={itemVariants} className="hero__name">
            Sudeep Mishra
          </motion.h1>

          <motion.p variants={itemVariants} className="hero__role">
            Aspiring Software Engineer<span className="hero__cursor" aria-hidden="true">_</span>
          </motion.p>

          <motion.p variants={itemVariants} className="hero__intro">
            I build things at the intersection of hardware logic and software craft —
            currently deep in systems programming and full-stack development, always
            shipping something on the side.
          </motion.p>

          <motion.div variants={itemVariants} className="hero__actions">
            <Button variant="primary" onClick={handleViewProjects}>
              View Projects
            </Button>
            <Button variant="secondary" as="a" href="/resume.pdf" download>
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          style={shouldReduceMotion ? undefined : { y: imageY }}
          className="hero__photo-outer"
        >
          <motion.div
            style={shouldReduceMotion ? undefined : { scale: imageScale, opacity: imageOpacity }}
            className="hero__photo-wrap"
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="hero__photo-glow" aria-hidden="true" />
            <img
              src="/images/profile.jpeg"
              alt="Portrait of Sudeep Mishra"
              className="hero__photo"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.p
        className="hero__scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        Scroll
      </motion.p>
    </section>
  );
}

export default Hero;