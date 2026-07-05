import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import "../../styles/about.css";

const ABOUT_TEXT = `I’ve always been curious about how things actually work beneath the surface. That curiosity naturally led me toward computer engineering, where every system hides another layer waiting to be understood.

I enjoy building projects from scratch, breaking problems down, and learning through iteration rather than theory alone. Outside of academics, I spend time experimenting with code, tools, and ideas that help me think and build better.

Right now I’m focused on growing as a developer — improving my fundamentals, exploring systems, and learning how to turn ideas into something real and usable.`;

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span className="about__word" style={{ opacity }}>
      {children}{" "}
    </motion.span>
  );
}

function About() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.4"],
  });

  const words = ABOUT_TEXT.split(" ");

  return (
    <section
      ref={containerRef}
      id="about"
      className="about"
      aria-label="About me"
    >
      <div className="container about__inner">
        <div className="about__content">
          <h2 className="visually-hidden">About</h2>
          <p className="about__text">
            {shouldReduceMotion
              ? ABOUT_TEXT
              : words.map((word, i) => {
                  const start = i / words.length;
                  const end = start + 1 / words.length;
                  return (
                    <Word
                      key={i}
                      progress={scrollYProgress}
                      range={[start, end]}
                    >
                      {word}
                    </Word>
                  );
                })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
