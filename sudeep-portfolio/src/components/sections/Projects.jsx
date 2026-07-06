import SectionHeading from '../ui/SectionHeading.jsx';
import ProjectCard from '../ui/ProjectCard.jsx';
import '../../styles/projects.css';

const PROJECTS = [
  {
    id: 'leaflens',
    title: 'LeafLens',
    description:
      'AI-powered desktop application that detects plant leaf diseases from images using a deep learning model and provides treatment recommendations with audio feedback.',
    image: '/images/LeafLens.jpeg',
    tech: ['Python', 'PyTorch', 'ResNet18', 'PySide6', 'OpenCV', 'NumPy', 'PIL', 'pyttsx3'],
    githubUrl: 'https://github.com/Sudeeppp-Mishra/LeafLens',
    liveUrl: null,
  },
  {
    id: 'todo-list',
    title: 'Minimal To-Do List',
    description:
      'A lightweight desktop task management application built with Java Swing that allows users to organize daily tasks through a clean and distraction-free interface.',
    image: '/images/ToDoList.jpeg',
    tech: ['Java', 'Java Swing'],
    githubUrl: 'https://github.com/Sudeeppp-Mishra/TinyTasks.java',
    liveUrl: null,
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description:
      'Desktop weather application that fetches real-time weather data using the OpenWeatherMap API and presents it through a clean, user-friendly GUI with city search functionality.',
    image: '/images/Weather.jpeg',
    tech: ['Python', 'PyQt5', 'OpenWeatherMap API', 'python-dotenv'],
    githubUrl: 'https://github.com/Sudeeppp-Mishra/pyWeatherProject',
    liveUrl: null,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects" aria-label="Projects">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Projects" />

        <div className="projects__grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} total={PROJECTS.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;