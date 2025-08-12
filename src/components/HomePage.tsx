import React, { useState } from 'react';
import { Brain, Atom, Globe2, Users, ChevronRight, Github, Twitter, BookOpen, Newspaper, Mail, Menu, X, Sparkles, Gamepad2 } from 'lucide-react';
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-400 bg-[length:200%_auto] animate-[gradientMove_3s_linear_infinite]"> AI</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Turilabs is a lean, indie AI research lab dedicated to build weird, wonderful, and sometimes outright crazy things. 
                We're driven by raw curiosity to explore the next generation of intelligent systems that can learn, adapt, and evolve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/research" className="btn-primary text-black font-semibold text-lg">
                  View Our Experiments <ChevronRight className="w-4 h-4" />
                </Link>
                <Link to="/product" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg filter blur-3xl"></div>
              <div className="text-center">
                <img
                  // src="https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?auto=format&fit=crop&q=80"
                  src="/images/game_of_life_smaller.gif"
                  alt="Conway's Game of Life Simulation"
                  className="relative rounded-3xl shadow-2xl w-3/4 mx-auto hero-image hover:scale-105 hover:-translate-y-2 transition-all duration-500"
                />
                <p className="mt-4 text-white text-sm font-mono tracking-wide">Conway's Game of Life: A classic example of emergent behavior</p>
              </div>
            </div>
          </div>
        </header>

        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our North Star</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
            We believe the future of intelligence won't come from scaling bigger models. It will come from smaller systems that learn, reason, and evolve.
            We exist to explore the frontier of agentic AI, self-learning neural systems, and simulation-based evaluation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "AI Agents", desc: "Building frameworks, runtimes, and infrastructures that power reasoning agents.", color: "blue" },
              { icon: Sparkles, title: "Self-Learning Systems", desc: "From neuroevolution to RL, we explore models that learn by doing.", color: "purple" },
              { icon: Gamepad2, title: "Simulated Worlds", desc: "Environments where we evaluate decision-making, emergence, and reasoning.", color: "green" }
            ].map((feature, i) => (
              <div key={i} className="glass-card p-8 group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10">
                <feature.icon className={`w-12 h-12 text-${feature.color}-500 mb-4 feature-icon`} />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why We're Indie</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We're not bound by publication cycles or corporate roadmaps. At TuriLabs, we build what we're curious about and ship what works. 
              This is a home for hackers, thinkers, and experimentalists who want to push the boundaries of AI.
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto mt-6 italic">
              We're building the kind of research lab we wish existed!
            </p>
            {/* <h3 className="text-2xl font-semibold mb-8 text-center">Our Manifesto</h3> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto text-sm">
              <div className="glass-card p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10">
                <span className="text-2xl">🤔</span>
                <p className="text-gray-300 text-center">Identify interesting problems in AI reasoning and learning</p>
              </div>
              <div className="glass-card p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10">
                <span className="text-2xl">🔬</span>
                <p className="text-gray-300 text-center">Run controlled experiments to test hypotheses</p>
              </div>
              <div className="glass-card p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10">
                <span className="text-2xl">📊</span>
                <p className="text-gray-300 text-center">Generate reproducible results and benchmarks</p>
              </div>
              <div className="glass-card p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10">
                <span className="text-2xl">✍️</span>
                <p className="text-gray-300 text-center">Document findings in papers and blog posts</p>
              </div>
            </div>
          </div>
        </section>
        

      </div>
    </div>
  );
}
