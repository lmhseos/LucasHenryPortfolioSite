import './projects.css';
import DiscordLogo from '../../assets/Discord-Logo.png';
import llamaLogo from '../../assets/Llama.jpeg';
import fullstack from '../../assets/Fullstack.png';

const projectsData = [
  {
    title: 'Discord Bot',
    description: 'This Discord bot, built using C#, Replicate, and AWS, can generate AI images, roll dice, and take polls. It provides a fun and interactive experience for users.',
    technologies: ['C#', 'Replicate', 'AWS'],
    duration: 'January 2023 - April 2023',
    githubUrl: 'https://github.com/yourusername/discord-bot',
    imageUrl: DiscordLogo 
  },
  {
    title: 'Index Llama Agent',
    description: 'Index Llama Agent is a local large language model agent developed using Python, Llama, and Slack API. It can execute code, retrieve data, and solve problems autonomously.',
    technologies: ['Python', 'Llama', 'Slack API'],
    duration: 'May 2023 - August 2023',
    githubUrl: 'https://github.com/yourusername/index-llama-agent',
    imageUrl: llamaLogo 
  },
  {
    title: 'Personal Site',
    description: 'My personal site, created with ReactJS, C#, and OpenAI, showcases my projects and work experience. It highlights my web development and AI integration skills.',
    technologies: ['ReactJS', 'C#', 'OpenAI'],
    duration: 'September 2023 - December 2023',
    githubUrl: 'https://github.com/yourusername/personal-site',
    imageUrl: fullstack 
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects">
        {projectsData.map((project, index) => (
          <div key={index} className="project">
            <img src={project.imageUrl} alt={`${project.title} image`} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="duration">{project.duration}</p>
            <p className="description">{project.description}</p>
            <ul className="technologies">
              {project.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
