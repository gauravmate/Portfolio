import React, { useEffect, useState } from 'react';
import './Projects.css';
import techgeniusImg from '../assets/tech1.webp';
import devconnectImg from '../assets/devconnect.jpeg';
import findmyspaceImg from '../assets/realstate1.webp';

const projects = [
  {
    title: 'DevConnect',
    description: 'DevConnect is a developer-focused collaboration platform featuring real-time chat, user profiles, and project showcase. Built using modern technologies, it aims to connect developers for team-building and knowledge sharing.',
    technologies: ['React', 'Socket.io', 'MongoDB', 'Node.js', 'Express', 'Tailwind'],
    image: devconnectImg,
    position: 'left',
    link: 'https://devconnect-app.netlify.app',
  },
  {
    title: 'TechGenius Website',
    description: 'The TechGenius website provides detailed information on upcoming tech events, webinars, and conferences. It helps professionals and learners stay informed about global tech trends through curated sections for webinars, software guides, and workshops.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: techgeniusImg,
    position: 'left',
    link: 'https://techgeniuspvt.netlify.app',
  },
  {
    title: 'FindMySpace',
    description: 'FindMySpace is a real estate platform to help users discover, filter, and post rental spaces. It features Google Maps integration, a clean UI, and dynamic filtering options for an intuitive property search experience.',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    image: findmyspaceImg,
    position: 'right',
    link: 'https://findmyspace.vercel.app',
  },
];

function Projects() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);

  return (
    <div className="projects-section" >
      <h1 className="projects-heading">My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-content">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-title-link"
              >
                <h3>{project.title}</h3>
              </a>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
