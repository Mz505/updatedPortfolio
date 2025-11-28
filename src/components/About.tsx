import React from 'react';
import { Download, User, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Mashal-zerak-cv.pdf';
    link.download = 'Mashal-Zerak-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 w-full relative overflow-hidden bg-transparent">
      {/* Copper Forge Background with Top Glow */}
      <div className="section-glow z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-gray-400 bg-clip-text text-transparent relative inline-block">
              ABOUT ME
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full nav-underline" style={{animation: 'underlineGlow 2s ease-in-out infinite'}}></div>
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-cyan-400">Hello I'm</span>{' '}
                <span className="text-white">Mashal Zerak</span>
              </h3>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm Mashal Zerak, a passionate Full Stack Developer with expertise in building scalable, 
                  user-friendly web applications. My experience spans across MERN stack, ASP.NET, Java, and Python, 
                  giving me the flexibility to work on both front-end and back-end systems.
                </p>
                
                <p className="text-lg">
                  I love turning complex problems into clean, efficient solutions and have a strong eye for 
                  crafting intuitive interfaces with React. Beyond coding, I've led and contributed to impactful 
                  projects—ranging from chatbots powered by AI & NLP to real-world web platforms that solve 
                  everyday challenges.
                </p>
                
                <p className="text-lg">
                  Currently, I'm focused on creating modern applications that combine performance, design, and 
                  functionality. My long-term vision is to establish a software house that empowers people 
                  through technology and delivers high-quality digital solutions.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">15+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">5+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>

            {/* Download CV Button */}
            <button 
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-lg font-semibold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>

          {/* Right Column - Animated Illustration */}
          <div className="relative animate-fade-in-right">
            <div className="relative bg-transparent p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50">
              {/* Developer Character */}
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center animate-bounce-slow">
                  <User className="w-16 h-16 text-white" />
                </div>
                
                <div className="space-y-4">
                  {/* Floating UI Panels */}
                  <div className="flex justify-center space-x-4">
                    <div className="w-24 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 flex items-center justify-center animate-float">
                      <Briefcase className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="w-24 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30 flex items-center justify-center animate-float-delay-1">
                      <GraduationCap className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  
                  {/* Code Snippets */}
                  <div className="bg-gray-900/80 rounded-lg p-4 border border-gray-600/50">
                    <div className="flex space-x-2 mb-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="text-cyan-400">const</div>
                      <div className="text-gray-300">developer = {'{'}</div>
                      <div className="text-gray-300 pl-4">name: 'Mashal zerak',</div>
                      <div className="text-gray-300 pl-4">passion: 'coding'</div>
                      <div className="text-gray-300">{'}'}</div>
                    </div>
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

export default About;
