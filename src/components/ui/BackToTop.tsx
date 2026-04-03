'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top after scrolling past hero
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const startPosition = window.scrollY;
    let startTime: number | null = null;
    const duration = 400;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = 1 - Math.pow(1 - progress, 4);
      window.scrollTo(0, startPosition - startPosition * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
    requestAnimationFrame(animation);
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-[100] pointer-events-auto"
    >
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center p-4 rounded-full bg-blue-600/80 backdrop-blur-md text-white hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.6)]"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </motion.div>
  );
}