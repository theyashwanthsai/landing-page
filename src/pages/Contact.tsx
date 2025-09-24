import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronLeft, Cpu, Twitter, Shield, Code, Github } from 'lucide-react';

const products = [

  {
    icon: Twitter,
    name: "Tactical Twitter",
    description: "An AI Agent which tweets everything about football.",
    features: ["Twitter account managed by an AI Agent", "Fully Automated", "Footbal Tweets"],
    image: "/images/tactictwitter.jpeg"
  }
];

export function ContactPage() {
  return (
    <div className="min-h-screen text-primary relative mt-10">
      <div className="absolute inset-0 pointer-events-none"></div>
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 py-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Want to connect, collaborate, or just say hi? Reach out to us via email, socials, or book a call below.
          </p>
        </div>
        <main className="container mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-2xl mx-auto glass-card p-8 flex flex-col items-center">
            <div className="mb-8 text-center">
              <div className="text-lg text-muted mb-2">Email us at</div>
              <a
                href="mailto:hello@turilabs.ai"
                className="link-primary text-xl font-medium"
              >
                taddishetty34@gmail.com
              </a>
            </div>
            <div className="mb-8 text-center">
              <div className="text-lg text-muted mb-2">Find us on</div>
              <div className="flex justify-center gap-8">
                <a
                  href="https://x.com/turilabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Twitter"
                >
                  <Twitter className="w-8 h-8" />
                </a>
                <a
                  href="https://github.com/turi-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <Github className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="mb-4 text-center">
              <div className="text-lg text-muted mb-2">Book a call with us</div>
              <a
                href="https://cal.com/sai-yashwanth/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-primary px-6 py-3 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200"
              >
                Schedule on Cal.com
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
