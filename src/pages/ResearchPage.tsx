import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronLeft } from 'lucide-react';
import { ResearchGrid } from '../components/ResearchGrid';

export function ResearchPage() {
  return (
    <div className="min-h-screen text-primary relative mt-10">
      <div className="absolute inset-0  pointer-events-none"></div>
      
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 py-8 text-center">

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto text-left">
            We pursue innovative ideas driven by curiosity rather than profit. Our projects are documented through various mediums including:
            <ul className="list-disc list-inside my-4 text-left">
              <li>Research papers for academic contributions</li>
              <li>Blog posts for detailed explanations</li>
              <li>Demo videos for practical demonstrations</li>
            </ul>
            Our work primarily focuses around Multi-Agent Systems, Language Model Benchmarking, Reinforcement Learning, and Genetic Algorithms, and more.
          </p>
        </div>

        <main className="container mx-auto px-4 sm:px-6 py-16">
          <ResearchGrid />
        </main>
      </div>
    </div>
  );
}
