import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CV from './components/CV';
import { Toaster } from '@/components/ui/toast';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Services />
              <About />
              <Portfolio />
              <Contact />
              <Footer />
            </>
          } />
          
          {/* ✅ Navbar now included on CV page */}
          <Route path="/cv" element={
            <>
              <Navbar />
              <CV />
            </>
          } />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
