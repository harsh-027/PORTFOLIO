import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  Briefcase, 
  Layers, 
  User, 
  HelpCircle, 
  Mail 
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'work', label: 'Selected Work', icon: Briefcase },
  { id: 'service', label: 'Services', icon: Layers },
  { id: 'about', label: 'About Me', icon: User },
  { id: 'faq', label: 'FAQs', icon: HelpCircle },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="fixed right-3 sm:right-6 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-1.5 p-2 rounded-[28px] bg-white/[0.05] border border-white/15 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-colors hover:bg-white/[0.08]"
      aria-label="Floating side navigation"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-label={item.label}
            title={item.label}
            className={`group relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
              isActive 
                ? 'bg-white text-black shadow-lg scale-105' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Icon size={18} className={isActive ? 'text-black' : 'text-white/70 group-hover:text-white'} />

            {/* Hover Tooltip */}
            <span className="absolute right-14 px-3 py-1 rounded-md bg-black/90 border border-white/15 text-white text-xs font-rajdhani whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
              {item.label}
            </span>

            {/* Active Indicator Pulse */}
            {isActive && (
              <motion.div
                layoutId="activeSideNav"
                className="absolute inset-0 rounded-full border border-white/40 pointer-events-none"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
          </a>
        );
      })}
    </nav>
  );
};
