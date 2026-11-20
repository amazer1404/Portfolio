'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { categoryVideos } from '@/data/projects';

type Props = {
  category: 'AI Videos' | 'Clients & Assignments';
};

export default function CategoryVideoCarousel({ category }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const videos = categoryVideos.filter(video => video.categories.includes(category));

  const updateScrollState = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollLeft(track.scrollLeft > 3);
    setCanScrollRight(track.scrollLeft < track.scrollWidth - track.clientWidth - 3);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: 0, behavior: 'auto' });
    setPlayingVideo(null);
    updateScrollState();

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(track);
    window.addEventListener('resize', updateScrollState);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateScrollState);
    };
  }, [category, videos.length]);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap) || 12;
    const distance = card ? card.clientWidth + gap : track.clientWidth * 0.82;
    track.scrollBy({ left: distance * direction, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        aria-label="Scroll videos left"
        title="Previous videos"
        onClick={() => scrollByCard(-1)}
        disabled={!canScrollLeft}
        className={`absolute left-1 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#D18BA2]/25 bg-[#B85C78] text-white backdrop-blur-md transition-all duration-300 sm:flex md:left-2 lg:left-3 ${
          canScrollLeft ? 'opacity-100 hover:scale-105 hover:border-[#F3E4E9]/40 hover:bg-[#C47791] active:scale-95' : 'pointer-events-none opacity-0'
        }`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Scroll videos right"
        title="Next videos"
        onClick={() => scrollByCard(1)}
        disabled={!canScrollRight}
        className={`absolute right-1 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#D18BA2]/25 bg-[#B85C78] text-white backdrop-blur-md transition-all duration-300 sm:flex md:right-2 lg:right-3 ${
          canScrollRight ? 'opacity-100 hover:scale-105 hover:border-[#F3E4E9]/40 hover:bg-[#C47791] active:scale-95' : 'pointer-events-none opacity-0'
        }`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div
        ref={trackRef}
        onScroll={updateScrollState}
        className="scrollbar-hide flex w-full snap-x snap-mandatory gap-3 overflow-x-auto pb-3 px-1 scroll-pl-1 scroll-smooth sm:gap-4 sm:px-12 sm:scroll-pl-12 md:grid md:auto-cols-[min(31vw,390px)] md:grid-flow-col md:grid-rows-2 md:gap-x-5 md:gap-y-4 md:px-14 md:scroll-pl-14"
      >
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="relative aspect-video w-[78vw] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900 sm:w-[45vw] sm:max-w-[380px] md:w-full md:max-w-none"
          >
            {playingVideo === video.id ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={video.title}
              />
            ) : (
              <button type="button" onClick={() => setPlayingVideo(video.id)} className="group absolute inset-0 flex items-center justify-center focus:outline-none" aria-label={`Play ${video.title}`}>
                <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <span className="absolute inset-0 bg-slate-950/10 transition-colors group-hover:bg-slate-950/25" />
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                  <svg className="ml-1 h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </span>
              </button>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between px-1 sm:hidden">
        <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300">
          Swipe to explore
          <ChevronRight className="h-4 w-4 text-[#D18BA2]" />
        </span>
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Scroll videos left" onClick={() => scrollByCard(-1)} disabled={!canScrollLeft} className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#D18BA2]/25 bg-[#B85C78] text-white transition-all duration-300 hover:border-[#F3E4E9]/40 hover:bg-[#C47791] active:scale-95 ${canScrollLeft ? 'opacity-100' : 'pointer-events-none opacity-30'}`}>
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button type="button" aria-label="Scroll videos right" onClick={() => scrollByCard(1)} disabled={!canScrollRight} className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#D18BA2]/25 bg-[#B85C78] text-white transition-all duration-300 hover:border-[#F3E4E9]/40 hover:bg-[#C47791] active:scale-95 ${canScrollRight ? 'opacity-100' : 'pointer-events-none opacity-30'}`}>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
