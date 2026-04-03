'use client';

import { User, Film, Play, Image as ImageIcon, Briefcase, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SectionNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    
    // Calculate the top minus padding for the floating top nav
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 100;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;
    const duration = 1200; // Slower animation (1.2 seconds)

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Interpolate with easeInOutQuart
      const ease = progress < 0.5 
        ? 8 * progress * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 4) / 2;

      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
    requestAnimationFrame(animation);
  };

  const navItems = [
    { id: 'about', icon: <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />, label: 'About' },
    { id: 'projects', icon: <Film className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />, label: 'Projects' },
    { id: 'reels', icon: <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />, label: 'Reels' },
    { id: 'gallery', icon: <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />, label: 'Gallery' },
    { id: 'experience', icon: <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />, label: 'Experience' },
    { id: 'mind', icon: <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />, label: 'Mind' },
  ];

  return (
    <div className={`fixed top-0 left-0 z-[100] w-full transition-colors duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex h-14 sm:h-20 items-center justify-between md:justify-center gap-0.5 sm:gap-6 px-1 sm:px-4 overflow-hidden w-full">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="flex items-center justify-center px-1.5 min-[380px]:px-2 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-slate-300 bg-slate-900/30 border border-slate-800/50 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all active:scale-90 duration-200 font-medium text-[9px] min-[380px]:text-[10px] sm:text-sm tracking-tighter sm:tracking-wide shadow-sm whitespace-nowrap"
          >
            {item.icon}
            <span className="inline-block">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
