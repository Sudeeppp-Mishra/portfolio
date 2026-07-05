import SectionHeading from '../ui/SectionHeading.jsx';
import ProjectCard from '../ui/ProjectCard.jsx';
import '../../styles/projects.css';

const PROJECTS = [
  {
    id: 'project-one',
    title: 'Will add later',
    description:
      'Replace with a real 2–3 sentence description of what the project does, the problem it solves, and any notable technical decision behind it.',
    image: '../../assets/react.svg',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/your-username/TEST',
    liveUrl: 'TEST',
  },

];

function Projects() {
  return (
    <section id="projects" className="projects" aria-label="Projects">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Projects" />

        <div className="projects__grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;