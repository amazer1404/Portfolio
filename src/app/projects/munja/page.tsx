'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Film, Edit3, MonitorPlay, Eye, Volume2, Wand2, PaintBucket, Clapperboard } from 'lucide-react';
import { motion } from 'framer-motion';
import BackToTop from '@/components/ui/BackToTop';

export default function MunjaProjectPage() {
  const galleryImages = [
    "/images/gallery/munja/cover_image.png",
    "/images/gallery/munja/Screenshot 2026-04-03 021954.png",
    "/images/gallery/munja/Screenshot 2026-04-03 022813.png",
    "/images/gallery/munja/Screenshot 2026-04-03 022901.png",
    "/images/gallery/munja/Still 2025-12-21 155356_1.3.1.png",
    "/images/gallery/munja/Still 2025-12-21 155356_1.7.1.png",
    "/images/gallery/munja/Still 2025-12-21 155356_1.8.1.png",
    "/images/gallery/munja/Still 2025-12-21 155356_1.9.1.png",
    "/images/gallery/munja/Still 2025-12-21 155356_4.1.1.png",
    "/images/gallery/munja/Still 2025-12-21 200604_2.1.1.png"
  ];

  const contributions = [
    { title: "Direction", icon: <Clapperboard className="w-5 h-5 text-red-500" /> },
    { title: "Acting", icon: <Eye className="w-5 h-5 text-blue-400" /> },
    { title: "Editing", icon: <Edit3 className="w-5 h-5 text-slate-300" /> },
    { title: "Sound Design", icon: <Volume2 className="w-5 h-5 text-red-400" /> },
    { title: "Storyboarding", icon: <Film className="w-5 h-5 text-slate-400" /> },
    { title: "Color Grading", icon: <PaintBucket className="w-5 h-5 text-blue-500" /> },
    { title: "AI + Live Action", icon: <Wand2 className="w-5 h-5 text-red-400" /> },
    { title: "DaVinci Resolve", icon: <MonitorPlay className="w-5 h-5 text-slate-300" /> },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#0f172a] bg-fixed text-slate-100 selection:bg-red-900/40">
      
      {/* 1. Base Static Cinematic Background (Matches Portfolio) */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none" />

      {/* 2. Custom Muted Red-Blue Ambient Glows for MUNJA */}
      <div className="fixed top-[10%] left-1/4 w-[45vw] h-[45vw] rounded-full bg-red-900/10 blur-[160px] pointer-events-none mix-blend-screen" />
      <div className="fixed bottom-[20%] right-1/4 w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none mix-blend-screen" />

      {/* Noise/Grain Texture */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-[0.035] z-[100] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference">
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-slate-300 hover:text-white transition-colors drop-shadow-md"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>
      </nav>

      {/* SECTION 1: Main Playable Video (Hero) */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-24 px-4 sm:px-6 lg:px-8">
        
        {/* Glow focused entirely around the video frame */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-4xl h-[40vh] bg-gradient-to-r from-red-900/15 to-blue-900/15 rounded-[100px] blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto mt-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center mb-8"
          >
            <span className="inline-block text-xs md:text-sm font-medium tracking-[0.2em] text-red-400 mb-6 uppercase">
              Psychological Horror &nbsp;/&nbsp; AI + Live Action
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter mb-4 text-slate-100 drop-shadow-2xl">
              MUNJA
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="w-full aspect-[9/16] sm:aspect-[4/5] md:aspect-video relative rounded-2xl overflow-hidden shadow-2xl group border border-slate-800/60 bg-[#050505]"
          >
            {/* Hover Frame Glow Effect */}
            <div className="absolute inset-0 z-20 pointer-events-none border border-white/5 group-hover:border-white/20 rounded-2xl transition-colors duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
            
            <iframe 
              className="relative z-30 w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              src="https://www.youtube.com/embed/30ipPD0SicI?si=12Z5a373QCH1EiT5" 
              title="MUNJA Aesthetic Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Description & Contributions */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 border-l-2 border-red-900/50 pl-6">
              Merging Sleep, Fear, and Reality
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16 text-lg text-slate-300 font-light leading-relaxed">
              <div className="space-y-8">
                <p>
                  <strong className="text-white font-medium">MUNJA</strong> was one of my most personal projects, inspired by a real experience and transformed into a psychological horror reel.
                </p>
                <p>
                  The process started with selecting a music track and carefully calculating the beats to structure the pacing, transitions, and emotional intensity of the reel. Since the concept was heavily story-driven, I first developed a storyboard to map every shot and movement.
                </p>
                <p>
                  The story follows a man sleepwalking on an empty road at night. He suddenly wakes up in the middle of the street, confused and disoriented. He rushes back to his house, enters his room, and slowly realizes that something is sitting beside him — a Munja.
                </p>
              </div>

              <div className="space-y-8">
                <p>
                  The entire project was edited in DaVinci Resolve, with complete sound design, direction, acting, and color grading handled personally. The visual style was intentionally designed to feel eerie and different, using only selective red and blue tones with reduced saturation.
                </p>
                <p>
                  One of the most unique aspects of this project was blending AI-generated elements with live-action footage. I combined AI visuals with practical shots using my brother to create a final look that felt more realistic, unsettling, and cinematic.
                </p>
                <p>
                  The reel was initially created in a 4:5 aspect ratio to feel unique on Instagram, and later adapted into a 9:16 version to test its performance. Interestingly, the 9:16 version performed even better.
                </p>
              </div>
            </div>
            
            {/* Contributions Cards */}
            <div className="mt-24">
              <span className="block text-sm font-medium tracking-[0.2em] text-slate-500 mb-8 uppercase text-center md:text-left">
                Creative Contributions
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {contributions.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col items-center justify-center p-6 bg-slate-900/20 border border-slate-800/40 rounded-xl hover:bg-slate-800/40 hover:border-slate-700/50 transition-colors backdrop-blur-sm group"
                  >
                    <div className="mb-3 p-3 bg-[#0a0a0a] rounded-full group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all duration-500">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-300 text-center tracking-wide">
                      {item.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Gallery Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Behind the Shadows</h2>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6 px-2">
            {galleryImages.map((imgSrc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (idx % 4) * 0.1 }}
                className="relative overflow-hidden bg-[#050505] rounded-xl border border-white/5"
              >
                <Image
                  src={imgSrc}
                  alt={`Munja Project Image ${idx + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer Area padding */}
      <div className="h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />

      {/* Persistent Back to Top Button */}
      <BackToTop />
    </div>
  );
}