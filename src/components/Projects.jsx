import React from 'react';

function Projects({ projectsData }) {
  return (
    <section id="projects" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {projectsData.map((project, index) => (
          <a key={index} href={project.url} target="_blank" rel="noopener noreferrer">
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300 transform hover:scale-105 w-full sm:w-80 md:w-96">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
