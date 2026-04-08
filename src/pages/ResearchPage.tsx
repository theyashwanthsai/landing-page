import React from 'react';
import { ResearchGrid } from '../components/ResearchGrid';

export function ResearchPage() {
  return (
    <div className="min-h-screen text-primary relative mt-10">
      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Work</h1>
        <p className="text-lg text-secondary mb-12">
          We pursue ideas driven by curiosity rather than profit. Our work spans Multi-Agent Systems,
          Language Model Benchmarking, Reinforcement Learning, and Genetic Algorithms.
        </p>

        <ResearchGrid />
      </div>
    </div>
  );
}
