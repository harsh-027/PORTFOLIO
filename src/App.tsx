import React from 'react';
import { AnimatedGradient } from './components/effects/AnimatedGradient';
import { CustomCursor } from './components/effects/CustomCursor';
import { Header } from './components/layout/Header';
import { SideNav } from './components/layout/SideNav';

import { Hero } from './components/sections/Hero';
import { Counter } from './components/sections/Counter';
import { Experience } from './components/sections/Experience';
import { SelectedWork } from './components/sections/SelectedWork';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { TechStack } from './components/sections/TechStack';
import { PartnerStrip } from './components/sections/PartnerStrip';
import { Awards } from './components/sections/Awards';
import { WorkProcess } from './components/sections/WorkProcess';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#6D001A] selection:text-white font-rajdhani overflow-x-hidden">
      {/* 1. Background Flowing Burgundy Canvas Mist */}
      <AnimatedGradient />

      {/* 2. Desktop Custom Cursor */}
      <CustomCursor />

      {/* 3. Floating Right Navigation Bar (Scrollspy) */}
      <SideNav />

      {/* 4. Main Site Shell */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-1 w-full">
          <Hero />
          <Counter />
          <Experience />
          <SelectedWork />
          <Services />
          <About />
          <TechStack />
          <PartnerStrip />
          <Awards />
          <WorkProcess />
          <FAQ />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
