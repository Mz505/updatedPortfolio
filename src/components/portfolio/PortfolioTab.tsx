import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioTab = () => {
  const projects = [
    {
      id: 1,
      title: 'NUML Admission Mentor',
      description: 'AI chatbot with MERN stack that solves student questions.',
      image: '/assets/numlAdmissionMentor.png',
      liveUrl: 'https://frolicking-salmiakki-8b8613.netlify.app/',
      codeUrl: 'https://github.com/Mz505/NumlAdmissionMentor',
      tags: ['React', 'Node.js', 'MongoDB', 'AI Chatbot']
    },
    {
      id: 2,
      title: 'LocalShops — Community Marketplace',
      description: 'Shop local, support community. A modern marketplace with product browsing, smart cart, guest checkout, order tracking, and clean responsive UI built with React.',
      image: 'https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=1200',
      liveUrl: 'https://69289abd83febe4b05c19a59--localsshop.netlify.app/',
      codeUrl: 'https://github.com/Mz505',
      tags: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      id: 3,
      title: 'NUML Afghan Student Council',
      description: 'Student council website using MERN stack.',
      image: '/assets/councilSite.png',
      liveUrl: 'https://afghanstudentcouncil.netlify.app/',
      codeUrl: 'https://github.com/Mz505/Numl_Afghan_Student_Council',
      tags: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      id: 4,
      title: 'School Management System',
      description: 'Comprehensive school management using ASP.NET and MySQL.',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      codeUrl: 'https://github.com/Mz505',
      tags: ['ASP.NET', 'MySQL', 'C#', 'Web Forms']
    },
    {
      id: 5,
      title: 'Pharmacy Management System',
      description: 'Organization pharmacy management with featured system using MERN.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: 'https://cerulean-quokka-b4a55e.netlify.app/',
      codeUrl: 'https://github.com/Mz505',
      tags: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      id: 6,
      title: 'MERN Based HRMS',
      description: 'Human Resource Management System built with MERN stack.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      codeUrl: 'https://github.com/Mz505',
      tags: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      id: 7,
      title: 'Explor-Afghanistan',
      description: 'A soon-to-be-launched travel companion app designed to make exploring Afghanistan seamless and enjoyable. Features hotel booking, transport reservation, AI-powered recommendations, live maps, and real-time weather updates.',
      image: '/assets/Explore-afghanistan.jpeg',
      liveUrl: 'https://document-visulaization.netlify.app/',
      codeUrl: '#',
      tags: ['Mobile App', 'AI', 'Maps', 'Travel', 'Coming Soon']
    }
    ,
    {
      id: 8,
      title: 'Hill Calories AI',
      description: 'AI-powered meal analysis that recognizes food from images and provides detailed nutrition breakdown with charts, daily dashboard, history, and sharing. Smart validation prevents non-food inputs.',
      image: 'https://images.pexels.com/photos/1435896/pexels-photo-1435896.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: 'https://mealanalyzer.netlify.app/',
      codeUrl: 'https://github.com/Mz505/Meal_Analyzer.git',
      tags: ['React', 'TypeScript', 'Tailwind', 'AI', 'Vision', 'Supabase']
    }
    ,
    {
      id: 9,
      title: 'Fursats Afghan — Job Portal',
      description: 'Job portal connecting seekers and employers in Afghanistan. React SPA with Supabase for auth, storage, and PostgREST data. Features dashboards, job search, applications, company verification, and Stripe-powered plans.',
      image: '/assets/fursats.png',
      liveUrl: 'https://fursatsjobs.netlify.app/',
      codeUrl: '#',
      tags: ['React', 'react-router-dom', 'Tailwind', 'shadcn/ui', 'lucide-react', '@tanstack/react-query', 'Supabase', 'PostgREST', 'Stripe']
    },
    {
      id: 10,
      title: 'Bloom & Petals — Flower Shop',
      description: 'Elegant e-commerce platform for handcrafted floral arrangements. Features product catalog, shopping cart, category browsing, special offers, and responsive design. Perfect for gifting and celebrations.',
      image: 'https://images.pexels.com/photos/1458603/pexels-photo-1458603.jpeg?auto=compress&cs=tinysrgb&w=1200',
      liveUrl: 'https://roseonline.netlify.app/',
      codeUrl: '#',
      tags: ['HTML', 'CSS', 'JavaScript', 'E-commerce', 'Responsive Design']
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="group bg-transparent backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 sm:hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-slide-up"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {/* Project Image */}
          <div className="relative overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Hover Overlay with Buttons */}
            <div className="absolute inset-0 flex items-center justify-center space-x-3 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-cyan-600 rounded-full text-white hover:bg-cyan-700 transform hover:scale-110 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-600 rounded-full text-white hover:bg-gray-700 transform hover:scale-110 transition-all duration-200"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2 sm:px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 border border-gray-600/50"
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
