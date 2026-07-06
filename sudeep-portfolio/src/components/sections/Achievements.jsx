import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import '../../styles/achievements.css';

const ACHIEVEMENTS = [
  {
    id: 'cybersecurity-workshop',
    title: 'Cyber Security & Ethical Hacking Workshop',
    issuer: 'KMC Students Committee',
    date: 'Mar 2022',
    image: '../../../public/images/certifications/cyber.jpeg',
  },
  {
    id: 'intro-to-python',
    title: 'Introduction to Python',
    issuer: 'KMC Students Committee',
    date: 'Sep 2022',
    image: '../../../public/images/certifications/pythonPlusTwo.jpeg',
  },
  {
    id: 'kaggle-python',
    title: 'Python',
    issuer: 'Kaggle',
    date: 'Jul 2026',
    image: '../../../public/images/certifications/Sudeep Mishra - Python.png',
    credentialUrl: 'https://www.kaggle.com/learn/certification/mishra0sudeep/python#',
  },
  {
    id: 'ekalya-2026-organizer',
    title: 'Organizing Committee – EKALYA 2026',
    issuer: 'Cosmos ICT Club',
    date: 'Feb 2026',
    image: '../../../public/images/certifications/Ekalya.png',
  },
  {
    id: 'cosmos-hackathon-2026',
    title: 'Event Contribution – Cosmos Hackathon 2026',
    issuer: 'ICT Club (Secretary Role)',
    date: 'Jun 2026', /*27th-28th June 2026: Date of Hackathon*/
    image: '../../../public/images/certifications/SecretaryHackathon.png',
  },
];

const MONTHS = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
};

const parseDate = (dateStr) => {
  const parts = dateStr.split(' ');
  if (parts.length === 1) {
    return new Date(parseInt(parts[0], 10) || 0, 0);
  }
  const [monthStr, yearStr] = parts;
  const month = MONTHS[monthStr] !== undefined ? MONTHS[monthStr] : 0;
  const year = parseInt(yearStr, 10) || 0;
  return new Date(year, month);
};

function StackedCard({ item, index, total, progress, shouldReduceMotion, isActive, onClick }) {
  const N = total;
  const start = index / N;
  const end = (index + 1) / N;
  const center = (index + 0.5) / N;

  const fadeInStart = start;
  const fadeInEnd = Math.min(start + 0.22 / N, 1);
  const fadeOutStart = Math.max(end - 0.22 / N, 0);
  const fadeOutEnd = end;

  // Zoom-through scroll mappings: scale expands gently (0.94 -> 1.0 -> 1.06)
  const opacity = useTransform(progress, [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd], [0, 1, 1, 0], { clamp: true });
  const scale = useTransform(progress, [fadeInStart, center, fadeOutEnd], [0.94, 1, 1.06], { clamp: true });

  const opacityFirst = useTransform(progress, [0, fadeOutStart, fadeOutEnd], [1, 1, 0], { clamp: true });
  const scaleFirst = useTransform(progress, [0, center, fadeOutEnd], [1, 1, 1.06], { clamp: true });

  const opacityLast = useTransform(progress, [fadeInStart, fadeInEnd, 1], [0, 1, 1], { clamp: true });
  const scaleLast = useTransform(progress, [fadeInStart, center, 1], [0.94, 1, 1], { clamp: true });

  const getOpacityStyle = () => {
    if (index === 0) return opacityFirst;
    if (index === N - 1) return opacityLast;
    return opacity;
  };

  const getScaleStyle = () => {
    if (index === 0) return scaleFirst;
    if (index === N - 1) return scaleLast;
    return scale;
  };

  const animStyles = shouldReduceMotion
    ? { opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.95 }
    : {
        opacity: getOpacityStyle(),
        scale: getScaleStyle(),
      };

  return (
    <motion.div
      style={{
        ...animStyles,
        zIndex: isActive ? total + 10 : total - index,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
      className="achievements__item"
      onClick={onClick}
    >
      <div className="achievements__card">
        <div className="achievements__image-wrap">
          <img
            src={item.image}
            alt={item.title}
            className="achievements__image"
            loading="lazy"
          />
          <div className="achievements__image-overlay">
            <span className="achievements__preview-text">Click to Preview</span>
          </div>
        </div>
        <div className="achievements__body">
          <p className="achievements__date">{item.date}</p>
          <h3 className="achievements__name">{item.title}</h3>
          <p className="achievements__issuer">{item.issuer}</p>

          {item.credentialUrl && (
            <a
              href={item.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="achievements__link"
              onClick={(e) => e.stopPropagation()} // Prevent lightbox from opening on link click
            >
              View Credential
              <ExternalLink size={13} className="achievements__link-icon" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCert, setActiveCert] = useState(null);
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  const sortedAchievements = [...ACHIEVEMENTS].sort((a, b) => {
    return parseDate(b.date) - parseDate(a.date);
  });

  // Keep pagination dots indicator matched with scroll positions
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const idx = Math.min(
        Math.floor(latest * sortedAchievements.length),
        sortedAchievements.length - 1
      );
      setActiveIndex(idx);
    });
  }, [scrollYProgress, sortedAchievements.length]);

  return (
    <section ref={containerRef} id="certifications" className="achievements" aria-label="Achievements and Certifications">
      <div className="achievements__stack-container">
        <div className="achievements__deck-sticky">
          <div className="achievements__title-area">
            <SectionHeading eyebrow="Notable milestones" title="Achievements & Certifications" />
          </div>

          <div className="achievements__deck">
            {sortedAchievements.map((item, index) => (
              <StackedCard
                key={item.id}
                item={item}
                index={index}
                total={sortedAchievements.length}
                progress={smoothProgress}
                shouldReduceMotion={shouldReduceMotion}
                isActive={index === activeIndex}
                onClick={() => setActiveCert(item)}
              />
            ))}
          </div>

          {/* Indicators matching card states */}
          <div className="achievements__dots">
            {sortedAchievements.map((_, i) => (
              <span
                key={i}
                className={`achievements__dot ${i === activeIndex ? 'achievements__dot--active' : ''}`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox certificate preview modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="achievements__lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={`Certificate preview for ${activeCert.title}`}
          >
            <motion.div
              initial={shouldReduceMotion ? undefined : { scale: 0.95, y: 15 }}
              animate={shouldReduceMotion ? undefined : { scale: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { scale: 0.95, y: 15 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              className="achievements__lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="achievements__lightbox-close"
                onClick={() => setActiveCert(null)}
                aria-label="Close preview"
              >
                <X size={20} />
              </button>
              <div className="achievements__lightbox-img-wrap">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="achievements__lightbox-img"
                />
              </div>
              <div className="achievements__lightbox-info">
                <h3 className="achievements__lightbox-title">{activeCert.title}</h3>
                <p className="achievements__lightbox-issuer">
                  {activeCert.issuer} — {activeCert.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Achievements;
