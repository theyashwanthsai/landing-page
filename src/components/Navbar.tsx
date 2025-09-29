import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src="/images/favicon.png" className="w-10 h-10 feature-icon" alt="TuriLabs Logo" />
          <span className="text-xl font-bold">TuriLabs</span>
        </Link>
        
        <button 
          className="md:hidden transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/research" className="nav-link" onClick={() => window.scrollTo(0, 0)}>Research</Link>
          <Link to="/blogs" className="nav-link" onClick={() => window.scrollTo(0, 0)}>Blog</Link>
          <Link to="/about" className="nav-link" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
          <Link to="/contact" className=" btn-primary font-bold text-white" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
        </div>

        {isMenuOpen && (
          <>
            <div 
              className="fixed inset-0 z-40 bg-transparent h-screen"
              onClick={() => setIsMenuOpen(false)}
            />
            <div 
              className="md:hidden fixed top-[72px] left-0 right-0 backdrop-blur-xl z-50 animate-fadeIn"
            >
              <div className="absolute inset-0 bg-gradient-blue-subtle rounded-lg filter blur-xl"></div>
              <div className="flex flex-col items-center py-6 space-y-4 relative">
                <Link to="/research" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>Research</Link>
                <Link to="/blogs" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                <Link to="/about" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                <Link to="/contact" className="text-xl nav-link " onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
