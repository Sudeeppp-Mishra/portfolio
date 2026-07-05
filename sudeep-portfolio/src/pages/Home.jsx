import Hero from '../components/sections/Hero.jsx';
import About from '../components/sections/About.jsx';
import Skills from '../components/sections/Skills.jsx';
import Projects from '../components/sections/Projects.jsx';
import Certifications from '../components/sections/Certifications.jsx';
import Education from '../components/sections/Education.jsx';
import Experience from '../components/sections/Experience.jsx';
import Contact from '../components/sections/Contact.jsx';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Experience />
      <Contact />
    </>
  );
}

export default Home;