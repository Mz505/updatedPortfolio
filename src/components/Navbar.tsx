// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isScrolled 
//         ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
//         : 'bg-transparent'
//     }`}>
//       {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
//       <div className="w-full px-2 sm:px-4 lg:px-6">

//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
//               MASHAL ZERAK | Developer
//             </span>
//           </div>

//           {/* Center Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <button 
//               onClick={() => scrollToSection('hero')}
//               className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 px-3 py-2 rounded-lg"
//             >
//               Home
//             </button>
//             <button 
//               onClick={() => scrollToSection('services')}
//               className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 px-3 py-2 rounded-lg"
//             >
//               Services
//             </button>
//             <button 
//               onClick={() => scrollToSection('about')}
//               className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 px-3 py-2 rounded-lg"
//             >
//               About
//             </button>
//             <button 
//               onClick={() => scrollToSection('portfolio')}
//               className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 px-3 py-2 rounded-lg"
//             >
//               Portfolio
//             </button>
//             <button 
//               onClick={() => scrollToSection('contact')}
//               className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 px-3 py-2 rounded-lg"
//             >
//               Contact
//             </button>
//             <button 
//               onClick={() => navigate('/cv')}
//               className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 px-3 py-2 rounded-lg"
//             >
//               CV
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button className="text-gray-300 hover:text-white p-2">
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close on click
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* ~20px right space */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 pl-3">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              MASHAL ZERAK | Developer
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("hero")} className="nav-btn">Home</button>
            <button onClick={() => scrollToSection("services")} className="nav-btn">Services</button>
            <button onClick={() => scrollToSection("about")} className="nav-btn">About</button>
            <button onClick={() => scrollToSection("portfolio")} className="nav-btn">Portfolio</button>
            <button onClick={() => scrollToSection("contact")} className="nav-btn">Contact</button>
            <button onClick={() => navigate("/cv")} className="nav-btn">CV</button>
          </div>

          {/* Mobile button */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Floating Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md shadow-xl rounded-xl py-3 px-4 space-y-2 animate-fade-in">
                <button onClick={() => scrollToSection("hero")} className="nav-btn block w-full text-left">Home</button>
                <button onClick={() => scrollToSection("services")} className="nav-btn block w-full text-left">Services</button>
                <button onClick={() => scrollToSection("about")} className="nav-btn block w-full text-left">About</button>
                <button onClick={() => scrollToSection("portfolio")} className="nav-btn block w-full text-left">Portfolio</button>
                <button onClick={() => scrollToSection("contact")} className="nav-btn block w-full text-left">Contact</button>
                <button onClick={() => navigate("/cv")} className="nav-btn block w-full text-left">CV</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable Tailwind style for nav buttons
const navBtn =
  "text-gray-300 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 px-3 py-2 rounded-lg";

export default Navbar;
