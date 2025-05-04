import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Twitter } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const team = [
    { name: "Sai Yashwanth", link: "https://saiyashwanth.tech" },
    { name: "Mayank Kashyap", link: "https://www.linkedin.com/in/mayank-kashyap-402065232/" },
    { name: "Chidu", link: "https://www.linkedin.com/in/siddharth-prakash-771596241/" },
    { name: "Vijayanth", link: "https://www.linkedin.com/in/vijayant-raj-singh-raghav/" },
    { name: "Supratik", link: "https://www.linkedin.com/in/supratik-kar-99a99522b/" }
  ];

  return (
    <section className="py-24 bg-black relative min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-400">
              About Us
            </h2>
            <p className="text-gray-300 text-lg">
              We are a dedicated team of AI enthusiasts focused on exploring and building weird
              and crazy experimental projects. Our passion lies in pushing the boundaries of
              what's possible and what's not with AI. We also share our journey along the way, by
              documenting heavily.
            </p>
            <p className="text-gray-300 text-lg">
              We are currently building 🛠️ exciting projects at the intersection of AI and
              practical applications. Check our <a href="/experiments" className="text-purple-400 hover:text-purple-300">Experiments</a>!
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {team.map((member, index) => (
                <a
                  key={index}
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-purple-900/30 hover:border-purple-600/50 transition-colors block"
                >
                  <div className="text-lg text-white hover:text-purple-400 transition-colors">
                    {member.name}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Get in Touch</h2>
            <p className="text-gray-300">We'd love to hear from you! Connect with us:</p>
            
            <div className="space-y-4">
              <a 
                href="mailto:taddishetty34@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>taddishetty34@gmail.com</span>
              </a>
              
              <a 
                href="#"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>Follow our latest updates and thoughts</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;