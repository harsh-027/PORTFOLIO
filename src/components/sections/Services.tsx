import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionFrame } from '../ui/SectionFrame';
import { Globe, ArrowUpRight, PenTool, Layout, Code, Smartphone, Check } from 'lucide-react';

interface Service {
  id: string;
  tag: string;
  title: string;
  icon: React.ElementType;
  description: string;
  bullets: string[];
}

const servicesList: Service[] = [
  {
    id: 'mern',
    tag: '01',
    title: 'Full Stack MERN Development',
    icon: Code,
    description: 'Building fast, scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js with modern architecture.',
    bullets: ['React & Next.js Architecture', 'Node.js & Express REST APIs', 'MongoDB Database Design & Indexing'],
  },
  {
    id: 'ai',
    tag: '02',
    title: 'AI Integration & Smart APIs',
    icon: Smartphone,
    description: 'Integrating AI models (Groq AI API, OpenAI, Gemini) into web applications for personalized guidance, recommendations, and smart workflows.',
    bullets: ['AI API Integration & Prompting', 'Real-Time Data Pipelines', 'Personalized Guidance & Features'],
  },
  {
    id: 'frontend',
    tag: '03',
    title: 'Frontend Engineering & UI/UX',
    icon: Layout,
    description: 'Creating clean, responsive, user-friendly interfaces using React.js, Tailwind CSS, JavaScript (ES6+), and motion animations.',
    bullets: ['Tailwind CSS & Responsive Layouts', 'Interactive Components & Motion', 'Performance & Cross-Browser Testing'],
  },
  {
    id: 'backend',
    tag: '04',
    title: 'REST APIs & JWT Auth',
    icon: PenTool,
    description: 'Designing secure backend services, JWT authentication systems, and optimized database endpoints for seamless application performance.',
    bullets: ['JWT Auth & Role Access Control', 'RESTful API Endpoint Architecture', 'Postman Testing & Debugging'],
  },
];

export const Services: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>('mern');

  return (
    <SectionFrame id="service">
      <div className="w-full flex flex-col gap-6">
        
        {/* Main Service Card Container */}
        <div className="w-full p-6 sm:p-10 md:p-12 rounded-3xl bg-[#141414] border border-white/10 card-inset-glow flex flex-col justify-between gap-8">
          
          {/* Eyebrow Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-rajdhani text-xs sm:text-sm font-semibold tracking-wider text-white/60 uppercase">
              My Services
            </span>
            <span className="font-mono-plex text-xs text-white/40">
              [ {servicesList.length} Categories ]
            </span>
          </div>

          {/* Service Items List */}
          <div className="flex flex-col gap-4">
            {servicesList.map((service) => {
              const isActive = activeServiceId === service.id;
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-black/60 border-[#6D001A]/60 card-inset-glow' 
                      : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Icon Tile */}
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all ${
                        isActive 
                          ? 'bg-gradient-to-tr from-[#6D001A] via-[#8A0D2E] to-[#A3123B] text-white shadow-lg shadow-[#6D001A]/40' 
                          : 'bg-white/5 text-white/50'
                      }`}>
                        <Icon size={24} />
                      </div>

                      {/* Title */}
                      <h3 className={`font-rajdhani text-2xl sm:text-3xl font-medium transition-colors ${
                        isActive ? 'text-white' : 'text-white/50 hover:text-white/80'
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Serial Tag */}
                    <span className={`font-mono-plex text-sm sm:text-base font-medium px-3 py-1 rounded-full border ${
                      isActive ? 'bg-[#6D001A]/20 border-[#6D001A]/50 text-[#C2184B]' : 'bg-white/5 border-white/10 text-white/40'
                    }`}>
                      {service.tag}
                    </span>
                  </div>

                  {/* Expanded Active Details */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-5 pt-5 border-t border-white/10 flex flex-col gap-4"
                      >
                        <p className="font-rajdhani text-base sm:text-lg text-white/80 leading-relaxed">
                          {service.description}
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2">
                          {service.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-center gap-2 font-rajdhani text-sm text-white/70">
                              <span className="w-4 h-4 rounded-full bg-[#6D001A]/30 text-[#C2184B] flex items-center justify-center shrink-0">
                                <Check size={10} />
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Footer Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/70 font-rajdhani text-sm">
              <Globe size={16} className="text-[#C2184B]" />
              <span>Available Worldwide</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white font-rajdhani font-semibold text-base hover:text-[#A3123B] transition-colors group"
            >
              <span>Contact me</span>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowUpRight size={14} />
              </div>
            </a>
          </div>

        </div>

      </div>
    </SectionFrame>
  );
};
