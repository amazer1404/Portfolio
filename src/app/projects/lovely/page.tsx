'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clapperboard, Camera, Edit3, PaintBucket, Lightbulb, Heart, Video, MonitorPlay } from 'lucide-react';
import { motion } from 'framer-motion';
import BackToTop from '@/components/ui/BackToTop';

export default function LovelyProjectPage() {
  const galleryImages = [
    "/images/gallery/lovely/cover_image.jpeg",
    "/images/gallery/lovely/Screenshot 2026-04-03 040828.png",
    "/images/gallery/lovely/Screenshot 2026-04-03 040838.png",
    "/images/gallery/lovely/Screenshot 2026-04-03 040850.png",
    "/images/gallery/lovely/Screenshot 2026-04-03 040900.png",
    "/images/gallery/lovely/Screenshot 2026-04-03 040909.png"
  ];

  const contributions = [
    { title: "Direction", icon: <Clapperboard className="w-5 h-5 text-yellow-500" /> },
    { title: "Camera Choreography", icon: <Camera className="w-5 h-5 text-cyan-400" /> },
    { title: "Editing", icon: <Edit3 className="w-5 h-5 text-slate-300" /> },
    { title: "Color Grading", icon: <PaintBucket className="w-5 h-5 text-cyan-500" /> },
    { title: "Lighting Design", icon: <Lightbulb className="w-5 h-5 text-yellow-400" /> },
    { title: "Emotional Storytelling", icon: <Heart className="w-5 h-5 text-red-500" /> },
    { title: "One-Take Direction", icon: <Video className="w-5 h-5 text-cyan-300" /> },
    { title: "DaVinci Resolve", icon: <MonitorPlay className="w-5 h-5 text-slate-300" /> },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#0f172a] bg-fixed text-slate-100 selection:bg-cyan-900/40">
      
      {/* 1. Base Static Cinematic Background (Matches Portfolio) */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none" />

      {/* 2. Custom Muted Yellow/Cyan Ambient Glows for Lovely */}
      <div className="fixed top-[10%] left-1/4 w-[45vw] h-[45vw] rounded-full bg-yellow-600/10 blur-[180px] pointer-events-none mix-blend-screen" />
      <div className="fixed bottom-[20%] right-1/4 w-[50vw] h-[50vw] rounded-full bg-cyan-900/10 blur-[180px] pointer-events-none mix-blend-screen" />

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-4xl h-[40vh] bg-gradient-to-r from-yellow-700/10 to-cyan-800/15 rounded-[100px] blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto mt-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center mb-8"
          >
            <span className="inline-block text-xs md:text-sm font-medium tracking-[0.2em] text-cyan-400 mb-6 uppercase">
              Dance Film &nbsp;/&nbsp; One-Take Performance
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter mb-4 text-slate-100 drop-shadow-2xl">
              Lovely
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
              className="relative z-30 w-full h-full grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000"
              src="https://www.youtube.com/embed/Uuc270vow-M?si=fCehpFSDO7zPAm7E" 
              title="Lovely Contemporary Dance Film" 
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
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 border-l-2 border-cyan-900/50 pl-6">
              When Movement Became Emotion
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16 text-lg text-slate-300 font-light leading-relaxed">
              <div className="space-y-8">
                <p>
                  <strong className="text-white font-medium">Lovely</strong> was a contemporary dance film created on the song “Lovely” by Billie Eilish and performed by Safal Tripathi.
                </p>
                <p>
                  The goal was never just to record movement — it was to translate emotion visually. The film focused on sadness, isolation, emotional chaos, and the feeling of being trapped inside your own mind.
                </p>
                <p>
                  Before the shoot, I studied emotional dance films, reels, and movie scenes to understand how emotions could be framed through movement, lighting, and camera language. The shoot was originally planned during golden hour, but the emotional tone of the song demanded darkness. So the entire concept changed.
                </p>
              </div>

              <div className="space-y-8">
                <p>
                  We shot the film at night with limited lighting. Warm yellow light was used to reveal expressions, while a cold blue-green tone added emotional tension and visual contrast. The performance was intentionally shot in one continuous take. No cuts, no resets — because emotions do not pause.
                </p>
                <p>
                  The camera movement was intentionally unstable and expressive. The shakes, tracking movements, and sudden shifts were designed to reflect the emotional disturbance of the character. We took four complete takes and one additional take for close-ups. During editing, I focused on preserving raw emotion, allowing certain moments to breathe while using close-up shots to intensify expressions.
                </p>
                <p className="text-white italic border-l border-white/20 pl-4">
                  This project taught me that limitations do not reduce creativity — they sharpen it.
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
                    <div className="mb-3 p-3 bg-[#0a0a0a] rounded-full group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-500">
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
                  alt={`Lovely Project Image ${idx + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="transition-all duration-700"
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
