import React, { useState } from 'react';
import { Brain, Atom, Globe2, Users, ChevronRight, Github, Twitter, BookOpen, Newspaper, Mail, Menu, X } from 'lucide-react';
import { ResearchGrid } from './ResearchGrid';
import { FoundersSection } from './FoundersSection';
import { Link } from 'react-router-dom';
import { PricingSection } from './PricingSection';


export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white">
      {/* <div className="absolute inset-0  pointer-events-none"></div> */}
      <div className="relative">
        <header className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Building the weird and wonderful of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-[gradientMove_3s_linear_infinite]"> AI</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Indie AI Research Lab dedicated to build weird, wonderful, and sometimes outright crazy things. We're driven by curiosity and a desire to explore the next generation of intelligent systems that can learn, adapt, and evolve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/research" className="btn-primary">
                  View Our Experiments <ChevronRight className="w-4 h-4" />
                </Link>
                <Link to="/product" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg filter blur-3xl"></div>
              <img
                // src="https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?auto=format&fit=crop&q=80"
                src="/images/game_of_life_smaller.gif"
                alt="AI Visualization"
                className="relative rounded-3xl shadow-2xl w-3/4 mx-auto hero-image hover:scale-105 hover:-translate-y-2 transition-all duration-500"
              />
            </div>
          </div>
        </header>

        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Atom, title: "AI Agents", desc: "Crafting autonomous systems with unpredictable (and hopefully useful) behaviors.", color: "blue" },
              { icon: Globe2, title: "SLM Benchmarks", desc: "Pitting small language models against bizarre and challenging benchmarks.", color: "purple" },
              { icon: Users, title: "Generative AI", desc: "Twisting AI to create content you didn't know you needed (or wanted).", color: "green" }
            ].map((feature, i) => (
              <div key={i} className="glass-card p-8 group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10">
                <feature.icon className={`w-12 h-12 text-${feature.color}-500 mb-4 feature-icon`} />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>


        
        {/* <FoundersSection /> */}
        
        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link 
          to="/newsletter" 
          onClick={() => window.scrollTo(0, 0)}
        >  
        <div className="glass-card p-6 sm:p-12 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20">
            <div className="max-w-2xl mx-auto text-center">
              <Mail className="w-12 sm:w-16 h-12 sm:h-16 text-blue-400 mx-auto mb-6 feature-icon" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Official TuriLabs Newsletter</h2>
              <p className="text-gray-300 mb-8">We wanted to stay updated with AI advancements, so we delegated this task to a team of AI Agents. Click here to learn more.</p> 
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            </div>
            </div>
          </div>
          </Link>
        </section>
      </div>
    </div>
  );
}
