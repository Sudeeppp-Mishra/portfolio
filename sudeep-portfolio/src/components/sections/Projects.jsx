import SectionHeading from '../ui/SectionHeading.jsx';
import ProjectCard from '../ui/ProjectCard.jsx';
import '../../styles/projects.css';

const PROJECTS = [
  {
    id: 'project-one',
    title: 'Project One',
    description:
      'Replace with a real 2–3 sentence description of what the project does, the problem it solves, and any notable technical decision behind it.',
    image: '/images/project-placeholder-1.jpg',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/your-username/project-one',
    liveUrl: 'https://project-one.example.com',
  },
  {
    id: 'project-two',
    title: 'Project Two',
    description:
      'Replace with a real 2–3 sentence description of what the project does, the problem it solves, and any notable technical decision behind it.',
    image: '/images/project-placeholder-2.jpg',
    tech: ['TypeScript', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/your-username/project-two',
    liveUrl: 'https://project-two.example.com',
  },
  {
    id: 'project-three',
    title: 'Project Three',
    description:
      'Replace with a real 2–3 sentence description of what the project does, the problem it solves, and any notable technical decision behind it.',
    image: '/images/project-placeholder-3.jpg',
    tech: ['Python', 'C++'],
    githubUrl: 'https://github.com/your-username/project-three',
    liveUrl: 'https://project-three.example.com',
  },
  {
    id: 'project-four',
    title: 'Project Four',
    description:
      'Replace with a real 2–3 sentence description of what the project does, the problem it solves, and any notable technical decision behind it.',
    image: '/images/project-placeholder-4.jpg',
    tech: ['React', 'Vite', 'Docker'],
    githubUrl: 'https://github.com/your-username/project-four',
    liveUrl: 'https://project-four.example.com',
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