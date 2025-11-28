import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  

  

  useEffect(() => {
    const texts = [
      'MERN Stack Developer',
      'Problem Solver ',
      'AI Chatbot Builder ',
      'Making tech talk',
      'Adaptable Learner ',
      'Always leveling up',
      'Full-Stack Innovator',
      'Code + Creativity ',
      'My formula for impact',
    ];
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex]);

  return (
    <section id="hero" className="min-h-screen w-full relative overflow-hidden bg-transparent">
      {/* Copper Forge Background with Top Glow */}
      <div className="section-glow z-0" />

      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      {/* <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 pt-20">
      <div className="relative z-10 max-w-full mx-auto px-10 pt-20"> */}



        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-8">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-left order-2 lg:order-1">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="block mb-2 relative inline-block">
                  <span className="text-white">I'M </span>
                  <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">MASHAL ZERAK</span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full nav-underline" style={{animation: 'underlineGlow 2s ease-in-out infinite'}}></div>
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] flex items-start">
                  <span className="leading-tight">
                    {currentText}
                    <span className="animate-pulse">|</span>
                  </span>
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mt-4">
                I'm Mashal Zerak, a web developer passionate about building responsive, user-friendly websites.
                I'm a MERN stack developer and an aspiring Requirements Engineer.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-lg font-semibold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                View My Work
              </button>
              <button 
                onClick={() => navigate('/cv')}
                className="px-8 py-4 border-2 border-gray-600 rounded-lg font-semibold text-gray-300 hover:text-white hover:border-cyan-500 transition-all duration-300 hover:bg-cyan-500/10"
              >
                Check-out My CV
              </button>
              
            </div>
          </div>

          
          <div className="relative animate-fade-in-right order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative bg-transparent backdrop-blur-sm border border-gray-700/30 p-8 rounded-2xl shadow-2xl">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-full p-1 animate-pulse">
                      <div className="w-full h-full bg-black rounded-full p-2">
                        <img 
                          src="/assets/mz.jpeg" 
                          alt="Mashal Zerak - Full Stack Developer"
                          className="w-full h-full object-cover rounded-full border-2 border-gray-700/50 shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-emerald-500/20 blur-xl animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
