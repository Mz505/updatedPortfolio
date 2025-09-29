import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, Layers } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [pausedTech, setPausedTech] = useState<string | null>(null);
  const [techPositions, setTechPositions] = useState({
    React: { top: '50%', left: '50%' },
    'Node.js': { top: '50%', left: '50%' },
    TypeScript: { top: '50%', left: '50%' },
    MongoDB: { top: '50%', left: '50%' },
    'Tailwind CSS': { top: '50%', left: '50%' },
    'Express.js': { top: '50%', left: '50%' },
    JavaScript: { top: '50%', left: '50%' },
    Git: { top: '50%', left: '50%' },
    Python: { top: '50%', left: '50%' },
    ChatGPT: { top: '50%', left: '50%' }
  });

  const handleTechClick = (tech: string) => {
    // Pause the animation for this tech
    setPausedTech(tech);
    
    const techInfo = {
      'React': { title: '⚛️ React Magic', description: 'Building beautiful UIs with components!' },
      'Node.js': { title: '🚀 Node.js Power', description: 'Server-side JavaScript excellence!' },
      'TypeScript': { title: '📘 TypeScript Safety', description: 'JavaScript with superpowers!' },
      'MongoDB': { title: '🍃 MongoDB Flexibility', description: 'NoSQL database for modern apps!' },
      'Tailwind CSS': { title: '🎨 Tailwind Elegance', description: 'Utility-first CSS framework!' },
      'Express.js': { title: '⚡ Express Speed', description: 'Fast & minimalist web framework!' },
      'JavaScript': { title: '💛 JavaScript Core', description: 'The language of the modern web!' },
      'Git': { title: '🔧 Git Control', description: 'Version control mastery!' },
      'Python': { title: '🐍 Python Power', description: 'Versatile language for AI & backend!' },
      'ChatGPT': { title: '🤖 ChatGPT AI', description: 'Building intelligent conversational AI!' }
    };
    
    const info = techInfo[tech as keyof typeof techInfo] || { title: `${tech}`, description: 'Powerful technology!' };
    
    toast({
      title: info.title,
      description: info.description,
      className: "animate-slide-in-right bg-gradient-to-r from-gray-900/95 to-gray-800/95 border-gray-700 text-white backdrop-blur-sm",
      style: {
        borderBottom: '3px solid transparent',
        borderImage: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4) 1',
        position: 'relative',
        overflow: 'hidden'
      }
    });
  };

  const handleTechMouseLeave = () => {
    // Resume animation when cursor leaves
    setPausedTech(null);
  };

  const handleDragStart = (e: React.DragEvent, tech: string) => {
    setDraggedItem(tech);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedItem) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate position relative to container
    const newPosition = {
      top: `${Math.max(0, Math.min(y - 28, rect.height - 56))}px`, // 28 is half of icon height
      left: `${Math.max(0, Math.min(x - 28, rect.width - 56))}px`   // 28 is half of icon width
    };

    setTechPositions(prev => ({
      ...prev,
      [draggedItem]: newPosition
    }));

    setDraggedItem(null);
  };

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
    <section id="hero" className="min-h-screen w-full relative overflow-hidden bg-black">
      {/* Copper Forge Background with Top Glow */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249, 115, 22, 0.25), transparent 70%), #000000", 
        }} 
      />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Code Particles */}
        <div className="absolute top-32 left-1/4 animate-float-wave opacity-30">
          <span className="text-cyan-400/60 font-mono text-sm">&lt;div&gt;</span>
        </div>
        <div className="absolute top-64 right-1/3 animate-float-delay-1 opacity-30">
          <span className="text-green-400/60 font-mono text-sm">const</span>
        </div>
        <div className="absolute bottom-48 left-1/3 animate-float-delay-2 opacity-30">
          <span className="text-yellow-400/60 font-mono text-sm">function()</span>
        </div>
        <div className="absolute top-48 right-1/4 animate-float-delay-3 opacity-30">
          <span className="text-purple-400/60 font-mono text-sm">{`{}`}</span>
        </div>
        <div className="absolute bottom-32 right-1/2 animate-float-orbit opacity-30">
          <span className="text-blue-400/60 font-mono text-sm">useState</span>
        </div>
        <div className="absolute top-80 left-1/2 animate-float-scale opacity-30">
          <span className="text-pink-400/60 font-mono text-sm">async</span>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-16 right-1/2 w-2 h-2 bg-cyan-400/30 rounded-full animate-float-delay-1"></div>
        <div className="absolute bottom-24 left-1/2 w-3 h-3 bg-purple-400/30 rotate-45 animate-float-delay-2"></div>
        <div className="absolute top-40 left-1/3 w-1 h-8 bg-green-400/30 animate-float-wave"></div>
        <div className="absolute bottom-40 right-1/4 w-4 h-1 bg-yellow-400/30 animate-float-orbit"></div>
      </div>

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
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MASHAL ZERAK</span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full nav-underline" style={{animation: 'underlineGlow 2s ease-in-out infinite'}}></div>
                </span>
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] flex items-start">
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
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                View My Work
              </button>
              <button 
                onClick={() => navigate('/cv')}
                className="px-8 py-4 border-2 border-gray-600 rounded-lg font-semibold text-gray-300 hover:text-white hover:border-purple-500 transition-all duration-300 hover:bg-purple-500/10"
              >
                Check-out My CV
              </button>
            </div>
          </div>

          {/* Right Column - Personal Image */}
          <div className="relative animate-fade-in-right order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative bg-transparent backdrop-blur-sm border border-gray-700/30 p-8 rounded-2xl shadow-2xl">
              {/* Personal Image */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 relative">
                    {/* Image with gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full p-1 animate-pulse">
                      <div className="w-full h-full bg-black rounded-full p-2">
                        <img 
                          src="/assets/mz.jpeg" 
                          alt="Mashal Zerak - Full Stack Developer"
                          className="w-full h-full object-cover rounded-full border-2 border-gray-700/50 shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    {/* Glowing ring effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-xl animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Orbiting Tech Stack Icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* React */}
                <div 
                  className={`absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-20 ${pausedTech === 'React' ? '' : 'animate-orbit'}`}
                  style={pausedTech === 'React' ? {} : { animationDelay: '0s' }}
                  title="React - Frontend Library | Click for info"
                  onClick={() => handleTechClick('React')}
                  onMouseLeave={handleTechMouseLeave}
                >
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center border-2 border-cyan-500/40 backdrop-blur-sm shadow-lg hover:shadow-cyan-500/50 hover:bg-cyan-500/30">
                    <span className="text-cyan-400 font-bold text-xs">⚛️</span>
                  </div>
                </div>

                {/* Node.js */}
                <div 
                  className={`absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-20 ${pausedTech === 'Node.js' ? '' : 'animate-orbit'}`}
                  style={pausedTech === 'Node.js' ? {} : { animationDelay: '-2s' }}
                  title="Node.js - Backend Runtime | Click for info"
                  onClick={() => handleTechClick('Node.js')}
                  onMouseLeave={handleTechMouseLeave}
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500/40 backdrop-blur-sm shadow-lg hover:shadow-green-500/50 hover:bg-green-500/30">
                    <span className="text-green-400 font-bold text-xs">🟢</span>
                  </div>
                </div>

                {/* TypeScript */}
                <div 
                  className={`absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-20 ${pausedTech === 'TypeScript' ? '' : 'animate-orbit'}`}
                  style={pausedTech === 'TypeScript' ? {} : { animationDelay: '-4s' }}
                  title="TypeScript - Typed JavaScript | Click for info"
                  onClick={() => handleTechClick('TypeScript')}
                  onMouseLeave={handleTechMouseLeave}
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border-2 border-blue-500/40 backdrop-blur-sm shadow-lg hover:shadow-blue-500/50 hover:bg-blue-500/30">
                    <span className="text-blue-400 font-bold text-xs">TS</span>
                  </div>
                </div>

                {/* MongoDB */}
                <div 
                  className={`absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-20 ${pausedTech === 'MongoDB' ? '' : 'animate-orbit'}`}
                  style={pausedTech === 'MongoDB' ? {} : { animationDelay: '-6s' }}
                  title="MongoDB - NoSQL Database | Click for info"
                  onClick={() => handleTechClick('MongoDB')}
                  onMouseLeave={handleTechMouseLeave}
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center border-2 border-emerald-500/40 backdrop-blur-sm shadow-lg hover:shadow-emerald-500/50 hover:bg-emerald-500/30">
                    <span className="text-emerald-400 font-bold text-xs">🍃</span>
                  </div>
                </div>

                {/* Tailwind CSS */}
                <div 
                  className={`absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-20 ${pausedTech === 'Tailwind CSS' ? '' : 'animate-orbit'}`}
                  style={pausedTech === 'Tailwind CSS' ? {} : { animationDelay: '-8s' }}
                  title="Tailwind CSS - Utility-First CSS | Click for info"
                  onClick={() => handleTechClick('Tailwind CSS')}
                  onMouseLeave={handleTechMouseLeave}
                >
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center border-2 border-teal-500/40 backdrop-blur-sm shadow-lg hover:shadow-teal-500/50 hover:bg-teal-500/30">
                    <span className="text-teal-400 font-bold text-xs">🎨</span>
                  </div>
                </div>

                {/* Express.js */}
                <div 
                  className={`absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-20 ${pausedTech === 'Express.js' ? '' : 'animate-orbit'}`}
                  style={pausedTech === 'Express.js' ? {} : { animationDelay: '-10s' }}
                  title="Express.js - Web Framework | Click for info"
                  onClick={() => handleTechClick('Express.js')}
                  onMouseLeave={handleTechMouseLeave}
                >
                  <div className="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center border-2 border-gray-500/40 backdrop-blur-sm shadow-lg hover:shadow-gray-500/50 hover:bg-gray-500/30">
                    <span className="text-gray-400 font-bold text-xs">⚡</span>
                  </div>
                </div>

                {/* JavaScript */}
                <div 
                  className={`absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-20 ${pausedTech === 'JavaScript' ? '' : 'animate-orbit'}`}
                  style={pausedTech === 'JavaScript' ? {} : { animationDelay: '-12s' }}
                  title="JavaScript - Programming Language | Click for info"
                  onClick={() => handleTechClick('JavaScript')}
                  onMouseLeave={handleTechMouseLeave}
                >
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center border-2 border-yellow-500/40 backdrop-blur-sm shadow-lg hover:shadow-yellow-500/50 hover:bg-yellow-500/30">
                    <span className="text-yellow-400 font-bold text-xs">JS</span>
                  </div>
                </div>

                {/* Git */}
                <div 
                  className={`absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-20 ${pausedTech === 'Git' ? '' : 'animate-orbit'}`}
                  style={pausedTech === 'Git' ? {} : { animationDelay: '-14s' }}
                  title="Git - Version Control | Click for info"
                  onClick={() => handleTechClick('Git')}
                  onMouseLeave={handleTechMouseLeave}
                >
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border-2 border-orange-500/40 backdrop-blur-sm shadow-lg hover:shadow-orange-500/50 hover:bg-orange-500/30">
                    <span className="text-orange-400 font-bold text-xs">🔧</span>
                  </div>
                </div>

                {/* Python */}
                <div 
                  className={`absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-20 ${pausedTech === 'Python' ? '' : 'animate-orbit'}`}
                  style={pausedTech === 'Python' ? {} : { animationDelay: '-16s' }}
                  title="Python - AI & Backend Language | Click for info"
                  onClick={() => handleTechClick('Python')}
                  onMouseLeave={handleTechMouseLeave}
                >
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center border-2 border-yellow-600/40 backdrop-blur-sm shadow-lg hover:shadow-yellow-600/50 hover:bg-yellow-600/30">
                    <span className="text-yellow-300 font-bold text-xs">🐍</span>
                  </div>
                </div>

                {/* ChatGPT */}
                <div 
                  className={`absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-20 ${pausedTech === 'ChatGPT' ? '' : 'animate-orbit'}`}
                  style={pausedTech === 'ChatGPT' ? {} : { animationDelay: '-18s' }}
                  title="ChatGPT - AI Integration | Click for info"
                  onClick={() => handleTechClick('ChatGPT')}
                  onMouseLeave={handleTechMouseLeave}
                >
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center border-2 border-purple-500/40 backdrop-blur-sm shadow-lg hover:shadow-purple-500/50 hover:bg-purple-500/30">
                    <span className="text-purple-400 font-bold text-xs">🤖</span>
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
