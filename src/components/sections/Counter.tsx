import React from 'react';
import { SectionFrame } from '../ui/SectionFrame';

export const Counter: React.FC = () => {
  return (
    <SectionFrame>
      <div className="w-full flex flex-col gap-5">
        
        {/* Metric Grid - 2 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
          
          {/* Card 1: Projects Built */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10 card-inset-glow flex flex-col justify-between min-h-[190px] sm:min-h-[210px] group hover:border-white/20 transition-colors">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#17E982]" />
              <span className="font-rajdhani text-sm sm:text-base font-medium text-white/70">
                Projects Completed
              </span>
            </div>
            <div className="text-right">
              <span className="font-rajdhani text-6xl sm:text-7xl font-normal text-white tracking-tight">
                10+
              </span>
            </div>
          </div>

          {/* Card 2: Client Satisfaction / Success */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10 card-inset-glow flex flex-col justify-between min-h-[190px] sm:min-h-[210px] group hover:border-white/20 transition-colors">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#17E982]" />
              <span className="font-rajdhani text-sm sm:text-base font-medium text-white/70">
                Code Quality & Satisfaction
              </span>
            </div>
            <div className="text-right">
              <span className="font-rajdhani text-6xl sm:text-7xl font-normal text-white tracking-tight">
                100%
              </span>
            </div>
          </div>

        </div>

      </div>
    </SectionFrame>
  );
};
