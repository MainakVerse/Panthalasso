"use client";
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What is Panthalasso?",
    answer: "Panthalasso is an AI-driven website and online business elevation service for product based, consultancies and other small or large scale companies."
  },
  {
    question: "How do I get started?",
    answer: "Simply book a slot for your demo or chat with dino to get an idea of the deliverables!"
  },
  {
    question: "What features are included?",
    answer: "Our platform includes AI-powered responses, custom prompts, web data handling, analytics, and seamless integration. Features vary by plan."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes! We provide comprehensive customer support through email, chat, and documentation. Premium plans include priority support."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle."
  }
];

const generateRandomGradient = () => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const size = 50 + Math.random() * 100; // Reduced size for more subtle effect
  const opacity = 0.05 + Math.random() * 0.1; // Much lower opacity
  
  return `radial-gradient(circle ${size}px at ${x}% ${y}%, rgba(59, 130, 246, ${opacity}) 0%, transparent 100%)`;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const cardGradients = useMemo(() => {
    return faqs.map(() => {
      const baseGradient = 'linear-gradient(to bottom, rgba(30, 58, 138, 0.1), rgba(30, 58, 138, 0.05))';
      const numGradients = 2 + Math.floor(Math.random() * 2); // 2-3 gradients
      const overlayGradients = Array(numGradients).fill(0).map(generateRandomGradient);
      return [baseGradient, ...overlayGradients].join(', ');
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 py-8">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-blue-200/80">
            Everything you need to know about Panthalasso
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-blue-500/20 backdrop-blur-sm overflow-hidden transition-all duration-300"
              style={{
                background: cardGradients[index]
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left group-hover:bg-blue-500/5 transition-colors duration-300"
              >
                <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/10 group-hover:bg-blue-500/20"
                >
                  <span className="text-blue-400">↓</span>
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "linear"
                }}
                className="overflow-hidden bg-gradient-to-b from-transparent to-blue-950/20"
              >
                <div className="px-6 pb-4 pt-2">
                  <p className="text-blue-200/80">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-20" />
      <div className="absolute -right-32 -top-32 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-20" />
    </section>
  );
}