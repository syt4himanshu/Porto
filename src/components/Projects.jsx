import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      category: "web",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team features, and progress tracking.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["React", "Firebase", "Material-UI"],
      category: "web",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing projects and skills with smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      category: "web",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts using OpenWeather API.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["JavaScript", "API", "CSS"],
      category: "web",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-[#1A2238] section-glow">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#59A5FF]/10 text-[#59A5FF] px-4 py-2 rounded-full text-sm font-medium mb-4">
            MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#59A5FF] to-[#7B61FF] mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'web', 'mobile', 'design'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#59A5FF] text-white'
                  : 'bg-[#12182B] text-[#A1AAB9] hover:bg-[#59A5FF]/20'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#12182B] rounded-xl overflow-hidden border border-[#1A2238] hover:border-[#59A5FF]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#59A5FF]/10"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12182B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex gap-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#59A5FF] text-white text-center py-2 rounded-lg hover:bg-[#59A5FF]/90 transition-colors duration-300"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#12182B] text-white text-center py-2 rounded-lg border border-[#59A5FF] hover:bg-[#59A5FF]/10 transition-colors duration-300"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-[#A1AAB9] text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#1A2238] text-[#59A5FF] text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#59A5FF] text-white px-6 py-3 rounded-lg hover:bg-[#59A5FF]/90 transition-colors duration-300"
          >
            View All Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 