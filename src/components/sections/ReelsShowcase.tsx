'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReelsShowcase() {
  const [playing, setPlaying] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const reels = [
    { id: 'rAl3OP8ch_A', title: 'Reel 1' },
    { id: 'B_6voBmS4g8', title: 'Reel 2' },
    { id: 'RtAGwIBFKYY', title: 'Reel 3' },
    { id: 'nglQ4rHnyys', title: 'Reel 4' },
    { id: 'MBAKCX6P0eY', title: 'Reel 5' },
    { id: 'zysw4tUsicg', title: 'Reel 6' },
    { id: '_HhQ7q4ompY', title: 'Reel 7' },
  ];

  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      
      let closestIndex = 0;
      if (maxScrollLeft > 0) {
        const scrollPercentage = container.scrollLeft / maxScrollLeft;
        closestIndex = Math.round(scrollPercentage * reels.length);
      }

      setCurrentSlide(closestIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      
      if (maxScrollLeft > 0) {
        const targetScroll = (index / reels.length) * maxScrollLeft;
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  const nextSlide = () => {
    if (currentSlide < reels.length) scrollToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) scrollToSlide(currentSlide - 1);
  };

  return (
    <section id="reels" className="relative z-10 w-full overflow-hidden bg-transparent px-4 py-16 sm:py-20 lg:py-32 sm:px-6 lg:px-8 scroll-mt-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-100 tracking-tight">
            Cinematic Reels
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-6">
            Short-form content crafted with cinematic pacing, precise audio, and strong emotional pulls.
          </p>
        </div>

        <div className="relative group mx-auto max-w-[1400px]">
          <button 
            title="Previous Reels"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-2 lg:-ml-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-white backdrop-blur shadow-xl transition-all duration-300 ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:bg-slate-800 hover:scale-110 active:scale-95'}`}
          >
            <motion.div
              animate={{ x: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.div>
          </button>
          
          <button 
            title="Next Reels"
            onClick={nextSlide}
            disabled={currentSlide === reels.length}
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-2 lg:-mr-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-white backdrop-blur shadow-xl transition-all duration-300 ${currentSlide === reels.length ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:bg-slate-800 hover:scale-110 active:scale-95'}`}
          >
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.div>
          </button>

          <div 
            ref={containerRef}
            onScroll={handleScroll}
            className="flex gap-6 sm:gap-8 overflow-x-auto pb-12 pt-4 px-4 sm:px-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {reels.map((reel, index) => (
              <div 
                key={index}
                className="group relative w-[85vw] max-w-[300px] sm:max-w-[320px] shrink-0 snap-center rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/60 shadow-xl hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-500 hover:-translate-y-2 active:translate-y-0 active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90 z-10 pointer-events-none rounded-2xl"></div>
                
                <div className="relative aspect-[9/16] w-full bg-slate-800 overflow-hidden rounded-2xl">
                  {!playing[reel.id] ? (
                    <>
                      <img
                        src={`https://i.ytimg.com/vi/${reel.id}/maxresdefault.jpg`}
                        alt={reel.title}
                        className="absolute inset-0 object-cover w-full h-full brightness-75 group-hover:brightness-90 transition-all duration-300"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${reel.id}/hqdefault.jpg`;
                        }}
                      />
                      <button 
                        onClick={() => setPlaying(v => ({ ...v, [reel.id]: true }))}
                        className="absolute inset-0 flex items-center justify-center z-20 focus:outline-none"
                      >
                        <div className="p-4 bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20 transform group-hover:scale-110 active:scale-95 transition-transform duration-300">
                          <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlaying(v => ({ ...v, [reel.id]: false }));
                        }}
                        className="absolute z-50 top-3 right-3 flex h-10 w-10 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700/80 text-white backdrop-blur-md shadow-xl transition-all duration-300 hover:bg-slate-800 hover:scale-110 active:scale-95"
                        title="Close"
                      >
                        <X className="h-5 w-5 sm:h-4 sm:w-4" />
                      </button>
                      <iframe
                        src={`https://www.youtube.com/embed/${reel.id}?autoplay=1&rel=0&modestbranding=1&controls=1&vq=hd1080&playsinline=1`}
                        className="absolute inset-0 z-10 w-full h-full border-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={reel.title}
                      ></iframe>
                    </>
                  )}
                </div>
              </div>
            ))}

            {/* CTA Final Slide */}
            <div className="w-[300px] sm:w-[320px] shrink-0 snap-center flex flex-col items-center justify-center px-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-md"
              >
                <h3 className="text-2xl sm:text-3xl font-serif mb-4 text-white">More Reels</h3>
                <p className="text-slate-400 mb-6 text-sm">
                  Catch all my latest short-form videos and concepts directly on Instagram and YouTube.
                </p>
                <div className="flex flex-col gap-4 w-full">
                  <a href="https://instagram.com/amazer___" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-medium hover:text-white hover:bg-slate-700 hover:border-slate-500 hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all shadow-lg hover:shadow-cyan-900/20 text-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4 -1.79-4 -4 0 -2.209 1.791 -4 4 -4s4 1.791 4 4c0 2.21 -1.791 4 -4 4zm6.406-11.845c-.796 0 -1.441.645 -1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439 -.645 1.439 -1.44s-.644 -1.44 -1.439 -1.44z"/></svg>
                    @amazer___
                  </a>
                  <a href="https://youtube.com/@amazer_r" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-medium hover:text-white hover:bg-slate-700 hover:border-slate-500 hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all shadow-lg hover:shadow-cyan-900/20 text-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    @amazer_r
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {[...reels, 'c'].map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to item ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 bg-white' 
                  : 'w-2.5 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
