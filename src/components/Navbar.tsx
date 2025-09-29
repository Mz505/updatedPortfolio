import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect active section based on scroll position
      const sections = ["hero", "services", "about", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false); // close mobile menu
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent backdrop-blur-md shadow-lg border-b border-gray-800/30"
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
            <button 
              onClick={() => scrollToSection("hero")} 
              className={`nav-btn nav-underline ${activeSection === "hero" && location.pathname === "/" ? "active" : ""}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className={`nav-btn nav-underline ${activeSection === "services" && location.pathname === "/" ? "active" : ""}`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className={`nav-btn nav-underline ${activeSection === "about" && location.pathname === "/" ? "active" : ""}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")} 
              className={`nav-btn nav-underline ${activeSection === "portfolio" && location.pathname === "/" ? "active" : ""}`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className={`nav-btn nav-underline ${activeSection === "contact" && location.pathname === "/" ? "active" : ""}`}
            >
              Contact
            </button>
            <button 
              onClick={() => {
                if (location.pathname === "/cv") {
                  // Scroll to top first, then reload
                  window.scrollTo({ top: 0, behavior: 'instant' });
                  // Use a slight delay to ensure scroll completes before reload
                  setTimeout(() => {
                    window.location.href = window.location.href;
                  }, 50);
                } else {
                  navigate("/cv");
                }
              }} 
              className={`nav-btn nav-underline ${location.pathname === "/cv" ? "active" : ""}`}
            >
              CV
            </button>
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
              <div className="absolute right-0 mt-2 w-56 bg-gray-900/30 backdrop-blur-md shadow-xl rounded-xl py-3 px-4 space-y-2 animate-fade-in">
                <button 
                  onClick={() => scrollToSection("hero")} 
                  className={`nav-btn nav-underline block w-full text-left ${activeSection === "hero" && location.pathname === "/" ? "active" : ""}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className={`nav-btn nav-underline block w-full text-left ${activeSection === "services" && location.pathname === "/" ? "active" : ""}`}
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className={`nav-btn nav-underline block w-full text-left ${activeSection === "about" && location.pathname === "/" ? "active" : ""}`}
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("portfolio")} 
                  className={`nav-btn nav-underline block w-full text-left ${activeSection === "portfolio" && location.pathname === "/" ? "active" : ""}`}
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className={`nav-btn nav-underline block w-full text-left ${activeSection === "contact" && location.pathname === "/" ? "active" : ""}`}
                >
                  Contact
                </button>
                <button 
                  onClick={() => {
                    setIsOpen(false); // close mobile menu
                    if (location.pathname === "/cv") {
                      // Scroll to top first, then reload
                      window.scrollTo({ top: 0, behavior: 'instant' });
                      // Use a slight delay to ensure scroll completes before reload
                      setTimeout(() => {
                        window.location.href = window.location.href;
                      }, 50);
                    } else {
                      navigate("/cv");
                    }
                  }} 
                  className={`nav-btn nav-underline block w-full text-left ${location.pathname === "/cv" ? "active" : ""}`}
                >
                  CV
                </button>
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
