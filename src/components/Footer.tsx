import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <a 
              href="#top" 
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-100"
            >
              Turi Labs
            </a>
            <p className="text-gray-500 mt-2 text-sm">
              Building the weird and wonderful in AI
            </p>
            
            <div className="flex space-x-6 mt-4">
              <a 
                href="https://github.com/turi-labs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://twitter.com/turilabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:taddishetty34@gmail.com" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-white font-semibold mb-4">Research</h3>
            <ul className="space-y-2">
              <li>
                <a href="/projects/ai-agents" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  AI Agents
                </a>
              </li>
              <li>
                <a href="/projects/generative" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Generative Experiments
                </a>
              </li>
              <li>
                <a href="/experiments" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  View All Projects →
                </a>
              </li>
            </ul>
          </div>

          {/* Blogs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog/vision" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Our Vision & Mission
                </a>
              </li>
              <li>
                <a href="/blog/ai-future" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Future of AI
                </a>
              </li>
              <li>
                <a href="/blog/research-insights" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Research Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Turi Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;