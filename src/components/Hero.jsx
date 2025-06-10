import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const texts = ["Frontend Developer", "UI/UX Enthusiast", "React Specialist"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentIndex];
      
      if (isDeleting) {
        setTypedText(currentText.substring(0, typedText.length - 1));
        setTypingSpeed(50);
      } else {
        setTypedText(currentText.substring(0, typedText.length + 1));
        setTypingSpeed(150);
      }
      
      if (!isDeleting && typedText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
        setTypingSpeed(500);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, currentIndex, isDeleting, texts, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-[#59A5FF]/10"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="text-center relative z-10 animate-fadeIn">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-[#59A5FF] to-[#7B61FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#59A5FF]/30 animate-float">
            <span className="text-3xl">👋</span>
          </div>
          <p className="text-[#59A5FF] font-medium mb-2">HELLO, I'M</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          <span className="gradient-text">Frontend</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59A5FF] via-[#7B61FF] to-[#FF6B9C]">
            {typedText}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[#A1AAB9] mb-8 max-w-2xl mx-auto">
          Crafting pixel-perfect, responsive web experiences with modern technologies
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-[#59A5FF] to-[#7B61FF] rounded-lg group hover:scale-105"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#7B61FF] rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 bg-gradient-to-r from-[#59A5FF] to-[#7B61FF] rounded-lg"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              View My Work
            </span>
          </a>
          
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all duration-300 border border-[#59A5FF] rounded-lg hover:scale-105 group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#59A5FF] to-[#7B61FF] opacity-0 group-hover:opacity-10 transition-all duration-300"></span>
            <span className="relative w-full text-left text-[#59A5FF] transition-colors duration-200 ease-in-out flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Get In Touch
            </span>
          </a>
        </div>
        
        <div className="mt-12 flex justify-center space-x-6">
          {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
            <a 
              key={social}
              href="#"
              className="text-[#A1AAB9] hover:text-[#59A5FF] transition-colors duration-300 flex flex-col items-center group"
            >
              <div className="w-10 h-10 bg-[#1A2238] rounded-full flex items-center justify-center mb-1 group-hover:bg-[#59A5FF]/10 group-hover:scale-110 transition-all duration-300">
                <span className="text-lg">{social === 'LinkedIn' ? '👔' : social === 'GitHub' ? '💻' : '🐦'}</span>
              </div>
              <span className="text-xs">{social}</span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-[#A1AAB9] hover:text-[#59A5FF] transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero; 