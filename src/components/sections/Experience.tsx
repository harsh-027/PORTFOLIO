import React from 'react';
import { SectionFrame } from '../ui/SectionFrame';

interface ExperienceData {
  company: string;
  role: string;
  period: string;
  description?: string[];
}

const experiences: ExperienceData[] = [
  {
    company: 'Prodigy InfoTech, Lucknow, India',
    role: 'Web Development Intern',
    period: 'Jan 2026 – Feb 2026',
    description: [
      'Developed responsive web applications using HTML5, CSS3, and JavaScript (ES6+).',
      'Built dynamic applications by integrating JavaScript with REST APIs.',
      'Designed responsive, user-friendly interfaces and optimized applications through testing and debugging.',
      'Completed multiple frontend projects, including landing pages, stopwatch apps, and interactive web applications.'
    ]
  },
  {
    company: 'University of Lucknow',
    role: 'Bachelor of Computer Applications (BCA)',
    period: '2023 – 2026 (GPA: 7.3)',
    description: [
      'Goal Institute of Higher Studies Mahavidyalaya, Lucknow.',
      'Core coursework in Data Structures, MERN Stack Development, Database Systems, and Object-Oriented Programming.'
    ]
  },
  {
    company: 'O.P.S Intermediate College, Ayodhya',
    role: 'Intermediate (12th) & High School (10th)',
    period: '2021 – 2023',
    description: [
      'Intermediate (12th): 70% | High School (10th): 85%',
      'Focused on Mathematics, Physics, and Computer Science fundamentals.'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <SectionFrame id="experience">
      <div className="w-full flex flex-col gap-10">
        
        {/* Intro Section: Eyebrow + Headline */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12">
          <div className="shrink-0">
            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 font-rajdhani text-xs font-semibold tracking-wider text-white/70 uppercase">
              Experiences & Education
            </span>
          </div>

          <div className="flex-1">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.08] tracking-tight text-white">
              Hands-on Web Development Internship <span className="text-white/40">& Academic Computer Application Excellence.</span>
            </h2>
          </div>
        </div>

        {/* Experience Rows */}
        <div className="w-full divide-y divide-white/10 border-t border-b border-white/10">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="py-6 sm:py-7 flex flex-col gap-3 group hover:bg-white/[0.02] px-2 transition-colors rounded-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-rajdhani text-xl sm:text-2xl font-medium text-white group-hover:text-[#A3123B] transition-colors">
                    {exp.company}
                  </h3>
                  <p className="font-rajdhani text-sm sm:text-base text-white/80 font-medium">
                    {exp.role}
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 font-mono-plex text-xs sm:text-sm text-white/80">
                    {exp.period}
                  </span>
                </div>
              </div>

              {exp.description && exp.description.length > 0 && (
                <ul className="mt-2 space-y-1 sm:space-y-1.5 pl-4 list-disc text-white/60 font-rajdhani text-sm sm:text-base leading-relaxed">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </SectionFrame>
  );
};
