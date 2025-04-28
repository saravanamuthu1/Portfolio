import React from 'react';

function Projects({ projectsData }) {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <a key={index} href={project.url} target="_blank" rel="noopener noreferrer" className="block bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <p className="text-sm text-gray-500"><b>Tech Stack:</b> {project.techStack}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
