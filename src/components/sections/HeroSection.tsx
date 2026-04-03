// src/components/sections/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - 50;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;
      const duration = 400; // Fast scroll duration in ms

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // easeOutQuart for a fast, snappy then smooth settle animation
        const ease = 1 - Math.pow(1 - progress, 4);
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      requestAnimationFrame(animation);
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - 50;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;
      const duration = 400; // Fast scroll duration in ms

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // easeOutQuart for a fast, snappy then smooth settle animation
        const ease = 1 - Math.pow(1 - progress, 4);
        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      requestAnimationFrame(animation);
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Motion & Blur */}
      <div className="absolute inset-0 bg-transparent">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-slate-800/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-slate-900/40 blur-[100px]" />
      </div>

      <motion.div 
        className="relative z-10 flex max-w-5xl flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <span className="mb-4 inline-block rounded-full border border-slate-800 bg-slate-900/30 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-400 backdrop-blur-sm">
          Creative Director / Filmmaker
        </span>

        <div className="mb-8 flex flex-col items-center justify-center gap-1 sm:gap-2">
          <h1 className="font-serif text-5xl font-medium leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-slate-50 drop-shadow-sm">
            Karan Pawar
          </h1>
          <span className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-blue-400/80 sm:mt-0 sm:text-lg">
            aka AMAZER
          </span>
        </div>

        <p className="mx-auto mb-10 max-w-2xl text-lg font-light tracking-wide text-slate-300 sm:text-xl md:text-2xl">
          Building Cinematic Experiences for the Digital World
        </p>

        <div className="flex flex-col gap-4 sm:flex-row flex-wrap justify-center w-full mt-4">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="group flex w-full sm:w-auto sm:min-w-[180px] items-center justify-center gap-2 rounded-full border border-blue-500/40 bg-blue-900/20 px-6 py-3 text-xs sm:text-sm sm:px-8 sm:py-4 font-semibold tracking-wider text-blue-100 backdrop-blur-md transition-all active:scale-95 duration-200 hover:bg-blue-800/30 hover:border-blue-400 hover:text-white hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.3)] shadow-[0_0_15px_-5px_rgba(59,130,246,0.2)]"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download="Karan_Pawar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full sm:w-auto sm:min-w-[180px] items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/40 px-6 py-3 text-xs sm:text-sm sm:px-8 sm:py-4 font-semibold tracking-wider text-slate-200 backdrop-blur-md transition-all active:scale-95 duration-200 hover:bg-slate-800 hover:border-slate-500 hover:text-white hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]"
          >
            Download Resume
          </a>
          <a
            href="#contact" onClick={handleScrollToContact}
            className="group flex w-full sm:w-auto sm:min-w-[180px] items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/40 px-6 py-3 text-xs sm:text-sm sm:px-8 sm:py-4 font-semibold tracking-wider text-slate-200 backdrop-blur-md transition-all active:scale-95 duration-200 hover:bg-slate-800 hover:border-slate-500 hover:text-white hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]"
          >
            Let's Connect
          </a>
        </div>
      </motion.div>
    </section>
  )
}
