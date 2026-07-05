import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import '../../styles/quote.css';

function Quote() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Clean parallax scaling and opacity fade out on scroll scroll progress
  const opacity = useTransform(scrollYProgress, [0.1, 0.45, 0.65, 0.95], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.45, 0.65, 0.95], [0.93, 1, 1, 0.93]);
  const y = useTransform(scrollYProgress, [0.1, 0.45, 0.65, 0.95], [20, 0, 0, -20]);

  return (
    <section ref={containerRef} className="quote-section" aria-hidden="true">
      <div className="container quote__inner">
        <motion.blockquote
          style={shouldReduceMotion ? undefined : { opacity, scale, y }}
          className="quote__text"
        >
          “Just passing through, hoping to leave a gentle trace.”
        </motion.blockquote>
      </div>
    </section>
  );
}

export default Quote;
