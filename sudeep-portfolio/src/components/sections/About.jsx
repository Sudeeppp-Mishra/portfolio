import { motion } from 'framer-motion';
import '../../styles/about.css';

function About() {
  return (
    <section id="about" className="about" aria-label="About me">
      <div className="container about__inner">
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="visually-hidden">About</h2>
          <p className="about__text">
            I've always been the kind of person who wants to know how something
            actually works, not just that it works — which is what pulled me
            toward computer engineering in the first place. I like problems that
            sit at the boundary between hardware and software, where the answer
            isn't obvious until you've traced it through both layers. Most of my
            time outside coursework goes into building things end-to-end and
            picking apart how production systems are put together, one layer at
            a time. Right now that means going deep on systems programming and
            distributed systems fundamentals — not because a course asked me to,
            but because I want to actually understand the machinery underneath
            the tools I use every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;