import React from 'react';
import { BlogsSection } from '../components/BlogsSection';

export function BlogsPage() {
  return (
    <div className="min-h-screen text-primary relative mt-10">
      <div className="absolute inset-0 pointer-events-none"></div>
      
      <div className="relative">
        {/* <div className="container mx-auto px-4 sm:px-6 py-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto text-center">
            Welcome to our blog where we share insights, research findings, and thoughts on the future of AI. 
            Dive deep into our experiments, learn from our discoveries, and join us on this journey of exploration.
            <br />
            <br />
            From technical deep-dives to philosophical musings about artificial intelligence, 
            we cover everything that fascinates us about the world of AI research and development.
          </p>
        </div> */}

        <main className="container mx-auto px-4 sm:px-6">
          <BlogsSection />
        </main>
      </div>
    </div>
  );
}
