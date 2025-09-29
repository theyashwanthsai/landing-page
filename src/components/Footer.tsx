import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, BookOpen, Newspaper } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-16 sm:mt-24 backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            <img src="/images/favicon.png" className="w-10 h-10 feature-icon" alt="TuriLabs Logo" />
            <span className="font-bold text-primary">TuriLabs</span>
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
        <div className="mt-8 text-center text-muted">
          © 2025  TuriLabs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
