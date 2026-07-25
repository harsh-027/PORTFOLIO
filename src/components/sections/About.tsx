import React, { useState } from 'react';
import { SectionFrame } from '../ui/SectionFrame';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';
import harshitProfileImg from '../../assets/images/github.png';
import skillflowImg from '../../assets/images/skillflow.png';
import currentxImg from '../../assets/images/currentx_project_1784958705222.jpg';

interface GallerySlide {
  id: string;
  title: string;
  image: string;
}

const gallerySlides: GallerySlide[] = [
  {
    id: 'github-profile',
    title: 'Harshit Srivastava - GitHub Profile & Tech Stack',
    image: harshitProfileImg,
  },
  {
    id: 'skillflow-ai',
    title: 'SkillFlow - AI-Powered Career Guidance & Learning Platform',
    image: skillflowImg,
  },
  {
    id: 'currentx-news',
    title: 'CurrentX - Responsive News Platform Aggregator',
    image: currentxImg,
  },
];

export const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % gallerySlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
  };

  return (
    <SectionFrame id="about">
      <div className="w-full flex flex-col gap-10">
        
        {/* Intro Copy Row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12">
          <div className="shrink-0">
            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 font-rajdhani text-xs font-semibold tracking-wider text-white/70 uppercase">
              About Me
            </span>
          </div>

          <div className="flex-1 space-y-4">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.08] tracking-tight text-white">
              Driven by clean code, full-stack performance, and AI-powered web experiences.
            </h2>
            <p className="font-rajdhani text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
              I am Harshit Srivastava, a Full Stack MERN Developer passionate about building modern, scalable web applications with clean UI and AI-powered features. I specialize in React, Node.js, Express.js, MongoDB, Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>

        {/* About Gallery Panel */}
        <div className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] rounded-3xl overflow-hidden bg-[#141414] border border-white/10 card-inset-glow group">
          
          {/* Top Overlay Controls Bar */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
            <a
              href="https://github.com/harsh-027"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-overlay border border-white/15 text-xs sm:text-sm font-rajdhani font-medium text-white hover:text-[#A3123B] transition-colors"
            >
              <Github size={14} className="text-[#A3123B]" />
              <span>github.com/harsh-027</span>
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-full glass-overlay border border-white/15 text-white flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-full glass-overlay border border-white/15 text-white flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Active Gallery Image */}
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={gallerySlides[currentIndex].image}
              alt={gallerySlides[currentIndex].title}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Bottom Slide Info Tag */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between font-rajdhani text-xs sm:text-sm text-white/80">
              <span className="font-medium truncate">{gallerySlides[currentIndex].title}</span>
              <span className="font-mono-plex text-xs text-white/50 shrink-0">
                0{currentIndex + 1} / 0{gallerySlides.length}
              </span>
            </div>
          </div>

        </div>

      </div>
    </SectionFrame>
  );
};
