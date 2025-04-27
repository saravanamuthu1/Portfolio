import React from 'react';
import { projectsData } from './ProjectsData';

function Projects({ projectsData }) {
  return (
    <section id="projects" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <ul className="space-y-4">
        {projectsData.map((project, index) => (
          <a key={index} href={project.url} target="_blank" rel="noopener noreferrer">
            <li className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack}</p>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
