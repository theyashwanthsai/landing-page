import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Sparkles, Brain, Cpu } from 'lucide-react';

const ResearchAreas: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Add Brevo styles to head
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @font-face {
        font-display: block;
        font-family: Roboto;
        src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
      }
      @font-face {
        font-display: fallback;
        font-family: Roboto;
        font-weight: 600;
        src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
      }
      .input--hidden {
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;
        z-index: -1;
      }
    `;
    document.head.appendChild(styleElement);

    // Load Brevo script
    const script = document.createElement('script');
    script.src = 'https://sibforms.com/forms/end-form/build/main.js';
    script.defer = true;
    document.body.appendChild(script);

    // Set up required global variables for Brevo
    window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
    window.LOCALE = 'en';
    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
    window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";
    window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
    window.translation = {
      common: {
        selectedList: '{quantity} list selected',
        selectedLists: '{quantity} lists selected',
        selectedOption: '{quantity} selected',
        selectedOptions: '{quantity} selected',
      }
    };
    window.AUTOHIDE = Boolean(0);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(styleElement);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    const formData = new FormData(formRef.current);
    
    try {
      const response = await fetch(formRef.current.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const errorMessage = document.getElementById('error-message');
      const successMessage = document.getElementById('success-message');
      
      if (response.ok) {
        if (errorMessage) errorMessage.style.display = 'none';
        if (successMessage) successMessage.style.display = 'block';
        formRef.current.reset();
      } else {
        if (successMessage) successMessage.style.display = 'none';
        if (errorMessage) errorMessage.style.display = 'block';
      }
    } catch (error) {
      const errorMessage = document.getElementById('error-message');
      const successMessage = document.getElementById('success-message');
      
      if (successMessage) successMessage.style.display = 'none';
      if (errorMessage) errorMessage.style.display = 'block';
    }
  };

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

  const researchAreas = [
    {
      title: "AI Agents",
      icon: <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />,
      description: "Crafting autonomous systems with unpredictable (and hopefully useful) behaviors."
    },
    {
      title: "Generative Experiments",
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
      description: "Twisting AI to create content you didn't know you needed (or wanted)."
    },
    {
      title: "Foundational Models",
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" />,
      description: "Playing with the building blocks of AI, sometimes breaking the rules."
    },
    {
      title: "SLM Benchmarks",
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />,
      description: "Pitting small language models against bizarre and challenging benchmarks."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-black to-purple-950/20 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12 sm:space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-100 to-pink-300">
              Areas of Exploration
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-2">
              Our research spans multiple disciplines within AI, focusing on exploring unconventional applications.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-2"
          >
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900/30 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" 
                }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-purple-900/30 shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{area.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400">{area.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 sm:mt-16 border-t border-gray-800 pt-8 sm:pt-10"
          >
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Stay Connected</h3>
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
                Join our newsletter to stay updated on our latest research, blog posts, and breakthroughs. 
                We share our journey, insights, and discoveries as we navigate the ever-evolving landscape of AI.
              </p>
              
              {/* Brevo Form Integration */}
              <div className="max-w-md mx-auto px-2">
                <div className="sib-form">
                  <div id="sib-form-container" className="sib-form-container">
                    <div id="success-message" className="sib-form-message-panel" style={{
                      fontSize: "16px",
                      textAlign: "center",
                      fontFamily: "Helvetica, sans-serif",
                      color: "#FF0000",
                      padding: "15px",
                      margin: "10px 0",
                      maxWidth: "540px",
                      display: "none",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                    }}>
                      <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                        <span className="sib-form-message-panel__inner-text">
                          Your subscription could not be saved. Please try again.
                        </span>
                      </div>
                    </div>
                    <div id="error-message" className="sib-form-message-panel" style={{
                      fontSize: "16px",
                      textAlign: "center",
                      fontFamily: "'Inter', sans-serif",
                      color: "#34d77c",
                      padding: "16px",
                      margin: "16px auto",
                      maxWidth: "540px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                      display: "none"
                    }}>
                      <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                        <span className="sib-form-message-panel__inner-text">
                          Thank you for subscribing!
                        </span>
                      </div>
                    </div>
                    <div id="sib-container" className="sib-container--large sib-container--vertical" style={{textAlign:"center", backgroundColor:"transparent", maxWidth:"540px", borderRadius:"5px", borderWidth:"0px", direction:"ltr"}}>
                      <form 
                        id="sib-form" 
                        ref={formRef}
                        onSubmit={handleSubmit}
                        method="POST" 
                        action="https://sibforms.com/serve/MUIFAFl1qpQtAaD49AhtKnQvynH1YCriCHQQQINVyoEkPdTRS-9JXcHrQM6abG5sFMTTX1EyNZTJRYO3cZg42FR6-Xp6nh3_9DpxgXAj0mPfW5YM5yUmhSN7Eh0FeGsYjdvpxqvWYq8xx_qHcvd4vcdu0wApbqBGqkDolKYDRV7ymjKDX5fHV2mSor8_v7Exk8TzX6nXmXbijqYT" 
                        data-type="subscription"
                      >
                        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-y-3 sm:gap-y-0 sm:gap-x-4">
                          <input
                            className="flex-1 rounded-lg bg-gray-800 px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            id="EMAIL"
                            name="EMAIL"
                            autoComplete="off"
                            placeholder="Enter your email"
                            data-required="true"
                            required
                          />
                          <button 
                            className="rounded-lg bg-purple-600 px-6 py-2 text-white hover:bg-purple-700 transition-colors"
                            type="submit"
                          >
                            Subscribe
                          </button>
                        </div>
                        <input type="text" name="email_address_check" value="" className="input--hidden" />
                        <input type="hidden" name="locale" value="en" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>          
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchAreas;