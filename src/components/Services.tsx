import React from 'react';
import { Globe, Brain, Smartphone, Server, Cloud, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Experienced MERN stack developer building fast, responsive, and scalable web applications with clean UIs and modern JavaScript best practices.'
    },
    {
      icon: Brain,
      title: 'Problem Solving using AI',
      description: 'Developing intelligent AI-powered solutions and chatbots that solve complex problems and enhance user experiences through advanced machine learning integration.'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile applications using React Native and modern frameworks, delivering seamless user experiences across iOS and Android devices.'
    },
    {
      icon: Server,
      title: 'API Development',
      description: 'Building robust RESTful APIs and GraphQL endpoints with Node.js, Express, and MongoDB, ensuring secure and efficient data management and integration.'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Deploying and managing applications on cloud platforms like AWS, Vercel, and Netlify with CI/CD pipelines for scalable and reliable hosting solutions.'
    },
    {
      icon: PenTool,
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces with modern design principles, ensuring optimal user experience and accessibility standards.'
    }
  ];

  return (
    <section id="services" className="py-20 w-full relative overflow-hidden bg-transparent">
      {/* Copper Forge Background with Top Glow */}
      <div className="section-glow z-0" />
      
      {/* Animated wave background */}
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 w-full h-32 text-cyan-500/10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-gray-400 bg-clip-text text-transparent relative inline-block">
              MY SERVICES
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full nav-underline" style={{animation: 'underlineGlow 2s ease-in-out infinite'}}></div>
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-transparent backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
