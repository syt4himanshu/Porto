import React from 'react';

const About = () => (
  <section id="about" className="py-20 px-4 section-glow">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block bg-[#59A5FF]/10 text-[#59A5FF] px-4 py-2 rounded-full text-sm font-medium mb-4">
          GET TO KNOW ME
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#59A5FF] to-[#7B61FF] mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#59A5FF] to-[#7B61FF] rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300 animate-tilt"></div>
          <div className="relative bg-[#1A2238] p-1 rounded-lg h-full">
            <div className="w-full h-full bg-[#12182B] rounded-md overflow-hidden">
              <div className="w-full h-80 bg-gradient-to-br from-[#12182B] to-[#1A2238] flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-[#59A5FF] to-[#7B61FF] rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-xl">
                  FD
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                <p className="text-[#A1AAB9]">Creating beautiful digital experiences</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6">Who am I?</h3>
          <p className="text-lg text-[#A1AAB9] mb-6 leading-relaxed">
            I'm a passionate <span className="text-[#59A5FF] font-medium">Frontend Developer</span> with expertise in building modern, responsive web applications. With over 2 years of experience, I specialize in turning ideas into beautifully crafted digital experiences using the latest web technologies.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#1A2238] p-4 rounded-lg border-l-4 border-[#59A5FF]">
              <h4 className="font-semibold mb-2">Development Approach</h4>
              <p className="text-sm text-[#A1AAB9]">Clean, efficient code with a focus on performance and accessibility</p>
            </div>
            <div className="bg-[#1A2238] p-4 rounded-lg border-l-4 border-[#7B61FF]">
              <h4 className="font-semibold mb-2">Design Philosophy</h4>
              <p className="text-sm text-[#A1AAB9]">User-centered design with attention to detail and aesthetics</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-4 h-4 bg-[#59A5FF] rounded-full mr-2"></span>
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'TypeScript', 'Tailwind', 'Node.js', 'Git'].map((skill) => (
                  <span key={skill} className="bg-[#12182B] text-[#A1AAB9] px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="w-4 h-4 bg-[#7B61FF] rounded-full mr-2"></span>
                Professional Highlights
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#59A5FF]/10 text-[#59A5FF] px-3 py-1 rounded-full text-sm">
                  2+ Years Experience
                </span>
                <span className="bg-[#7B61FF]/10 text-[#7B61FF] px-3 py-1 rounded-full text-sm">
                  National Hackathon Runner-Up
                </span>
                <span className="bg-[#FF6B9C]/10 text-[#FF6B9C] px-3 py-1 rounded-full text-sm">
                  500+ Teams Competed Against
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About; 