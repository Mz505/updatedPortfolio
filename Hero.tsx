import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, Code, Database, Layers } from 'lucide-react';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

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

  useEffect(() => {
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
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      {/* <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 pt-20">
      <div className="relative z-10 max-w-full mx-auto px-10 pt-20"> */}



        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="block text-white">I'M A</span>
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent h-16">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                I'm Mashal Zerak, a web developer passionate about building responsive, user-friendly websites.
                I'm a MERN stack developer and an aspiring Requirements Engineer.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                View My Work
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 rounded-lg font-semibold text-gray-300 hover:text-white hover:border-purple-500 transition-all duration-300 hover:bg-purple-500/10">
                Check-out My CV
              </button>
            </div>
          </div>

          {/* Right Column - Developer Illustration */}
          <div className="relative animate-fade-in-right">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl">
              {/* Main Developer Setup */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  {/* Dual Monitors */}
                  <div className="flex space-x-4">
                    <div className="w-32 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg border border-gray-600 relative">
                      <div className="absolute inset-2 bg-gradient-to-br from-purple-900/50 to-black rounded">
                        <Code className="w-6 h-6 text-purple-400 absolute top-2 left-2" />
                        <div className="absolute bottom-2 left-2 space-y-1">
                          <div className="w-8 h-1 bg-purple-400 rounded"></div>
                          <div className="w-12 h-1 bg-gray-400 rounded"></div>
                          <div className="w-6 h-1 bg-gray-400 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="w-32 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg border border-gray-600 relative">
                      <div className="absolute inset-2 bg-gradient-to-br from-blue-900/50 to-black rounded">
                        <Database className="w-6 h-6 text-blue-400 absolute top-2 left-2" />
                        <div className="absolute bottom-2 left-2 space-y-1">
                          <div className="w-10 h-1 bg-blue-400 rounded"></div>
                          <div className="w-8 h-1 bg-gray-400 rounded"></div>
                          <div className="w-14 h-1 bg-gray-400 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Smartphone Mockup */}
                  <div className="absolute -right-8 top-8">
                    <div className="w-16 h-28 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl border border-gray-600 relative">
                      <div className="absolute inset-2 bg-gradient-to-br from-green-900/50 to-black rounded-lg">
                        <Smartphone className="w-4 h-4 text-green-400 absolute top-1 left-1" />
                        <div className="absolute bottom-2 left-1 space-y-1">
                          <div className="w-6 h-1 bg-green-400 rounded"></div>
                          <div className="w-8 h-1 bg-gray-400 rounded"></div>
                          <div className="w-4 h-1 bg-gray-400 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Stack Icons */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 right-4 animate-float">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
                    <span className="text-orange-400 font-bold text-sm">HTML</span>
                  </div>
                </div>

                <div className="absolute top-16 left-4 animate-float-delay-1">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                    <span className="text-blue-400 font-bold text-sm">CSS</span>
                  </div>
                </div>

                <div className="absolute bottom-20 right-8 animate-float-delay-2">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center border border-yellow-500/30">
                    <span className="text-yellow-400 font-bold text-sm">JS</span>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 animate-float-delay-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                    <span className="text-purple-400 font-bold text-xs">C++</span>
                  </div>
                </div>

                <div className="absolute top-32 right-16 animate-float">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center border border-indigo-500/30">
                    <span className="text-indigo-400 font-bold text-sm">PHP</span>
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