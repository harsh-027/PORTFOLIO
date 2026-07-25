import React from 'react';
import { motion } from 'motion/react';
import { SectionFrame } from '../ui/SectionFrame';
import { Award, Trophy, Star } from 'lucide-react';

interface AwardItem {
  id: string;
  title: string;
  awarder: string;
  year: string;
  icon: React.ElementType;
}

const awards: AwardItem[] = [
  {
    id: 'oracle-ai',
    title: 'Oracle AI Foundation Associate',
    awarder: 'Oracle Certified',
    year: 'Sep 2025',
    icon: Trophy,
  },
  {
    id: 'tcs-ai',
    title: 'AI for All Certification',
    awarder: 'TCS iON',
    year: 'May 2026',
    icon: Award,
  },
  {
    id: 'hackerrank-js',
    title: 'JavaScript (Basic) Certificate',
    awarder: 'HackerRank',
    year: 'Jul 2025',
    icon: Star,
  },
];

export const Awards: React.FC = () => {
  return (
    <SectionFrame id="awards">
      <div className="w-full flex flex-col gap-10">
        
        {/* Intro Headline */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12">
          <div className="shrink-0">
            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 font-rajdhani text-xs font-semibold tracking-wider text-white/70 uppercase">
              Certifications
            </span>
          </div>

          <div className="flex-1">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              Industry certifications and verified achievements in AI & Web Development.
            </h2>
          </div>
        </div>

        {/* Award Circular Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full justify-items-center">
          {awards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="w-56 h-56 sm:w-60 sm:h-60 rounded-full bg-[#151515] border border-white/10 card-inset-glow flex flex-col items-center justify-center p-6 text-center group cursor-pointer hover:border-[#6D001A]/60 hover:bg-[#1a1a1a] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-black border border-white/15 flex items-center justify-center text-white/70 group-hover:text-[#A3123B] group-hover:border-[#6D001A]/60 mb-3 transition-colors">
                  <Icon size={22} />
                </div>

                <span className="font-mono-plex text-xs text-white/50 mb-1">
                  [ {item.year} ]
                </span>

                <h3 className="font-rajdhani text-xl font-semibold text-white group-hover:text-[#A3123B] transition-colors">
                  {item.title}
                </h3>

                <p className="font-rajdhani text-xs text-white/60 mt-0.5">
                  {item.awarder}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </SectionFrame>
  );
};
