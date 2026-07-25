import React from 'react';
import { SectionFrame } from '../ui/SectionFrame';

interface TechItem {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const technologies: TechItem[] = [
  {
    name: 'React',
    color: '#61DAFB',
    icon: (
      <svg className="w-6 h-6 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    icon: (
      <svg className="w-6 h-6 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm10.2 12.8c.6.6 1.5 1 2.5 1 1.2 0 1.9-.5 1.9-1.3 0-.8-.6-1.2-2-1.7l-.8-.3c-2.1-.8-3.1-1.9-3.1-3.6 0-2.3 1.9-3.9 4.8-3.9 2 0 3.4.6 4.3 1.5l-1.4 1.5c-.7-.7-1.6-1.1-2.8-1.1-1.2 0-1.8.6-1.8 1.2 0 .7.5 1.1 1.9 1.6l.8.3c2.2.8 3.3 1.9 3.3 3.7 0 2.5-2 4-5.2 4-2.3 0-4.1-.7-5.1-1.8l1.4-1.5zM6.1 9h5.1v1.8H8.8V18H6.7v-7.2H6.1V9z"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    icon: (
      <svg className="w-6 h-6 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7.8v8.4L12 22l10-5.8V7.8L12 2zm-1 14.5l-4-2.3v-4.6l4 2.3v4.6zm1-6.9L8 7.3l4-2.3 4 2.3-4 2.3zm5 4.6l-4 2.3v-4.6l4-2.3v4.6z"/>
      </svg>
    ),
  },
  {
    name: 'Express.js',
    color: '#FFFFFF',
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-3.5-16.5h-2L3.5 12l3 4.5h2L5.75 12 8.5 7.5zm8.5 0h-2L12.25 12l2.75 4.5h2l-3-4.5 3-4.5z"/>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    icon: (
      <svg className="w-6 h-6 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5c-2.4 3.6-6 7.4-6 12 0 4.2 2.8 7.5 6 8.5V1.5zm0 20.5c3.2-1 6-4.3 6-8.5 0-4.6-3.6-8.4-6-12v20.5z"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    color: '#06B6D4',
    icon: (
      <svg className="w-6 h-6 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6 1 2.4 1.8 2.6 2.7 5.6 3.1 8.4.3 3.2-3.2 2.2-6.8.6-8.1 1.2 1.6.8 3.2-.6 4.6-.9.9-2.2 1.3-3.6.4C15.6 6.8 13.8 6 12 6zm-6 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6 1 2.4 1.8 2.6 2.7 5.6 3.1 8.4.3 3.2-3.2 2.2-6.8.6-8.1 1.2 1.6.8 3.2-.6 4.6-.9.9-2.2 1.3-3.6.4-1.8-1.2-3.6-2-5.4-2z"/>
      </svg>
    ),
  },
  {
    name: 'Git',
    color: '#F05032',
    icon: (
      <svg className="w-6 h-6 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.7 10.7l-9.4-9.4c-.8-.8-2-.8-2.8 0L1.7 9.1c-.8.8-.8 2 0 2.8l9.4 9.4c.8.8 2 .8 2.8 0l7.8-7.8c.8-.8.8-2 0-2.8zM12.5 17c-.5.3-1.1.2-1.5-.2l-2.4-2.4v1.8c.4.2.7.6.7 1.1 0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3c0-.5.3-.9.7-1.1V11c-.4-.2-.7-.6-.7-1.1 0-.7.6-1.3 1.3-1.3s1.3.6 1.3 1.3c0 .5-.3.9-.7 1.1v2.5l2-2c.2-.4.6-.7 1.1-.7.7 0 1.3.6 1.3 1.3 0 .5-.3.9-.7 1.1v1.8c.4.2.7.6.7 1.1 0 .3-.1.6-.3.8z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    color: '#FFFFFF',
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    color: '#FFFFFF',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0L12 1z"/>
      </svg>
    ),
  },
  {
    name: 'Render',
    color: '#46E3B7',
    icon: (
      <svg className="w-6 h-6 text-[#46E3B7]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.8 4H5.2C4.5 4 4 4.5 4 5.2v13.6c0 .7.5 1.2 1.2 1.2h13.6c.7 0 1.2-.5 1.2-1.2V5.2c0-.7-.5-1.2-1.2-1.2zm-4.2 12H9.4v-2.3h5.2V16zm0-3.8H9.4V9.9h5.2v2.3z"/>
      </svg>
    ),
  },
];

export const PartnerStrip: React.FC = () => {
  return (
    <SectionFrame noPadding contentClassName="py-10 md:py-12">
      <div className="w-full flex flex-col items-center gap-8 overflow-hidden">
        
        {/* White Dot + Badge Header */}
        <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-[#6D001A]/50 text-xs sm:text-sm font-rajdhani text-[#C2184B] shrink-0 shadow-[0_0_15px_rgba(109,0,26,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#8A0D2E] animate-pulse" />
          <span className="font-semibold tracking-wider uppercase">Technologies I Work With</span>
        </div>

        {/* Static Grid View for clear visibility */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto px-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#8A0D2E]/60 hover:bg-white/5 transition-all duration-300 group shadow-lg"
            >
              <div className="shrink-0 transition-transform group-hover:scale-110">
                {tech.icon}
              </div>
              <span className="font-rajdhani text-sm sm:text-base font-medium text-white/80 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Infinite Marquee Ticker */}
        <div className="w-full overflow-hidden relative pt-2 pb-1 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max items-center gap-8 sm:gap-12 animate-marquee font-rajdhani font-semibold text-sm sm:text-base tracking-wider text-white/50 select-none">
            {[...technologies, ...technologies, ...technologies].map((tech, i) => (
              <div key={i} className="flex items-center gap-2 shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                <span className="scale-90">{tech.icon}</span>
                <span className="text-white/70">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionFrame>
  );
};

