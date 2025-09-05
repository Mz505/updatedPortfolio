import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioTab = () => {
  const projects = [
    {
      id: 1,
      title: 'NUML Admission Mentor',
      description: 'AI chatbot with MERN stack that solves student questions.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      codeUrl: 'https://github.com/mz505',
      tags: ['React', 'Node.js', 'MongoDB', 'AI Chatbot']
    },
    {
      id: 2,
      title: 'E-commerce Site',
      description: 'React app with API integration, cart, and login.',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      codeUrl: 'https://github.com/mz505',
      tags: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      id: 3,
      title: 'NUML Afghan Student Council',
      description: 'Student council website using MERN stack.',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      codeUrl: 'https://github.com/mz505',
      tags: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      id: 4,
      title: 'School Management System',
      description: 'Comprehensive school management using ASP.NET and MySQL.',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      codeUrl: 'https://github.com/mz505',
      tags: ['ASP.NET', 'MySQL', 'C#', 'Web Forms']
    },
    {
      id: 5,
      title: 'Pharmacy Management System',
      description: 'Organization pharmacy management with featured system using MERN.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      codeUrl: 'https://github.com/mz505',
      tags: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      id: 6,
      title: 'MERN Based HRMS',
      description: 'Human Resource Management System built with MERN stack.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      codeUrl: 'https://github.com/mz505',
      tags: ['React', 'Node.js', 'MongoDB', 'Express']
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-slide-up"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {/* Project Image */}
          <div className="relative overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Hover Overlay with Buttons */}
            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 transform hover:scale-110 transition-all duration-200"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a 
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-600 rounded-full text-white hover:bg-gray-700 transform hover:scale-110 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 border border-gray-600/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioTab;