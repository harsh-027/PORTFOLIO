import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionFrame } from '../ui/SectionFrame';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQData {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQData[] = [
  {
    id: 'progress',
    question: "What’s Harshit's project process & workflow tracking like?",
    answer: "Every project gets clear milestone updates, GitHub commits, and asynchronous progress check-ins. I share interactive staging links, API documentation, and daily updates.",
  },
  {
    id: 'delivery',
    question: 'Project delivery time estimate?',
    answer: 'Frontend React web apps are delivered within 1 to 2 weeks. Comprehensive full-stack MERN & AI applications take approximately 2 to 4 weeks depending on database and API scope.',
  },
  {
    id: 'services',
    question: 'What core technologies does Harshit specialize in?',
    answer: 'I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, TypeScript, Tailwind CSS, REST APIs, JWT authentication, and AI integrations (Groq AI API).',
  },
  {
    id: 'iterations',
    question: 'How do you handle revisions and testing?',
    answer: 'I perform rigorous cross-browser debugging, component testing, and Postman API endpoint verification throughout the development cycle to ensure zero breaking bugs upon launch.',
  },
  {
    id: 'contact-method',
    question: 'How can I get in touch for projects or full-time roles?',
    answer: 'You can reach out directly via email at harshit.work009@gmail.com, message me on LinkedIn, or fill out the contact form below.',
  },
];

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['progress']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <SectionFrame id="faq">
      <div className="w-full flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 font-rajdhani text-xs font-semibold tracking-wider text-white/70 uppercase">
            Questions
          </span>
          <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-normal text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="w-full divide-y divide-white/10 border-t border-b border-white/10">
          {faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div key={faq.id} className="py-5 sm:py-6">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left font-rajdhani text-xl sm:text-2xl font-medium text-white hover:text-[#A3123B] transition-colors group focus:outline-none"
                >
                  <span>{faq.question}</span>

                  <div className={`shrink-0 w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center transition-transform duration-200 ${
                    isOpen ? 'bg-[#6D001A]/30 text-[#C2184B] border-[#6D001A]/60 rotate-180' : 'text-white/70 group-hover:text-white'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-3 pr-12"
                    >
                      <p className="font-rajdhani text-base sm:text-lg text-white/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact Prompt Footer */}
        <div className="text-center font-rajdhani text-sm sm:text-base text-white/60 flex items-center justify-center gap-2">
          <HelpCircle size={16} className="text-[#C2184B]" />
          <span>Have a custom question not answered here?</span>
          <a href="#contact" className="text-white font-semibold underline underline-offset-4 hover:text-[#A3123B] transition-colors">
            Ask me directly
          </a>
        </div>

      </div>
    </SectionFrame>
  );
};
