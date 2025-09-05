import React from 'react';
import { Download, User, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-gray-400 bg-clip-text text-transparent">
              ABOUT ME
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-purple-400">Hello I'm</span>{' '}
                <span className="text-white">Mashal Zerak</span>
              </h3>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate MERN stack developer with hands-on experience in building responsive, 
                  user-centric web applications using React.js. I specialize in clean, modern UI design 
                  and have contributed to several projects that balance functionality with visual appeal.
                </p>
                
                <p className="text-lg">
                  Alongside development, I'm also pursuing Requirements Engineering—focusing on defining, 
                  analyzing, and managing software requirements to align technical solutions with business goals. 
                  With additional experience in SEO, WordPress customization, and design tools like Canva, 
                  I deliver complete, performance-driven digital solutions from concept to execution.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">15+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">5+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>

            {/* Download CV Button */}
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>

          {/* Right Column - Animated Illustration */}
          <div className="relative animate-fade-in-right">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50">
              {/* Developer Character */}
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center animate-bounce-slow">
                  <User className="w-16 h-16 text-white" />
                </div>
                
                <div className="space-y-4">
                  {/* Floating UI Panels */}
                  <div className="flex justify-center space-x-4">
                    <div className="w-24 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 flex items-center justify-center animate-float">
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
                      <div className="text-purple-400">const</div>
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