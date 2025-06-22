import React from 'react';
import { Terminal, ChevronLeft, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevenueChart from '../components/RevenueChart';
import Stats from '../components/Stats';

export function RevenuePage() {
  return (
    <div className="min-h-screen text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 pointer-events-none"></div>
      
      <div className="relative">
        <header className="container mx-auto px-4 sm:px-6 py-8">
          <nav className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Brain className="w-8 h-8 text-blue-500 feature-icon" />
              <span className="text-xl font-bold">Turi Labs</span>
            </Link>

          </nav>

          <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 mb-8">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Revenue Dashboard</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Track our financial performance and growth metrics in real-time (Todo using agents). 
            This dashboard provides insights into our revenue, client base, and overall business health.
          </p>
        </header>

        <main className="container mx-auto px-4 sm:px-6 py-16">
          {/* Stats Cards */}
          <div className="mb-12">
            <Stats />
          </div>

          {/* Revenue Chart */}
          <div className="glass-card">
            <RevenueChart />
          </div>
        </main>
      </div>
    </div>
  );
}

export default RevenuePage;
