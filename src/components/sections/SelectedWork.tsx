import React from 'react';
import { motion } from 'motion/react';
import { SectionFrame } from '../ui/SectionFrame';
import { ArrowUpRight } from 'lucide-react';
import skillflowImg from '../../assets/images/skillflow.png';
import currentxImg from '../../assets/images/currentx_project_1784958705222.jpg';

interface Project {
  id: string;
  category: string;
  title: string;
  date: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 'skillflow',
    category: 'Full Stack & AI Platform',
    title: 'SkillFlow – AI-Powered Career Guidance',
    date: 'Jan 2026',
    image: skillflowImg,
    link: 'https://skillflow-live.vercel.app',
  },
  {
    id: 'currentx',
    category: 'Web Application & APIs',
    title: 'CurrentX – Modern News Aggregator',
    date: 'Feb 2026',
    image: currentxImg,
    link: 'https://github.com/harsh-027',
  },
];

export const SelectedWork: React.FC = () => {
  return (
    <SectionFrame id="work">
      <div className="w-full flex flex-col gap-8 md:gap-12">
        
        {/* Continuous Marquee Ticker Header Panel */}
        <div className="w-full overflow-hidden relative py-4 sm:py-5 rounded-[22px] bg-[#121212] border border-white/10 shadow-xl [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max items-center gap-8 sm:gap-12 animate-marquee pointer-events-none select-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4 shrink-0">
                <span className="font-rajdhani text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
                  Selected work
                </span>
                <span className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-gradient-to-r from-[#6D001A] to-[#8A0D2E] shadow-[0_0_10px_rgba(109,0,26,0.8)] shrink-0 inline-block" />
              </div>
            ))}
          </div>
        </div>

        {/* Work Cards Stack */}
        <div className="w-full flex flex-col gap-8 md:gap-12">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative w-full h-[380px] sm:h-[460px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 block card-inset-glow cursor-pointer"
            >
              {/* Background Art Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.04 },
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover object-center"
              />

              {/* Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Lower Glass Overlay Panel */}
              <div className="absolute left-4 right-4 bottom-4 md:left-6 md:right-6 md:bottom-6 p-5 sm:p-6 rounded-2xl glass-overlay border border-white/10 flex items-end justify-between gap-4 group-hover:border-white/25 transition-colors">
                
                {/* Left Text Stack */}
                <div className="flex flex-col gap-1.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-rajdhani text-xs sm:text-sm font-medium text-[#C2184B]">
                      {project.category}
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="font-mono-plex text-xs text-white/60">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="font-rajdhani text-2xl sm:text-3xl md:text-4xl font-medium text-white truncate group-hover:text-[#A3123B] transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Right Arrow Button */}
                <motion.div
                  variants={{
                    rest: { x: 0, y: 0 },
                    hover: { x: 4, y: -4 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="shrink-0 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:bg-[#6D001A] group-hover:text-white transition-colors"
                >
                  <ArrowUpRight size={22} />
                </motion.div>

              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </SectionFrame>
  );
};
