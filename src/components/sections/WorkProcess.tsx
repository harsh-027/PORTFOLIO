import React from 'react';
import { SectionFrame } from '../ui/SectionFrame';
import { Edit3, Grid, Shield, CheckCircle2 } from 'lucide-react';

interface ProcessItem {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: ProcessItem[] = [
  {
    number: '01',
    title: 'Review The Brief',
    description: 'Deconstructing objectives, target audience requirements, business goals, and competitive positioning before initiating design.',
    icon: Edit3,
  },
  {
    number: '02',
    title: 'Sketch The Wireframe',
    description: 'Mapping out user journeys, visual hierarchy, information architecture, and core screen wireframes.',
    icon: Grid,
  },
  {
    number: '03',
    title: 'Design Progress & Prototyping',
    description: 'Crafting high-fidelity UI designs, interactive motion prototypes, and component design systems.',
    icon: Shield,
  },
  {
    number: '04',
    title: 'Product Examination & Launch',
    description: 'Rigorous cross-browser QA testing, accessibility audits, frontend implementation handoff, and launch.',
    icon: CheckCircle2,
  },
];

export const WorkProcess: React.FC = () => {
  return (
    <SectionFrame>
      <div className="w-full flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 font-rajdhani text-xs font-semibold tracking-wider text-white/70 uppercase">
            Methodology
          </span>
          <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-normal text-white">
            My Work Process
          </h2>
        </div>

        {/* Process Cards Stack */}
        <div className="w-full flex flex-col gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-10 rounded-2xl bg-[#141414] border border-white/10 card-inset-glow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:border-white/20 transition-colors"
              >
                {/* Left Text Block */}
                <div className="flex-1 space-y-2">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-[#6D001A]/20 border border-[#6D001A]/50 font-mono-plex text-xs font-semibold text-[#C2184B]">
                    Step {step.number}
                  </span>
                  <h3 className="font-rajdhani text-2xl sm:text-3xl font-medium text-white group-hover:text-[#A3123B] transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-rajdhani text-sm sm:text-base text-white/70 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>

                {/* Right Circular Icon Medallion */}
                <div className="shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-black border border-white/15 flex items-center justify-center text-white p-4 shadow-2xl group-hover:border-[#6D001A]/60 transition-colors">
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#6D001A]/30 via-[#8A0D2E]/25 to-[#A3123B]/20 flex items-center justify-center text-[#C2184B]">
                    <Icon size={36} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </SectionFrame>
  );
};
