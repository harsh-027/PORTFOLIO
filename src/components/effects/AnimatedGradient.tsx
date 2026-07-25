import React, { useEffect, useRef } from 'react';

export const AnimatedGradient: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    // Scale down resolution by factor of 0.5 to vastly improve canvas render speed on retina/mobile
    const scale = 0.5;
    let width = (canvas.width = Math.max(300, Math.floor(window.innerWidth * scale)));
    let height = (canvas.height = Math.max(300, Math.floor(window.innerHeight * scale)));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = Math.max(300, Math.floor(window.innerWidth * scale));
      height = canvas.height = Math.max(300, Math.floor(window.innerHeight * scale));
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Dynamic floating burgundy mist nodes
    const orbs = [
      { x: width * 0.5, y: height * 0.25, radius: width * 0.45, vx: 0.2, vy: 0.15, color: 'rgba(109, 0, 26, 0.55)' },
      { x: width * 0.3, y: height * 0.6, radius: width * 0.50, vx: -0.18, vy: 0.25, color: 'rgba(138, 13, 46, 0.48)' },
      { x: width * 0.7, y: height * 0.75, radius: width * 0.42, vx: 0.15, vy: -0.2, color: 'rgba(74, 0, 18, 0.50)' },
      { x: width * 0.5, y: height * 0.9, radius: width * 0.55, vx: -0.12, vy: 0.15, color: 'rgba(163, 18, 59, 0.38)' },
    ];

    let step = 0;

    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      step += 0.005;

      // Base black background fill
      ctx.fillStyle = '#080808';
      ctx.fillRect(0, 0, width, height);

      orbs.forEach((orb, i) => {
        orb.x += Math.sin(step + i * 1.2) * 0.8 + orb.vx;
        orb.y += Math.cos(step + i * 1.7) * 0.6 + orb.vy;

        if (orb.x < -100) orb.x = width + 100;
        if (orb.x > width + 100) orb.x = -100;
        if (orb.y < -100) orb.y = height + 100;
        if (orb.y > height + 100) orb.y = -100;

        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(0.4, orb.color.replace('0.45', '0.22').replace('0.38', '0.18').replace('0.40', '0.20').replace('0.30', '0.14'));
        gradient.addColorStop(1, 'rgba(8, 8, 8, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic CSS glowing ambient aura */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-tr from-[#6D001A]/35 via-[#8A0D2E]/20 to-transparent blur-[100px] sm:blur-[120px] rounded-full animate-pulse pointer-events-none transform-gpu" />
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-br from-[#8A0D2E]/25 via-[#4A0012]/15 to-transparent blur-[120px] sm:blur-[140px] rounded-full pointer-events-none transform-gpu" />

      {/* Canvas rendering flowing fluid mist with hardware acceleration */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-60 mix-blend-screen transform-gpu"
      />

      {/* Grid crosshatch scanlines overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      {/* Top and Bottom edge dark gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
    </div>
  );
};

