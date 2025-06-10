import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Advanced React Development",
      issuer: "Meta",
      date: "December 2023",
      credentialId: "META-REACT-2023",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "October 2023",
      credentialId: "COURSE-FSWD-2023",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      date: "August 2023",
      credentialId: "GOOGLE-UX-2023",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      id: 4,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "June 2023",
      credentialId: "FCC-JS-2023",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-[#1A2238] section-glow">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#59A5FF]/10 text-[#59A5FF] px-4 py-2 rounded-full text-sm font-medium mb-4">
            ACHIEVEMENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#59A5FF] to-[#7B61FF] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#12182B] rounded-xl overflow-hidden border border-[#1A2238] hover:border-[#59A5FF]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#59A5FF]/10"
            >
              <div className="relative h-48">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12182B] to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-[#59A5FF] text-sm">{cert.issuer}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#A1AAB9] text-sm">{cert.date}</span>
                  <span className="text-[#A1AAB9] text-sm">ID: {cert.credentialId}</span>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#59A5FF] hover:text-[#59A5FF]/80 transition-colors duration-300"
                >
                  View Certificate
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold">Continuous Learning</h3>
              <p className="text-[#A1AAB9] text-sm">
                Currently pursuing additional certifications in cloud computing and advanced web development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 