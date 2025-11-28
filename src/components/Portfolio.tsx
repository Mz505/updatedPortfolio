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
    <section id="portfolio" className="py-20 w-full relative overflow-hidden bg-transparent">
      {/* Copper Forge Background with Top Glow */}
      <div className="section-glow z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-gray-400 bg-clip-text text-transparent relative inline-block">
              PORTFOLIO
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full nav-underline" style={{animation: 'underlineGlow 2s ease-in-out infinite'}}></div>
            </span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-transparent backdrop-blur-md rounded-2xl p-2 sm:p-3 border border-gray-600/50 shadow-2xl shadow-cyan-500/10 w-full max-w-4xl overflow-x-auto">
            <div className="flex justify-start sm:justify-center space-x-2 sm:space-x-4 lg:space-x-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 sm:px-6 lg:px-8 py-2.5 sm:py-4 rounded-xl transition-all duration-500 text-sm sm:text-base font-semibold whitespace-nowrap group ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-600 text-white shadow-2xl shadow-cyan-500/50 transform scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/60 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-102 border border-gray-600/30 hover:border-cyan-500/50'
                  }`}
                >
                  {/* Glow effect for active tab */}
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl blur-lg opacity-30 -z-10 animate-pulse"></div>
                  )}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                  
                  {/* Underline effect */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'w-full opacity-100' 
                      : 'w-0 group-hover:w-3/4 opacity-0 group-hover:opacity-100'
                  }`}></div>
                  
                  {/* Shimmer effect for active tab */}
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                  )}
                  
                  <span className="relative z-10">{tab.label}</span>
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
