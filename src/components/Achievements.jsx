import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Hackathon Winner",
      description: "First place in the annual Web Development Hackathon 2023",
      icon: "🏆",
      date: "November 2023",
      category: "Competition"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      description: "Contributed to 10+ open source projects on GitHub",
      icon: "🌟",
      date: "Ongoing",
      category: "Community"
    },
    {
      id: 3,
      title: "Tech Speaker",
      description: "Presented at 5+ tech conferences and meetups",
      icon: "🎤",
      date: "2023",
      category: "Speaking"
    },
    {
      id: 4,
      title: "Mentorship Program",
      description: "Mentored 20+ junior developers in web development",
      icon: "👥",
      date: "2023",
      category: "Leadership"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Years Experience", value: "3+" },
    { label: "GitHub Stars", value: "1k+" }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-[#1A2238] section-glow">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#59A5FF]/10 text-[#59A5FF] px-4 py-2 rounded-full text-sm font-medium mb-4">
            RECOGNITION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Notable <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#59A5FF] to-[#7B61FF] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#12182B] p-6 rounded-xl border border-[#1A2238] text-center hover:border-[#59A5FF]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#59A5FF]/10"
            >
              <div className="text-3xl font-bold text-[#59A5FF] mb-2">{stat.value}</div>
              <div className="text-[#A1AAB9] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-[#12182B] rounded-xl p-6 border border-[#1A2238] hover:border-[#59A5FF]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#59A5FF]/10"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <span className="text-[#59A5FF] text-sm">{achievement.date}</span>
                  </div>
                  <p className="text-[#A1AAB9] text-sm mb-4">{achievement.description}</p>
                  <span className="inline-block bg-[#1A2238] text-[#59A5FF] px-3 py-1 rounded-full text-xs">
                    {achievement.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-[#12182B] px-6 py-4 rounded-xl border border-[#1A2238]">
            <div className="text-[#59A5FF]">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold">Always Growing</h3>
              <p className="text-[#A1AAB9] text-sm">
                Continuously seeking new challenges and opportunities to learn and grow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements; 