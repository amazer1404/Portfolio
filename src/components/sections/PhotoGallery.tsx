"use client";

import Image from 'next/image'
import { useState } from 'react'

interface PhotoGalleryProps {
  images: string[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="gallery" className="relative z-10 w-full overflow-hidden bg-transparent px-4 py-16 sm:py-20 lg:py-32 sm:px-6 lg:px-8 scroll-mt-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-100 tracking-tight">
          Photo Gallery
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mb-6"></div>
        <p className="mb-12 lg:mb-16 text-xl text-slate-300 max-w-2xl font-light">
          Behind-the-scenes, editing workflows, and cinematic stills.
        </p>

        {/* Masonry Layout with Mobile/Tablet Collapse */}
        <div className={`relative transition-all duration-700 ease-in-out ${!isExpanded ? 'max-h-[800px] sm:max-h-[1000px] lg:max-h-none overflow-hidden' : ''}`}>
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {images.map((src, i) => (
              <div
                key={src}
                className="relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800/80 shadow-lg inline-block w-full group"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
            ))}
          </div>

          {/* Fade Overlay & Expand Button for Mobile/Tablet */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent flex items-end justify-center pb-2 lg:hidden">
              <button 
                onClick={() => setIsExpanded(true)}
                className="group flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-8 py-4 text-sm font-semibold tracking-wider text-slate-200 backdrop-blur-md transition-all hover:bg-slate-800 hover:border-slate-500 hover:text-white shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]"
              >
                View Full Gallery
              </button>
            </div>
          )}
        </div>

        {/* Show Less Button */}
        {isExpanded && (
          <div className="mt-12 flex justify-center lg:hidden">
            <button 
              onClick={() => setIsExpanded(false)}
              className="group flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/40 px-8 py-4 text-sm font-semibold tracking-wider text-slate-200 backdrop-blur-md transition-all hover:bg-slate-800 hover:border-slate-500 hover:text-white"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
