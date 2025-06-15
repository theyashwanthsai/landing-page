import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle } from 'lucide-react';
import { newsletters } from '../data/newsletter'
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const formRef = useRef(null);

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
      if (script.parentNode) document.body.removeChild(script);
      if (styleElement.parentNode) document.head.removeChild(styleElement);
    };
  }, []);

  const handleSubmit = async (e) => {
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
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
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

  return (
    <section id="newsletter" className="py-24 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-purple-900/30"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white">
              Stay Connected
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Track AI breakthroughs and keep up with the acceleration. 
              Daily Bullet Points, 2 min read.
            </p>
          </div>

          {/* Brevo Form Integration */}
          <div className="max-w-md mx-auto">
            <div className="sib-form">
              <div id="sib-form-container" className="sib-form-container">
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
                    <span className="sib-form-message-panel__inner-text" style={{
                      fontWeight: "500",
                      lineHeight: "1.5"
                    }}>
                      Thank you for subscribing!
                    </span>
                  </div>
                </div>
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
                  <div className="sib-form-message-panel__text">
                    <span className="sib-form-message-panel__inner-text" style={{
                      fontWeight: "500"
                    }}>
                      Your subscription could not be saved. Please try again.
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
                    <div className="relative">
                      <input
                        className="w-full px-4 py-3 bg-gray-800/70 text-white rounded-lg border border-purple-900/40 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                        type="email"
                        id="EMAIL"
                        name="EMAIL"
                        autoComplete="off"
                        placeholder="Enter your email address"
                        data-required="true"
                        required
                      />
                      <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-purple-600 text-white p-2 rounded-md hover:from-purple-700 hover:to-purple-700 transition-all duration-300"
                      >
                        {isSubmitted ? (
                          <CheckCircle size={20} />
                        ) : (
                          <Send size={20} />
                        )}
                      </button>
                    </div>
                    <input type="text" name="email_address_check" value="" className="input--hidden" />
                    <input type="hidden" name="locale" value="en" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Recent Posts</h3>
            <div className="space-y-4">
              {newsletters.map((post) => (
                
                <motion.a
                  key={post.id}
                  href={`/newsletters/${post.slug}`}
                  className="block p-4 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      {/* <span className="text-purple-400">{post.date}</span> */}
                      <h4 className="text-white mt-1">{post.title}</h4>
                    </div>
                    <span className="text-gray-400 text-sm">Read →</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;