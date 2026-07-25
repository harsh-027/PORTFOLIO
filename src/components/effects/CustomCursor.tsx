import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 500, mass: 0.1 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show custom cursor on non-touch fine pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') !== null ||
          target.closest('button') !== null ||
          target.getAttribute('role') === 'button';
        setIsPointer((prev) => (prev !== isClickable ? isClickable : prev));
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[100] top-0 left-0 hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={{
        scale: isPointer ? 1.8 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.1 }}
    >
      <div className={`w-4 h-4 rounded-full ${isPointer ? 'bg-white border border-white shadow-[0_0_12px_rgba(255,255,255,0.9)]' : 'bg-white/90 border border-white/60 shadow-[0_0_8px_rgba(255,255,255,0.6)]'} backdrop-blur-xs transition-colors duration-150`} />
    </motion.div>
  );
};
