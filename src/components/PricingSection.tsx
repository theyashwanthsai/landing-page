import { Check } from 'lucide-react';

const plan = {
  name: "Custom AI Automation Solution",
  price: "Custom Quote",
  description: "Tailored AI automation solutions designed specifically for your business needs ",
  features: [
    "Custom AI Automations and Agents built for your specific use case",
    "Personalized workflow automation",
    "Integration with your existing tools & systems",
    "Dedicated development & support team",
    "Custom training & implementation plan",
    "ROI-focused performance analytics",
    "Starting from $799"
  ],
  cta: "Schedule a Free Consultation",
  link: "https://cal.com/sai-yashwanth/consultation",
  process: [
    "1. Discovery Call - Understanding your needs",
    "2. Custom Solution Design",
    "3. Proposal & Quote",
    "4. Development & Implementation",
    "5. Training & Optimization"
  ]
};

export function PricingSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pricing Plans</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We work with a limited number of clients to ensure the highest quality of service and attention to detail.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="max-w-2xl w-full">
          <a 
            href="https://cal.com/sai-yashwanth/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="glass-card p-8 relative transition-all duration-300 hover:scale-105">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-blue-400">
                  Custom AI Automation Solution
                </h3>
                <p className="text-gray-400 mb-6">
                  Tailored AI automation solutions designed specifically for your business needs
                </p>
                <div className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-lg font-semibold">
                  Custom Quote
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-700 pt-6 mt-8">
                <h4 className="text-lg font-semibold mb-4 text-center">Our Process</h4>
                <div className="space-y-3">
                  {plan.process.map((step, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors duration-300 font-semibold">
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
