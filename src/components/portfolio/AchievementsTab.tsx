import React from 'react';
import { Trophy, Users, TrendingUp, Star, Code, Zap } from 'lucide-react';

const AchievementsTab = () => {
  const achievements = [
    {
      year: '2024',
      title: 'Built DSA Visualizer Platform',
      description: 'Created an interactive algorithm visualizer used by 200+ learners to understand data structures and algorithms',
      icon: Code,
      impact: '200+ users',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2024',
      title: 'E-commerce Performance Optimization',
      description: 'Optimized React cart flow and checkout process, reducing completion time by 35%',
      icon: TrendingUp,
      impact: '35% faster checkout',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2023',
      title: 'WordPress Client Portfolio',
      description: 'Delivered 5 custom WordPress websites with 98% client satisfaction rate',
      icon: Star,
      impact: '98% satisfaction',
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2023',
      title: 'Open Source Contributions',
      description: 'Contributed to React component libraries with 150+ GitHub stars',
      icon: Users,
      impact: '150+ GitHub stars',
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2023',
      title: 'Performance Champion',
      description: 'Improved web application loading speeds by 50% through code optimization',
      icon: Zap,
      impact: '50% faster loading',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>

      <div className="space-y-12">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={index}
              className={`relative flex items-center ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } animate-slide-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <div className={`w-8 h-8 bg-gradient-to-br ${achievement.color} rounded-full border-4 border-gray-900 flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Achievement Card */}
              <div className={`group ml-16 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Year Badge */}
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.color} rounded-full text-white text-xs font-bold mb-4`}>
                    {achievement.year}
                  </div>

                  {/* Achievement Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {achievement.description}
                    </p>

                    {/* Impact Badge */}
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold text-sm">
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