import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, Building } from 'lucide-react';

const CertificatesTab = () => {
  const [sortBy, setSortBy] = useState('newest');

  const certificates = [
    {
      id: 1,
      title: 'Afghan Student Council EMBASSAY Verified Certificate',
      issuer: 'Afghan Student Council',
      issueDate: '2024-01-01',
      credentialId: 'ASC-EMBASSAY-2024',
      verifyUrl: '#',
      description: 'Verified certificate for participation and contribution to the Afghan Student Council EMBASSAY program'
    },
    {
      id: 2,
      title: 'NCSS Event Management Certificate',
      issuer: 'NUML Computer Science Society',
      issueDate: '2023-01-01',
      credentialId: 'NCSS-EM-2023',
      verifyUrl: '#',
      description: 'Certificate for successful event management and organizational skills demonstrated in NUML CS Society events'
    },
    {
      id: 3,
      title: 'Pink Lady Campaign Certificate',
      issuer: 'Pink Lady Campaign Organization',
      issueDate: '2023-01-01',
      credentialId: 'PLC-2023',
      verifyUrl: '#',
      description: 'Certificate of participation and contribution to the Pink Lady Campaign initiative'
    }
  ];

  const sortedCertificates = certificates.sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime();
      case 'issuer':
        return a.issuer.localeCompare(b.issuer);
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div>
      {/* Sort Dropdown */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-800 border border-gray-600 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-300 focus:outline-none focus:border-cyan-500"
        >
          <option value="newest">Sort by Newest</option>
          <option value="issuer">Sort by Issuer</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {sortedCertificates.map((cert, index) => (
          <div
            key={cert.id}
            className="group bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 sm:hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-slide-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Certificate Header */}
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Certificate Info */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {cert.description}
              </p>

              {/* Issuer */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <Building className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <span className="font-medium">{cert.issuer}</span>
              </div>

              {/* Issue Date */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <span>{new Date(cert.issueDate).toLocaleDateString()}</span>
              </div>

              {/* Credential ID */}
              <div className="text-xs text-gray-500 bg-gray-900/50 p-2 rounded font-mono break-all">
                ID: {cert.credentialId}
              </div>

              {/* Verify Button */}
              <button className="w-full mt-3 sm:mt-4 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-lg text-white text-sm sm:text-base font-semibold hover:from-cyan-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300">
                Verify Certificate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesTab;
