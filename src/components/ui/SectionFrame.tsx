import React from 'react';
import { motion } from 'motion/react';

interface SectionFrameProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
  contentClassName?: string;
}

export const SectionFrame: React.FC<SectionFrameProps> = ({
  id,
  className = '',
  children,
  noPadding = false,
  contentClassName = '',
}) => {
  return (
    <section 
      id={id} 
      className={`relative w-full bg-transparent text-white ${className}`}
    >
      <div className="mx-auto max-w-[850px] w-full border-x border-t border-white/10 relative flex flex-col justify-between">
        {/* Top Decorative Corner Crosshairs */}
        <div className="absolute -top-[6px] -left-[6px] w-3 h-3 flex items-center justify-center text-white/50 text-[11px] font-mono leading-none z-10 pointer-events-none select-none">
          +
        </div>
        <div className="absolute -top-[6px] -right-[6px] w-3 h-3 flex items-center justify-center text-white/50 text-[11px] font-mono leading-none z-10 pointer-events-none select-none">
          +
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full ${noPadding ? '' : 'px-4 sm:px-8 md:px-12 py-16 md:py-20'} ${contentClassName}`}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
