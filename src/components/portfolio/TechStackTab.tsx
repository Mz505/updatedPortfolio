import React from 'react';

const TechStackTab = () => {
  const techCategories = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces',
      skills: [
        { name: 'React', level: 'Advanced', percentage: 90 },
        { name: 'Next.js', level: 'Intermediate', percentage: 75 },
        { name: 'Tailwind CSS', level: 'Advanced', percentage: 85 },
        { name: 'Redux', level: 'Intermediate', percentage: 70 },
        { name: 'React Hook Form', level: 'Advanced', percentage: 80 }
      ]
    },
    {
      title: 'Backend Development',
      description: 'Server-side development and API design',
      skills: [
        { name: 'Node.js', level: 'Advanced', percentage: 85 },
        { name: 'Express', level: 'Advanced', percentage: 80 },
        { name: 'MongoDB', level: 'Intermediate', percentage: 75 },
        { name: 'REST APIs', level: 'Advanced', percentage: 90 },
        { name: 'JWT/Auth', level: 'Intermediate', percentage: 70 }
      ]
    },
    {
      title: 'DevOps & Tools',
      description: 'Development workflow and deployment',
      skills: [
        { name: 'Git/GitHub', level: 'Advanced', percentage: 90 },
        { name: 'Postman', level: 'Advanced', percentage: 85 },
        { name: 'Docker', level: 'Beginner', percentage: 40 },
        { name: 'Vercel/Netlify', level: 'Intermediate', percentage: 75 }
      ]
    },
    {
      title: 'Testing & Quality',
      description: 'Ensuring code quality and reliability',
      skills: [
        { name: 'Jest/RTL', level: 'Intermediate', percentage: 65 },
        { name: 'ESLint/Prettier', level: 'Advanced', percentage: 80 }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Beginner': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getLevelBgColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'from-green-500 to-emerald-500';
      case 'Intermediate': return 'from-yellow-500 to-orange-500';
      case 'Beginner': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {techCategories.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 animate-slide-up"
          style={{ animationDelay: `${categoryIndex * 150}ms` }}
        >
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{category.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm">{category.description}</p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-300 font-medium">{skill.name}</span>
                  <span className={`text-xs font-semibold ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700/50 rounded-full h-2">
                  <div 
                    className={`h-2 bg-gradient-to-r ${getLevelBgColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.percentage}%`,
                      animationDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`
                    }}
                  ></div>
                </div>
                
                <div className="text-xs text-gray-500">
                  {skill.percentage}% Proficiency
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStackTab;
