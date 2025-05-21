import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const Experiments: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const experiments = [
    { name: "LLM Pokemon League", link: "#" },
    { name: "MREB", link: "#" },
    { name: "Devyan", link: "#" },
    { name: "Yantrakarma", link: "#" },
    { name: "Yaaf", link: "#" },
    { name: "Research Copilot", link: "#" },
    { name: "Ambient Newsletter Agent", link: "#" },
    { name: "AI Pet", link: "#" },
  ];

  return (
    <section id="experiments" className="py-24 bg-black relative">
      {/* Particle effect background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ top: '20%', left: '10%' }}></div>
          <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ top: '30%', left: '80%' }}></div>
          <div className="absolute w-1 h-1 bg-indigo-500 rounded-full animate-pulse" style={{ top: '70%', left: '25%' }}></div>
          <div className="absolute w-1 h-1 bg-pink-500 rounded-full animate-pulse" style={{ top: '50%', left: '60%' }}></div>
          <div className="absolute w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ top: '80%', left: '90%' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-400">
              Experiments (Still a work in progress)
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We're a small team passionate about building experimental projects in applied AI.
              Here are some of our ongoing projects.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {experiments.map((experiment, index) => (
              <motion.a
                key={index}
                href={experiment.link}
                variants={itemVariants}
                className="group bg-gradient-to-br from-gray-900/80 to-purple-950/40 backdrop-blur-sm p-6 rounded-lg border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-between"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(139, 92, 246, 0.2)" 
                }}
              >
                <h3 className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">
                  {experiment.name}
                </h3>
                <ExternalLink size={18} className="text-gray-500 group-hover:text-purple-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <a 
              href="https://github.com/turi-labs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>View on GitHub</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiments;