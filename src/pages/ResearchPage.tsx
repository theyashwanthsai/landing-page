import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronLeft } from 'lucide-react';
import { ResearchGrid } from '../components/ResearchGrid';

export function ResearchPage() {
  return (
    <div className="min-h-screen text-white relative mt-20">
      <div className="absolute inset-0  pointer-events-none"></div>
      
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 py-8 text-center">

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Experiments (Work in Progress)</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Some of our research experiments. We are building ideas which might not be profitable, but are worth exploring. We focus (not limited to) on AI Agents, Benchmarks, RL, etc. 
          </p>
        </div>

        <main className="container mx-auto px-4 sm:px-6 py-16">
          <ResearchGrid />
        </main>
      </div>
    </div>
  );
}
