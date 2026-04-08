import React from 'react';
import { Brain, ChevronRight, Sparkles, Gamepad2 } from 'lucide-react';
import { ResearchGrid } from './ResearchGrid';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="min-h-screen text-primary">
      <div className="relative">

        {/* Hero */}
        <header className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Building the weird and wonderful of
                <span className="bg-gradient-text-ai"> AI</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary max-w-2xl mx-auto lg:mx-0">
                A lean, indie research lab driven by raw curiosity. We explore the next generation
                of intelligent systems — agents, self-learning models, and simulated environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/research" className="btn-primary font-semibold text-lg">
                  View Research <ChevronRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-blue-purple rounded-lg filter blur-3xl"></div>
              <div className="text-center">
                <img
                  src="/images/game_of_life_smaller.gif"
                  alt="Conway's Game of Life Simulation"
                  className="relative rounded-3xl shadow-2xl w-3/4 mx-auto hero-image hover:scale-105 hover:-translate-y-2 transition-all duration-500"
                />
                <p className="mt-4 text-secondary text-xs font-mono tracking-wide">
                  Conway's Game of Life — emergent complexity from simple rules
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Focus areas */}
        <section className="container mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our North Star</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              The future of intelligence won't come from scaling bigger models. It will come from
              smaller systems that learn, reason, and evolve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Brain, title: "AI Agents", desc: "Frameworks, runtimes, and infrastructure that power reasoning agents.", color: "blue" },
              { icon: Sparkles, title: "Self-Learning Systems", desc: "From neuroevolution to RL — models that learn by doing.", color: "purple" },
              { icon: Gamepad2, title: "Simulated Worlds", desc: "Environments for evaluating decision-making, emergence, and reasoning.", color: "green" }
            ].map((feature, i) => (
              <div key={i} className="glass-card p-7 group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10">
                <feature.icon className={`w-10 h-10 text-${feature.color}-500 mb-4 feature-icon`} />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-secondary text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section className="container mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why We're Indie</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Not bound by publication cycles or corporate roadmaps. We run on 80% exploration, 20% exploitation —
                a home for hackers, thinkers, and experimentalists.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {[
                { step: "01", title: "Brainstorm", desc: "Find interesting problems in AI reasoning and learning" },
                { step: "02", title: "Experiment", desc: "Run controlled experiments to test hypotheses" },
                { step: "03", title: "Implement", desc: "Build reproducible results and benchmarks" },
                { step: "04", title: "Document", desc: "Publish findings as papers and blog posts" },
              ].map((item) => (
                <div key={item.step} className="glass-card p-5 flex flex-col gap-2">
                  <span className="text-xs font-mono text-blue-400">{item.step}</span>
                  <span className="font-semibold">{item.title}</span>
                  <p className="text-secondary text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest research */}
        <section className="container mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold">Latest Research</h2>
              <Link to="/research" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                View all →
              </Link>
            </div>
            <ResearchGrid limit={3} />
          </div>
        </section>

      </div>
    </div>
  );
}
