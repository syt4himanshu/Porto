import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-teal">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Frontend Developer
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="bg-teal text-dark-blue px-6 py-3 rounded-lg font-medium hover:bg-teal/90 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border border-teal text-teal px-6 py-3 rounded-lg font-medium hover:bg-teal/10 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 