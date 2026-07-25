import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Grid2x2, X, ArrowUpRight } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#service' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonial' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 w-full border-b border-white/10 bg-black/85 backdrop-blur-xl z-50">
      <div className="mx-auto max-w-[850px] w-full border-x border-white/10 px-4 sm:px-8 md:px-12 py-5 md:py-7 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Mobile Header Top Row */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-start">
          {/* Brand */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 text-white hover:text-white/80 transition-opacity group"
            aria-label="Harshit Srivastava - Home"
          >
            {/* Custom Brand Logo */}
            <div className="flex items-center justify-center">
              <Logo size={28} className="text-white group-hover:text-[#C2184B] transition-colors" />
            </div>
            <span className="font-rajdhani font-semibold text-2xl tracking-tight text-white">Harshit</span>
          </a>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-transform active:scale-95"
            aria-label={mobileMenuMenuOpenState(mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Grid2x2 size={20} />}
          </button>
        </div>

        {/* Availability Status Pill - Center on Desktop */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-xs text-xs sm:text-sm font-rajdhani text-white/80">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#17E982] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#17E982]"></span>
          </span>
          <span>Available for Freelance & Full-Time</span>
        </div>

        {/* Location - Right on Desktop */}
        <div className="hidden md:block text-right font-rajdhani text-sm leading-tight text-white/80">
          <p className="font-medium">Lucknow, UP</p>
          <p className="text-white/50 text-xs">India</p>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden w-full border-t border-white/10 bg-black/95 backdrop-blur-xl px-6 py-6"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-rajdhani font-medium text-white/80 hover:text-white py-2 border-b border-white/5 transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={18} className="text-white/40" />
                </a>
              ))}
            </nav>
            <div className="mt-6 pt-4 text-center text-xs text-white/40 font-rajdhani">
              Lucknow, Uttar Pradesh • India
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

function mobileMenuMenuOpenState(open: boolean): string {
  return open ? 'Close menu' : 'Open navigation menu';
}
