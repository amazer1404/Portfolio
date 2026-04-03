'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clapperboard, Headphones, Edit3, PaintBucket, Scissors, Sparkles, Eye, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import BackToTop from '@/components/ui/BackToTop';

export default function SleepParalysisProjectPage() {
  const galleryImages = [
    "/images/gallery/sleep-paralysis/cover_image (2).png",
    "/images/gallery/sleep-paralysis/cover_image.png",
    "/images/gallery/sleep-paralysis/Screenshot 2026-04-03 135943.png",
    "/images/gallery/sleep-paralysis/Screenshot 2026-04-03 135958.png",
    "/images/gallery/sleep-paralysis/Screenshot 2026-04-03 140023.png",
    "/images/gallery/sleep-paralysis/Screenshot 2026-04-03 140055.png",
    "/images/gallery/sleep-paralysis/Screenshot 2026-04-03 140126.png",
    "/images/gallery/sleep-paralysis/Screenshot 2026-04-03 140316.png",
    "/images/gallery/sleep-paralysis/Screenshot 2026-04-03 140347.png",
    "/images/gallery/sleep-paralysis/Screenshot 2026-04-03 140439.png",
    "/images/gallery/sleep-paralysis/Screenshot 2026-04-03 140511.png"
  ];

  const contributions = [
    { title: "Direction", icon: <Clapperboard className="w-5 h-5 text-blue-400" /> },
    { title: "Sound Design", icon: <Headphones className="w-5 h-5 text-cyan-500" /> },
    { title: "Editing", icon: <Edit3 className="w-5 h-5 text-slate-300" /> },
    { title: "Color Grading", icon: <PaintBucket className="w-5 h-5 text-indigo-400" /> },
    { title: "Rotoscoping", icon: <Scissors className="w-5 h-5 text-slate-400" /> },
    { title: "Visual Effects", icon: <Sparkles className="w-5 h-5 text-teal-400" /> },
    { title: "POV Shot Design", icon: <Eye className="w-5 h-5 text-sky-300" /> },
    { title: "Horror Storytelling", icon: <Brain className="w-5 h-5 text-blue-800" /> },
  ];

  return (
    <div className="relative min-h-screen bg-[#020408] text-slate-100 selection:bg-blue-900/40">
      
      {/* 1. Base Static Cinematic Background (Minimal & Dark) */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none" />

      {/* 2. Unsettling Dark Blue / Desaturated Ambient Glows */}
      <div className="fixed top-[10%] left-1/4 w-[45vw] h-[45vw] rounded-full bg-blue-900/10 blur-[180px] pointer-events-none mix-blend-screen" />
      <div className="fixed bottom-[20%] right-1/4 w-[50vw] h-[50vw] rounded-full bg-indigo-900/10 blur-[200px] pointer-events-none mix-blend-screen" />

      {/* Noise/Grain Texture (Slightly heavier for horror feel) */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-[0.05] z-[100] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference">
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-slate-400 hover:text-white transition-colors drop-shadow-md"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>
      </nav>

      {/* SECTION 1: Main Playable Video (Hero) */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-24 px-4 sm:px-6 lg:px-8">
        
        {/* Glow focused entirely around the video frame */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-4xl h-[40vh] bg-gradient-to-r from-blue-900/10 to-transparent rounded-[100px] blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto mt-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center mb-8"
          >
            <span className="inline-block text-xs md:text-sm font-medium tracking-[0.2em] text-blue-400/70 mb-6 uppercase">
              Psychological Horror / Sleep Paralysis Experience
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter mb-4 text-slate-200 drop-shadow-2xl">
              Sleep Paralysis
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="w-full aspect-video relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(30,58,138,0.15)] group border border-slate-800/40 bg-[#020202]"
          >
            {/* Hover Frame Glow Effect */}
            <div className="absolute inset-0 z-20 pointer-events-none border border-white/5 group-hover:border-blue-500/20 rounded-2xl transition-colors duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 z-10 pointer-events-none" />
            
            <iframe 
              className="relative z-30 w-full h-full grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000"
              src="https://www.youtube.com/embed/HiHYKftDO_4" 
              title="Sleep Paralysis Psychological Horror" 
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
            <h2 className="text-3xl md:text-5xl font-serif text-slate-200 mb-6 border-l-2 border-blue-900/50 pl-6">
              Recreating the Fear of Sleep Paralysis
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16 text-lg text-slate-400 font-light leading-relaxed">
              <div className="space-y-8">
                <p>
                  <strong className="text-slate-200 font-medium">This short film</strong> was based on the experience of sleep paralysis and the kind of fear people describe when they go through it.
                </p>
                <p>
                  The goal was to make the viewer feel trapped, helpless, and uncomfortable — as if they were experiencing it themselves.
                </p>
                <p>
                  Sound design played a major role in creating that atmosphere. Heavy breathing sounds, heartbeats, silence, and subtle background layers were used to build tension and make the experience feel more real and unsettling.
                </p>
              </div>

              <div className="space-y-8">
                <p>
                  The original footage was shot using bright orange lighting, but during color grading, I transformed it into a colder blue night-time look to better match the horror atmosphere.
                </p>
                <p>
                  I also used multiple visual effects, overlays, and rotoscoping techniques to strengthen the experience. Rotoscoping was used to create the entity, while overlays helped create the eye-opening POV shots and the disoriented feeling of waking up unable to move.
                </p>
                <p className="text-slate-300 italic border-l border-slate-700 pl-4">
                  This project taught me how sound, color grading, and small visual effects can completely change the emotional impact of a scene.
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
                    className="flex flex-col items-center justify-center p-6 bg-slate-900/20 border border-slate-800/60 rounded-xl hover:bg-slate-800/40 hover:border-slate-700/80 transition-colors backdrop-blur-sm group"
                  >
                    <div className="mb-3 p-3 bg-[#0a0a0a] rounded-full group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(30,58,138,0.25)] transition-all duration-500">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-400 text-center tracking-wide group-hover:text-slate-300 transition-colors">
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
            <h2 className="text-3xl md:text-5xl font-serif text-slate-200 mb-4">Trapped</h2>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 px-2">
            {galleryImages.map((imgSrc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (idx % 4) * 0.1 }}
                className="relative overflow-hidden bg-[#050505] rounded-xl border border-white/5 break-inside-avoid group"
              >
                <Image
                  src={imgSrc}
                  alt={`Sleep Paralysis Visual ${idx + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover opacity-70 hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}