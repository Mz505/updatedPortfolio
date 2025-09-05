import React from 'react';
import { FileText, Calendar, User } from 'lucide-react';

const REdocTab = () => {
  const documents = [
    {
      id: 1,
      title: 'Requirements Analysis Case Study',
      description: 'Complete requirements gathering and analysis for e-commerce platform',
      author: 'Mashal Zerak',
      date: '2024-12-01',
      type: 'Case Study',
      pages: 12
    },
    {
      id: 2,
      title: 'User Story Documentation',
      description: 'Comprehensive user stories and acceptance criteria for web application',
      author: 'Mashal Zerak',
      date: '2024-11-15',
      type: 'Documentation',
      pages: 8
    },
    {
      id: 3,
      title: 'System Requirements Specification',
      description: 'Technical and functional requirements for mobile application',
      author: 'Mashal Zerak',
      date: '2024-10-20',
      type: 'Specification',
      pages: 15
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {documents.map((doc, index) => (
        <div
          key={doc.id}
          className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-slide-up"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {/* Document Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <FileText className="w-8 h-8 text-white" />
          </div>
          
          {/* Document Info */}
          <div className="space-y-4">
            <div>
              <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full mb-3">
                {doc.type}
              </span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                {doc.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {doc.description}
              </p>
            </div>
            
            {/* Metadata */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-3 h-3" />
                <span>{doc.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                <span>{new Date(doc.date).toLocaleDateString()}</span>
              </div>
            </div>
            
            <div className="text-xs text-gray-500">
              {doc.pages} pages
            </div>

            {/* View Button */}
            <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300">
              View Document
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default REdocTab;