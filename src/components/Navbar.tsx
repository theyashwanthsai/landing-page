import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experiments', label: 'Experiments' },
    { path: '/newsletter', label: 'Newsletter' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/10 backdrop-blur-md py-8' 
          : 'bg-black/10 py-8'
      } border border-gray-800 rounded-lg mx-20 mt-4`}
    >
      <div className="container mx-auto px-10 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl sm:text-l font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-100 hover:from-purple-500 hover:to-purple-700 transition-all duration-300"
        >
          Turi Labs
        </Link>
        
        <div className="hidden md:flex space-x-10 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`text-gray-300 hover:text-purple-400 transition-colors duration-300 text-base tracking-wide ${
                location.pathname === item.path ? 'text-purple-400' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <button 
          className="md:hidden text-gray-300 hover:text-purple-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 mt-4">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`text-gray-300 hover:text-purple-400 transition-colors duration-300 text-xl py-2 ${
                  location.pathname === item.path ? 'text-purple-400' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;