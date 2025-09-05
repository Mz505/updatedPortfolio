import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, Building } from 'lucide-react';

const CertificatesTab = () => {
  const [sortBy, setSortBy] = useState('newest');

  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      issueDate: '2024-03-15',
      credentialId: 'FCC-001-2024',
      verifyUrl: '#',
      description: 'Comprehensive certification covering HTML, CSS, JavaScript, React, Node.js, and MongoDB'
    },
    {
      id: 2,
      title: 'React Developer Certification',
      issuer: 'Meta',
      issueDate: '2024-01-20',
      credentialId: 'META-REACT-2024',
      verifyUrl: '#',
      description: 'Advanced React development including hooks, context, and modern patterns'
    },
    {
      id: 3,
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      issueDate: '2023-11-10',
      credentialId: 'FCC-JS-2023',
      verifyUrl: '#',
      description: 'Fundamental and advanced JavaScript concepts with algorithm problem solving'
    },
    {
      id: 4,
      title: 'MongoDB Developer Path',
      issuer: 'MongoDB University',
      issueDate: '2023-09-05',
      credentialId: 'MDB-DEV-2023',
      verifyUrl: '#',
      description: 'Database design, queries, and aggregation with MongoDB'
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
      <div className="flex justify-center mb-8">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
        >
          <option value="newest">Sort by Newest</option>
          <option value="issuer">Sort by Issuer</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      {/* Certificates Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {sortedCertificates.map((cert, index) => (
          <div
            key={cert.id}
            className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-slide-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Certificate Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-white" />
              </div>
              <button className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Certificate Info */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>

              {/* Issuer */}
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Building className="w-4 h-4 text-purple-400" />
                <span className="font-medium">{cert.issuer}</span>
              </div>

              {/* Issue Date */}
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>{new Date(cert.issueDate).toLocaleDateString()}</span>
              </div>

              {/* Credential ID */}
              <div className="text-xs text-gray-500 bg-gray-900/50 p-2 rounded font-mono">
                ID: {cert.credentialId}
              </div>

              {/* Verify Button */}
              <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300">
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