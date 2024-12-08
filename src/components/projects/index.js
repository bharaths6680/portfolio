// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'E-commerce App',
      description: 'A full-stack e-commerce platform built with React and Node.js.',
      link: '#',
    },
    {
      name: 'Portfolio Website',
      description: 'A responsive personal portfolio website using React.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="p-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
