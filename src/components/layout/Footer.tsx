import React from 'react';
import { Globe, Github, Linkedin, Mail } from 'lucide-react';
import harshitProfilePhoto from '../../assets/images/goodone.png';

export const Footer: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'mailto:harshit.work009@gmail.com';
    }
  };

  return (
    <footer className="relative w-full border-t border-white/10 bg-transparent text-white pt-16 pb-12 overflow-hidden z-20">
      
      {/* Burgundy Radial Ambient Glow */}
      <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[750px] sm:w-[900px] h-[380px] bg-gradient-to-t from-[#6D001A]/35 via-[#8A0D2E]/15 to-transparent blur-[100px] pointer-events-none z-0" />

      <div className="mx-auto max-w-[850px] w-full border-x border-white/10 px-4 sm:px-8 md:px-12 relative z-10 flex flex-col items-center text-center gap-5">
        
        {/* Circular Avatar */}
        <div className="relative group my-2">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-neutral-900">
            <img
              src={harshitProfilePhoto}
              alt="Harshit Srivastava"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Name & Role */}
        <div className="-mt-1">
          <h3 className="font-rajdhani text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Harshit Srivastava
          </h3>
          <p className="font-rajdhani text-xs sm:text-sm text-white/60 mt-0.5">
            Full Stack MERN Developer | AI-Powered Web Developer
          </p>
        </div>

        {/* Signature + Book A Call Capsule Section */}
        <div className="relative w-full max-w-[640px] my-4 flex flex-col items-center justify-center">
          
          {/* Cursive Signature Overlapping Top Edge In Front */}
          <div className="z-20 -mb-12 sm:-mb-16 select-none pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]">
            <span className="font-great-vibes text-white text-[85px] sm:text-[115px] md:text-[135px] leading-none tracking-wide">
              Harshit
            </span>
          </div>

          {/* Glassmorphic Capsule CTA Button with Infinite Marquee */}
          <div 
            onClick={scrollToContact}
            className="z-10 w-full rounded-[100px] bg-[#141414]/70 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl py-7 sm:py-9 px-6 sm:px-10 overflow-hidden cursor-pointer group hover:border-white/35 hover:bg-[#181818]/85 transition-all duration-300"
          >
            <div className="flex whitespace-nowrap animate-marquee items-center gap-8 sm:gap-10">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 sm:gap-10 text-white font-rajdhani font-bold text-3xl sm:text-4xl md:text-[42px] tracking-tight uppercase group-hover:text-[#C2184B] transition-colors">
                  <span>Book A Call</span>
                  <span className="text-white/80 font-light text-2xl sm:text-3xl">•</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-3.5 mt-2">
          <a
            href="https://github.com/harsh-027"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/harshit-srivastava-a9a538315"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:harshit.work009@gmail.com"
            aria-label="Send Email"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            <Mail size={18} />
          </a>
          <a
            href="#contact"
            aria-label="Global Location"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            <Globe size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-center gap-2 font-rajdhani text-xs sm:text-sm text-white/60 mt-2">
          <div className="flex items-center gap-1.5">
            <Globe size={14} className="text-white/60" />
            <span>Copyright by <strong className="text-white font-semibold">Harshit Srivastava</strong>.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

