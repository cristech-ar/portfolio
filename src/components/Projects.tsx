import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'NASA APOD Viewer',
    description: 'A React web application built with TypeScript and Vite ',
    image: 'https://i.ibb.co/B4yM0Kq/Captura-de-pantalla-2024-11-22-161052.png',
    github: 'https://github.com/cristech-ar/nasa-apod',
    preview: 'https://nasa-apod.crisdev.tech'
  },
  {
    title: 'Comming soon',
    description: 'In development',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/cristech-ar',
    preview: 'https://crisdev.tech'
  },
  {
    title: 'Comming soon',
    description: 'In development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/cristech-ar',
    preview: 'https://crisdev.tech'
  }
];

export default function Projects({ darkMode }: { darkMode: boolean }) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id='projects' className={`min-h-screen py-20 ${darkMode ? 'bg-black text-white' : 'bg-gray-50 text-black'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden transition-shadow duration-300 ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-white hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a href={project.preview} target="_blank" rel="noopener noreferrer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredProject === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <ExternalLink className="text-white" size={32} />
                  </div>
                </div>
              </a>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center transition-colors duration-300 ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  <Github size={20} className="mr-2" />
                  View Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}