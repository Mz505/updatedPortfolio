import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              MASHAL ZERAK | Developer
            </h3>
            <p className="text-gray-400 leading-relaxed">
              MERN stack developer and aspiring Requirements Engineer passionate about creating 
              beautiful, functional web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300">Home</a>
              <a href="#services" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300">Services</a>
              <a href="#about" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300">About</a>
              <a href="#portfolio" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300">Portfolio</a>
              <a href="#contact" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-400">mashalzirak206@gmail.com</span>
              </div>
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://github.com/mz505" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mashal-zerak-b62947257/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Mashal Zerak. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
