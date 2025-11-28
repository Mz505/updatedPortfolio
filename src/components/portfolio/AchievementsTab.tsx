import React from 'react';
import { Trophy } from 'lucide-react';

const AchievementsTab = () => {
  const achievements = [
    {
      id: 1,
      year: '2024',
      title: 'NUML Admission Mentor Platform',
      description: 'Developed a comprehensive admission guidance platform for NUML students with interactive features',
      icon: '🎓',
      impact: 'Helped streamline the admission process and provided valuable guidance to prospective students',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      year: '2024',
      title: 'E-commerce Site Development',
      description: 'Built a full-featured e-commerce platform with modern UI/UX and complete shopping functionality',
      icon: '🛒',
      impact: 'Created a scalable online shopping solution with secure payment integration',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      year: '2024',
      title: 'Explor-Afghanistan Tourism Platform',
      description: 'Developed a tourism website showcasing Afghanistan\'s cultural heritage and travel destinations',
      icon: '🗺️',
      impact: 'Promoted Afghan culture and tourism through an engaging digital platform',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 4,
      year: '2024',
      title: 'Afghan Student Council EMBASSAY',
      description: 'Received verified certificate for active participation and contribution to student council activities',
      icon: '🏆',
      impact: 'Demonstrated leadership and community engagement skills in academic environment',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 5,
      year: '2023',
      title: 'NCSS Event Management',
      description: 'Successfully managed and organized events for NUML Computer Science Society',
      icon: '📅',
      impact: 'Enhanced organizational skills and contributed to academic community building',
      color: 'from-cyan-500 to-teal-600'
    },
    {
      id: 6,
      year: '2023',
      title: 'Pink Lady Campaign Participation',
      description: 'Actively participated in the Pink Lady Campaign initiative for social awareness',
      icon: '🌸',
      impact: 'Contributed to social causes and community awareness programs',
      color: 'from-teal-500 to-emerald-600'
    }
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-3 sm:left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-teal-500 to-cyan-500"></div>

      <div className="space-y-8 sm:space-y-12">
        {achievements.map((achievement, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={achievement.id}
              className={`relative flex items-center ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } animate-slide-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline Node */}
              <div className="absolute left-3 sm:left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${achievement.color} rounded-full border-2 sm:border-4 border-gray-900 flex items-center justify-center`}>
                  <span className="text-sm sm:text-base">{achievement.icon}</span>
                </div>
              </div>

              {/* Achievement Card */}
              <div className={`group ml-12 sm:ml-16 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 sm:hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                  {/* Year Badge */}
                  <div className={`inline-block px-2 sm:px-3 py-1 bg-gradient-to-r ${achievement.color} rounded-full text-white text-xs font-bold mb-3 sm:mb-4`}>
                    {achievement.year}
                  </div>

                  {/* Achievement Content */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {achievement.description}
                    </p>

                    {/* Impact Badge */}
                    <div className="flex items-center gap-2">
                      <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold text-xs sm:text-sm">
                        {achievement.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for alignment */}
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsTab;
