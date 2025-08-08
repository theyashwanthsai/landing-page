import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { Brain, Github, Twitter, BookOpen, Newspaper, Menu, X } from 'lucide-react';
import { HomePage } from './components/HomePage';
import { ResearchPage } from './pages/ResearchPage';
import { ContactPage } from './pages/Contact';
import { AboutPage } from './pages/About';
import { NewsletterPage } from './pages/NewsletterPage';
import { NewsletterArticlePage } from './pages/NewsletterArticlePage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <Router>
      <div className="min-h-screen w-full  relative">
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
    }}
  />
  {/* Your Content/Components */}

      <div className="min-h-screen text-white bg-gradient-to-b from-black/40 to-black/70">
        {/* Header */}
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
              <Link to="/about" className="nav-link" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
              <Link to="/newsletter" className="nav-link" onClick={() => window.scrollTo(0, 0)}>Newsletter</Link>
              <Link to="/contact" className="nav-link btn-primary text-black font-semibold text-lg" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
            </div>

            {isMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40 bg-transparent"
                  onClick={() => setIsMenuOpen(false)}
                  style={{height: '100vh'}}
                />
                <div 
                  className="md:hidden fixed top-[72px] left-0 right-0 bg-black/95 backdrop-blur-md z-50 animate-fadeIn"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg filter blur-xl"></div>
                  <div className="flex flex-col items-center py-6 space-y-4 relative">
                    <Link to="/research" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>Research</Link>
                    <Link to="/about" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    <Link to="/newsletter" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>Newsletter</Link>
                    <Link to="/contact" className="text-xl nav-link" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20 ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/newsletter/article/:articleName" element={<NewsletterArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="mt-16 sm:mt-24 bg-gradient-to-b from-black/40 to-black/70 border-t border-white/10 backdrop-blur-xl">
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <img src="/images/favicon.png" className="w-10 h-10 feature-icon" alt="TuriLabs Logo" />
                <span className="font-bold">TuriLabs</span>
              </Link>
              <div className="flex gap-6">
                {[
                  { icon: Github, link: "https://github.com/turi-labs" },
                  { icon: Twitter, link: "https://x.com/turilabs" },
                  { icon: BookOpen, link: "/research" },
                  { icon: Newspaper, link: "/newsletter" }
                ].map((social, i) => (
                  <a key={i} href={social.link} className="social-icon">
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8 text-center text-gray-500">
              © 2025  TuriLabs. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
      </div>
    </Router>
  );
}

export default App;