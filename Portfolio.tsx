import React, { useState } from 'react';
import PortfolioTab from './portfolio/PortfolioTab';
import REdocTab from './portfolio/REdocTab';
import TechStackTab from './portfolio/TechStackTab';
import CertificatesTab from './portfolio/CertificatesTab';
import AchievementsTab from './portfolio/AchievementsTab';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('portfolio');

  const tabs = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'redoc', label: 'REdoc' },
    { id: 'techstack', label: 'Tech Stack' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'achievements', label: 'Achievements' }
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'portfolio':
        return <PortfolioTab />;
      case 'redoc':
        return <REdocTab />;
      case 'techstack':
        return <TechStackTab />;
      case 'certificates':
        return <CertificatesTab />;
      case 'achievements':
        return <AchievementsTab />;
      default:
        return <PortfolioTab />;
    }
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-gray-400 bg-clip-text text-transparent">
              PORTFOLIO
            </span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700/50">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {renderActiveTab()}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;