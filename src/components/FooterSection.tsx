import React from 'react';
import { Brain, Github, Twitter, BookOpen, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (

      <div className="relative">

    <footer className="mt-16 sm:mt-24 glass-card">
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Link to="/" className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-blue-500 feature-icon" />
                <span className="font-bold text-white">Turi Labs</span>
              </Link>
          <div className="flex gap-6">
            {[
              { icon: Github, link: "https://github.com/Turi-Labs" },
              { icon: Twitter, link: "https://x.com/TuriLabs" },
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
          © 2024 Turi Labs. All rights reserved.
        </div>
      </div>
    </footer>

    </div>
  );
}
