import React from 'react';
import { SectionFrame } from '../ui/SectionFrame';
import { Code2, Server, Database, Cpu, ShieldCheck, GitBranch } from 'lucide-react';

interface Tool {
  name: string;
  category: string;
  description: string;
  icon: React.ElementType;
}

const tools: Tool[] = [
  {
    name: 'React.js & Next.js',
    category: 'Frontend Development',
    description: 'Building dynamic, responsive user interfaces with modular components, Hooks, and modern state management.',
    icon: Code2,
  },
  {
    name: 'Node.js & Express.js',
    category: 'Backend & APIs',
    description: 'Architecting scalable server-side applications, RESTful endpoints, middleware, and backend microservices.',
    icon: Server,
  },
  {
    name: 'MongoDB & Database',
    category: 'Database Management',
    description: 'NoSQL & Relational database modeling, document schemas, indexing, and data persistence with Mongoose & MySQL.',
    icon: Database,
  },
  {
    name: 'Tailwind CSS & JavaScript',
    category: 'Styling & ES6+',
    description: 'Utility-first responsive design, modern JavaScript (ES6+), TypeScript, and seamless UI layout crafting.',
    icon: Cpu,
  },
  {
    name: 'REST APIs & JWT Auth',
    category: 'Security & Communication',
    description: 'Secure token-based authentication, authorization middleware, Postman endpoint testing, and Axios integration.',
    icon: ShieldCheck,
  },
  {
    name: 'Git, GitHub & Groq AI',
    category: 'Version Control & AI',
    description: 'Source code management, collaborative workflows, CI/CD, and AI model API integrations (Groq AI API).',
    icon: GitBranch,
  },
];

export const TechStack: React.FC = () => {
  return (
    <SectionFrame>
      <div className="w-full flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 font-rajdhani text-xs font-semibold tracking-wider text-white/70 uppercase">
            Tooling
          </span>
          <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-normal text-white">
            Tech Stack & Tools
          </h2>
        </div>

        {/* Tool Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10 card-inset-glow flex flex-col items-center text-center justify-between min-h-[280px] group hover:border-white/20 transition-colors"
              >
                <span className="font-mono-plex text-xs text-white/50 uppercase tracking-wider">
                  {tool.category}
                </span>

                {/* Centered Logo Tile */}
                <div className="w-20 h-20 rounded-2xl bg-black border border-white/15 flex items-center justify-center text-white group-hover:scale-105 group-hover:border-[#6D001A]/60 group-hover:text-[#A3123B] transition-all duration-300 shadow-xl">
                  <Icon size={36} />
                </div>

                <div>
                  <h3 className="font-rajdhani text-2xl font-medium text-white mb-1">
                    {tool.name}
                  </h3>
                  <p className="font-rajdhani text-sm text-white/60 max-w-xs mx-auto leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </SectionFrame>
  );
};
