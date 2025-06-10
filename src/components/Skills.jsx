import React from 'react';

const Skills = () => {
  const skillsData = {
    "Frontend": [
      { name: "HTML5", level: 95, icon: "🔵" },
      { name: "CSS3", level: 90, icon: "🔵" },
      { name: "JavaScript", level: 85, icon: "🔵" },
      { name: "React.js", level: 85, icon: "🔵" },
      { name: "Tailwind CSS", level: 90, icon: "🔵" },
      { name: "Redux", level: 75, icon: "🔵" },
    ],
    "Backend": [
      { name: "Node.js", level: 75, icon: "🟢" },
      { name: "Express.js", level: 70, icon: "🟢" },
      { name: "MongoDB", level: 75, icon: "🟢" },
      { name: "PostgreSQL", level: 70, icon: "🟢" },
    ],
    "Tools": [
      { name: "Git & GitHub", level: 90, icon: "🛠️" },
      { name: "VS Code", level: 95, icon: "🛠️" },
      { name: "Figma", level: 80, icon: "🛠️" },
      { name: "Postman", level: 75, icon: "🛠️" },
    ],
    "Languages": [
      { name: "JavaScript", level: 85, icon: "📜" },
      { name: "TypeScript", level: 75, icon: "📜" },
      { name: "C++", level: 80, icon: "📜" },
    ],
  };

  return (
    <section id="skills" className="py-20 px-4 bg-[#1A2238] section-glow">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#59A5FF]/10 text-[#59A5FF] px-4 py-2 rounded-full text-sm font-medium mb-4">
            MY CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#59A5FF] to-[#7B61FF] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsData).map(([category, skills], idx) => (
            <div 
              key={category} 
              className="bg-[#12182B] p-6 rounded-xl border border-[#1A2238] hover:border-[#59A5FF]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#59A5FF]/10"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-semibold">{category}</h3>
                <span className="ml-auto text-[#59A5FF]">{skills.length} skills</span>
              </div>
              
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <span className="mr-2">{skill.icon}</span>
                        <span className="text-[#A1AAB9] group-hover:text-white transition-colors duration-300">{skill.name}</span>
                      </div>
                      <span className="text-[#A1AAB9] text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#1A2238] rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#59A5FF] to-[#7B61FF] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Continuous Learning Journey</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {['React 18', 'Next.js', 'GraphQL', 'Web3', 'Three.js', 'AWS'].map((tech) => (
              <div key={tech} className="bg-[#12182B] border border-[#1A2238] px-4 py-2 rounded-full flex items-center hover:border-[#59A5FF]/50 transition-all duration-300">
                <span className="w-2 h-2 bg-[#59A5FF] rounded-full mr-2 animate-pulse"></span>
                <span className="text-[#A1AAB9] text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 