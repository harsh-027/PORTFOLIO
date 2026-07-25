import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionFrame } from '../ui/SectionFrame';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Harshit is an exceptionally skilled full-stack developer. His attention to detail, MERN stack proficiency, and speed of feature delivery elevated our entire platform.',
    name: 'Sheik Asif',
    role: 'Tech Lead & Founder',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    quote: 'Working with Harshit on SkillFlow was seamless. He integrated AI recommendations and full-stack backend services with immaculate responsiveness.',
    name: 'Aarav Mehta',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    quote: 'Harshit brings a rare combination of clean frontend UI crafting and solid Node/Express backend logic. I highly recommend him for full-stack projects.',
    name: 'Rohan Sharma',
    role: 'Engineering Lead',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80',
  },
];

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <SectionFrame id="testimonial">
      <div className="w-full flex flex-col gap-6">
        
        {/* Main Testimonial Card */}
        <div className="relative w-full p-6 sm:p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#141414] via-[#1a1a1a] to-[#6D001A]/40 border border-white/10 card-inset-glow overflow-hidden min-h-[420px] flex flex-col justify-between">
          
          {/* Top Row: Eyebrow + Controls */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 z-10">
            <span className="font-rajdhani text-xs sm:text-sm font-semibold tracking-wider text-[#C2184B] uppercase flex items-center gap-2">
              <Quote size={16} />
              <span>Testimonials</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Testimonial Quote Content with AnimatePresence */}
          <div className="my-6 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
              >
                {/* Quote Text */}
                <div className="flex-1 space-y-4">
                  <p className="font-rajdhani text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-white">
                    "{current.quote}"
                  </p>
                  <div>
                    <h4 className="font-rajdhani text-xl font-semibold text-white">
                      {current.name}
                    </h4>
                    <p className="font-rajdhani text-sm text-white/60">
                      {current.role}
                    </p>
                  </div>
                </div>

                {/* Reviewer Portrait Card */}
                <div className="shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Oversized Decorative Burgundy Quote Marks (Top-Right and Bottom-Left) */}
          <div className="absolute top-12 right-6 sm:right-10 text-[120px] sm:text-[160px] font-serif text-[#6D001A]/[0.15] pointer-events-none select-none leading-none z-0">
            “
          </div>
          <div className="absolute bottom-4 left-6 sm:left-10 text-[120px] sm:text-[160px] font-serif text-[#6D001A]/[0.15] pointer-events-none select-none leading-none z-0">
            ”
          </div>

        </div>

      </div>
    </SectionFrame>
  );
};
