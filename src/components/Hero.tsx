import React from 'react';
import { motion } from 'framer-motion';
import ThreeScene from './three/ThreeScene';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center overflow-hidden">
      <ThreeScene />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/20 to-black pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center py-4 sm:py-5 px-4 sm:px-8 rounded-xl backdrop-blur-[2px] bg-gradient-to-br from-black/60 via-purple-900/20 to-black/60 border-t border-l border-purple-500/15 border-r border-b border-white/5 shadow-[0_4px_20px_rgba(123,58,180,0.2)] max-w-3xl mx-auto"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Turi Labs
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-5 sm:mb-6 max-w-2xl mx-auto drop-shadow-[0_0_2px_rgba(255,255,255,0.3)] px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            An indie AI research lab fueled by curiosity and a relentless drive to build weird, wonderful, and sometimes outright crazy things.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link
              to="/experiments"
              className="group px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-md hover:from-purple-700 hover:to-purple-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              <span>See Our Experiments</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;