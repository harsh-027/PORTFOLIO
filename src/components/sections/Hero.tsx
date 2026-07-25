import React from 'react';
import { motion } from 'motion/react';
import { SectionFrame } from '../ui/SectionFrame';
import { ArrowUpRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import harshitProfilePhoto from '../../assets/images/goodone.png';

export const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    const resumeText = `===================================================================
                       HARSHIT SRIVASTAVA
   Lucknow, India | +91 9044726301 | harshit.work009@gmail.com
   LinkedIn: https://www.linkedin.com/in/harshit-srivastava-a9a538315
   GitHub: https://github.com/harsh-027
===================================================================

FULL STACK MERN DEVELOPER | AI-POWERED WEB DEVELOPER

SUMMARY:
Aspiring Software Developer with hands-on experience in MERN Stack Development, 
including MongoDB, Express.js, React.js, and Node.js. Skilled in JavaScript (ES6+), 
REST API development, responsive web design, Git/GitHub, and building AI-integrated 
web applications.

WORK EXPERIENCE:
-------------------------------------------------------------------
Prodigy InfoTech, Lucknow, India                   Jan 2026 – Feb 2026
Web Development Intern
• Developed responsive web applications using HTML5, CSS3, and JavaScript (ES6+).
• Built dynamic applications by integrating JavaScript with REST APIs.
• Designed responsive, user-friendly interfaces and optimized applications.
• Completed multiple frontend projects, including landing pages & web apps.

PROJECTS:
-------------------------------------------------------------------
1. SkillFlow – AI-Powered Career Guidance & Learning Platform
• Built an AI-powered full-stack career guidance platform using React.js, 
  Node.js, Express.js, MongoDB, Tailwind CSS, JWT, and REST APIs.
• Developed secure authentication, profile management, AI-powered recommendations.
• Deployed backend on Render and frontend on Vercel.
• Live Demo: https://skillflow-live.vercel.app | GitHub: SKILLFLOW

2. CurrentX – Responsive News Platform
• Developed a responsive news platform using HTML5, CSS3, JavaScript, and React.
• Integrated News API to provide real-time news updates and search functionality.

EDUCATION:
-------------------------------------------------------------------
• Bachelor of Computer Application (BCA) (2023 – 2026) | GPA: 7.3
  Goal Institute of Higher Studies Mahavidyalaya, Lucknow / University of Lucknow
• Intermediate (12th) - 70% | High School (10th) - 85%
  O.P.S Intermediate College, Ayodhya

SKILLS:
-------------------------------------------------------------------
• Languages: JavaScript, Java, Python, HTML5, CSS3
• Frontend/Backend: React.js, Next.js, Tailwind CSS, Node.js, Express.js
• Database/Tools: MongoDB, MySQL, Git, GitHub, Postman, VS Code
• APIs/AI: REST APIs, Axios, Groq AI API, Prompt Engineering, Generative AI

CERTIFICATIONS:
-------------------------------------------------------------------
• Oracle AI Foundation Associate – Oracle (Sep 2025)
• AI for All – TCS iON (May 2026)
• JavaScript (Basic) – HackerRank (Jul 2025)
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Harshit_Srivastava_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <SectionFrame id="home" className="min-h-[920px] md:min-h-[952px] flex flex-col justify-center">
      <div className="relative w-full flex flex-col items-center text-center py-6 md:py-10">
        
        {/* Local Burgundy Mist Glow behind Portrait */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[480px] h-[340px] md:h-[480px] bg-gradient-to-tr from-[#6D001A]/40 via-[#8A0D2E]/25 to-transparent blur-3xl rounded-full pointer-events-none z-0" />

        {/* Hero Portrait Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-[312px] h-[330px] sm:w-[380px] sm:h-[420px] md:w-[424px] md:h-[460px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl card-inset-glow group"
        >
          {/* Developer Portrait */}
          <img
            src={harshitProfilePhoto}
            alt="Harshit Srivastava"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle gradient vignette on portrait */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </motion.div>

        {/* Signature overlapping the portrait bottom edge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 -mt-12 sm:-mt-16 md:-mt-20 pointer-events-none select-none"
        >
          <span className="font-waterfall text-white text-[72px] sm:text-[96px] md:text-[120px] leading-none tracking-normal drop-shadow-xl block">
            Harshit
          </span>
        </motion.div>

        {/* Hero Identity Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 md:mt-4 max-w-lg font-rajdhani text-lg sm:text-xl md:text-2xl text-white/80 font-normal leading-relaxed tracking-tight"
        >
          Hi, I’m Harshit Srivastava,<br />
          Building fast, <span className="text-white font-medium">scalable</span> and <span className="text-white font-medium">AI-powered web experiences</span>
        </motion.p>

        {/* Social Links Row */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex items-center justify-center gap-3 md:gap-4 z-20"
        >
          <a 
            href="https://github.com/harsh-027" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/harshit-srivastava-a9a538315" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:harshit.work009@gmail.com" 
            aria-label="Send Email"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105"
          >
            <Mail size={18} />
          </a>
        </motion.div>

        {/* CTA Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto z-20"
        >
          {/* Download Resume Button */}
          <button
            onClick={handleDownloadResume}
            className="group relative w-[240px] sm:w-auto inline-flex items-center justify-between gap-3 pl-6 pr-2 py-2.5 rounded-full bg-white text-black font-rajdhani font-semibold text-base transition-all hover:bg-white/90 active:scale-98 shadow-xl cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Download size={18} />
              <span>Download Resume</span>
            </span>
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              <ArrowUpRight size={16} />
            </div>
          </button>

          {/* View My Work Button */}
          <a
            href="#work"
            className="w-[240px] sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/10 text-white font-rajdhani font-semibold text-base transition-all active:scale-98"
          >
            View My Work
          </a>
        </motion.div>

      </div>
    </SectionFrame>
  );
};
