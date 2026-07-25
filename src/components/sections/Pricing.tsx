import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionFrame } from '../ui/SectionFrame';
import { ArrowUpRight, Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [plan, setPlan] = useState<'standard' | 'premium'>('standard');

  const planDetails = {
    standard: {
      title: 'Standard Plan',
      price: '$25',
      unit: '/ hour',
      description: 'Ideal for frontend React/Tailwind applications, landing pages, and API integrations.',
      features: [
        'Responsive React.js / Next.js Development',
        'Tailwind CSS Styling & Clean UI Components',
        'REST API & Third-Party Integration',
        'Git & GitHub Version Control Collaboration',
        'QA Testing & Responsive Bug Fixes Included',
      ],
    },
    premium: {
      title: 'Premium Plan',
      price: '$45',
      unit: '/ hour',
      description: 'Complete full-stack MERN applications, custom AI API integrations, MongoDB database modeling, and JWT authentication.',
      features: [
        'End-to-End MERN Application Architecture',
        'Node.js & Express RESTful Server APIs',
        'MongoDB Database Schema & Indexing',
        'JWT Auth, Role-Based Access & Security',
        'Groq AI / OpenAI API Smart Integration',
      ],
    },
  };

  const currentPlan = planDetails[plan];

  return (
    <SectionFrame id="pricing">
      <div className="w-full flex flex-col gap-10">
        
        {/* Section Title & Segmented Toggle */}
        <div className="text-center space-y-4 flex flex-col items-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 font-rajdhani text-xs font-semibold tracking-wider text-white/70 uppercase">
            Investment
          </span>
          <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-normal text-white">
            My Pricing
          </h2>

          {/* Segmented Control Pill Track */}
          <div role="tablist" className="p-1.5 rounded-full bg-[#141414] border border-white/10 flex items-center gap-1">
            <button
              role="tab"
              aria-selected={plan === 'standard'}
              onClick={() => setPlan('standard')}
              className={`px-6 py-2 rounded-full font-rajdhani text-sm sm:text-base font-semibold transition-all duration-200 ${
                plan === 'standard' 
                  ? 'bg-white text-black shadow-md' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Standard
            </button>
            <button
              role="tab"
              aria-selected={plan === 'premium'}
              onClick={() => setPlan('premium')}
              className={`px-6 py-2 rounded-full font-rajdhani text-sm sm:text-base font-semibold transition-all duration-200 ${
                plan === 'premium' 
                  ? 'bg-white text-black shadow-md' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Premium
            </button>
          </div>
        </div>

        {/* Pricing Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={plan}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full p-6 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 card-inset-glow flex flex-col gap-8"
          >
            {/* Inner Price Gradient Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-neutral-900 via-[#4A0012]/30 to-[#6D001A]/40 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="font-mono-plex text-xs text-[#C2184B] uppercase tracking-wider">
                  {currentPlan.title}
                </span>
                <p className="font-rajdhani text-sm sm:text-base text-white/70 mt-1 max-w-md">
                  {currentPlan.description}
                </p>
              </div>

              <div className="shrink-0 flex items-baseline gap-1">
                <span className="font-rajdhani text-5xl sm:text-6xl font-semibold text-white">
                  {currentPlan.price}
                </span>
                <span className="font-rajdhani text-lg text-white/60">
                  {currentPlan.unit}
                </span>
              </div>
            </div>

            {/* Feature Bullet Points */}
            <ul className="space-y-3 font-rajdhani text-base text-white/80">
              {currentPlan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#6D001A]/30 text-[#C2184B] flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Action Button */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-between gap-4 pl-6 pr-2 py-3 rounded-full bg-white text-black font-rajdhani font-semibold text-base hover:bg-white/90 transition-all shadow-xl group"
            >
              <span>Start a Project</span>
              <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Custom Quote Footer Row */}
        <a
          href="#contact"
          className="p-6 rounded-2xl bg-[#141414] border border-white/10 card-inset-glow flex items-center justify-between gap-4 hover:border-white/20 transition-colors group cursor-pointer"
        >
          <div>
            <h4 className="font-rajdhani text-xl font-medium text-white group-hover:text-[#A3123B] transition-colors">
              Need a Custom Enterprise Scope?
            </h4>
            <p className="font-rajdhani text-sm text-white/60">
              Get a tailored project proposal for large scale applications and ongoing retainer partnerships.
            </p>
          </div>

          <div className="shrink-0 w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white group-hover:border-[#8A0D2E] group-hover:bg-[#6D001A] transition-colors">
            <ArrowUpRight size={18} />
          </div>
        </a>

      </div>
    </SectionFrame>
  );
};
