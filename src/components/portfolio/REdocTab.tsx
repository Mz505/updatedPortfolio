import React, { useState } from 'react';
import { FileText, Calendar, User, Download, Eye, BookOpen, Code, Briefcase } from 'lucide-react';

type DocItem = {
  id: number
  title: string
  description: string
  author: string
  date: string
  type: string
  pages: number
  fileUrl: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const REdocTab = () => {
  const [downloadingId, setDownloadingId] = useState<number | null>(null);

  const documents: DocItem[] = [
    {
      id: 1,
      title: 'Professional CV/Resume',
      description: 'Complete professional resume showcasing skills, experience, and achievements in software development',
      author: 'Mashal Zerak',
      date: '2024-12-01',
      type: 'Resume',
      pages: 2,
      fileUrl: '/Mashal-zerak-cv.pdf',
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'NUML Admission Mentor Documentation',
      description: 'Technical documentation and API specifications for the AI-powered admission chatbot system',
      author: 'Mashal Zerak',
      date: '2024-11-15',
      type: 'API Documentation',
      pages: 25,
      fileUrl: '#',
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Afghan Student Council Requirements',
      description: 'System requirements specification and user stories for the student council management platform',
      author: 'Mashal Zerak',
      date: '2024-10-20',
      type: 'Requirements',
      pages: 18,
      fileUrl: '#',
      icon: BookOpen,
      color: 'from-cyan-500 to-teal-500'
    },
    {
      id: 4,
      title: 'MERN Stack Best Practices',
      description: 'Comprehensive guide on MERN stack development patterns and best practices used in projects',
      author: 'Mashal Zerak',
      date: '2024-09-10',
      type: 'Guide',
      pages: 32,
      fileUrl: '#',
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const handleDownload = async (doc: DocItem) => {
    if (doc.fileUrl === '#') {
      alert('This document is coming soon!');
      return;
    }

    setDownloadingId(doc.id);
    
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = doc.fileUrl;
      link.download = `${doc.title.replace(/\s+/g, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Simulate download delay
      setTimeout(() => {
        setDownloadingId(null);
      }, 1500);
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadingId(null);
    }
  };

  const handlePreview = (doc: DocItem) => {
    if (doc.fileUrl === '#') {
      alert('Preview coming soon!');
      return;
    }
    
    // Open PDF in new tab for preview
    window.open(doc.fileUrl, '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {documents.map((doc, index) => {
        const IconComponent = doc.icon;
        return (
          <div
            key={doc.id}
            className="group bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 sm:hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-slide-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Document Icon */}
            <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${doc.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            
            {/* Document Info */}
            <div className="space-y-3 sm:space-y-4">
              <div>
                <span className={`inline-block px-2 sm:px-3 py-1 bg-gradient-to-r ${doc.color} bg-opacity-20 text-white text-xs font-semibold rounded-full mb-2 sm:mb-3`}>
                  {doc.type}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {doc.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {doc.description}
                </p>
              </div>
              
              {/* Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-500">
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

              {/* Action Buttons */}
              <div className="flex gap-2 mt-3 sm:mt-4">
                {/* Preview Button */}
                <button 
                  onClick={() => handlePreview(doc)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-white text-sm sm:text-base font-semibold transform hover:scale-105 transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50"
                >
                  <Eye className="w-4 h-4" />
                  <span className="hidden sm:inline">Preview</span>
                </button>

                {/* Download Button */}
                <button 
                  onClick={() => handleDownload(doc)}
                  disabled={downloadingId === doc.id}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r ${doc.color} rounded-lg text-white text-sm sm:text-base font-semibold transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                >
                  {downloadingId === doc.id ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="hidden sm:inline">Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span className="hidden sm:inline">Download</span>
                    </>
                  )}
                </button>
              </div>

              {/* Available Badge */}
              {doc.fileUrl !== '#' && (
                <div className="flex items-center gap-2 text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available for download
                </div>
              )}
              
              {doc.fileUrl === '#' && (
                <div className="flex items-center gap-2 text-xs text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded-full">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Coming soon
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default REdocTab;
