'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import BackToTop from '@/components/ui/BackToTop';

export default function TheQuietQuitPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#0f172a] bg-fixed text-slate-100 selection:bg-blue-900/40">
      {/* Static Cinematic Grid Overlay */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none" />

      {/* Static Volumetric Glow */}
      <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] rounded-full bg-emerald-900/5 blur-[150px] pointer-events-none" />

      {/* Noise/Grain Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-[0.03] z-[100] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference">
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-slate-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>
      </nav>

      {/* 1. Main Playable Video Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        
        {/* Subtle ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto mt-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-6 text-white drop-shadow-lg">
              The Quiet Quit
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              A horror reel series built through tension, atmosphere, failure, experimentation, and AI-assisted filmmaking.
            </p>
          </motion.div>

          {/* Video Player */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="w-full aspect-video bg-[#0a0a0a] border border-white/5 rounded-xl shadow-2xl relative overflow-hidden"
          >
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/1iD31A5zWxw?si=WDZ6G7ZqWAeTzMaX" 
              title="The Quiet Quit" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* 2. Description Section */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 bg-transparent">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Lead Paragraph */}
          <div className="mb-16 md:mb-24">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-serif leading-snug border-l-2 border-red-900/50 pl-6 md:pl-8 py-2">
              “The Quiet Quit” is a horror reel series built around atmosphere, tension, and visual storytelling. Instead of creating a one-off reel meant to disappear after a few scrolls, this project was designed as a connected series with breathing space for narrative, pacing, and cinematic direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-lg text-slate-300 font-light leading-relaxed">
            {/* Column 1 */}
            <div className="space-y-12">
              <div>
                <h3 className="text-white font-serif text-2xl mb-4 border-b border-white/10 pb-4">The Concept</h3>
                <p>
                  Developed around a horror-focused Instagram audience, the intention was never to rely on cheap jump scares. The focus was on creating unsettling visuals, suspenseful pacing, supernatural hints, and a connected narrative across multiple episodes.
                </p>
              </div>

              <div>
                <h3 className="text-white font-serif text-2xl mb-4 border-b border-white/10 pb-4">The Production</h3>
                <p>
                  The entire project was shot inside a single hostel room, turning one limited space into a cinematic environment through careful planning, storyboarding, lighting, framing, and practical effects. Black thread was used for invisible movement effects like shifting objects, while rough phone-shot tests helped refine the visual language.
                </p>
                <p className="mt-4">
                  Production became an intense learning experience. An entire day of footage was scrapped because it looked grainy, flat, and unusable. It was re-shot with improved lighting, exposure, and camera settings, navigating actor availability and academic schedules.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-12 mt-12 md:mt-24">
              <div>
                <h3 className="text-white font-serif text-2xl mb-4 border-b border-white/10 pb-4">Post Production & AI</h3>
                <p>
                  The most challenging stage—involving multiple rounds of editing, restructuring, color grading, and VFX work. Tools like Kling, Gemini, and ChatGPT were used to create supernatural visuals, smoke references, dartboard sequences, and atmospheric elements without overpowering the reality of the footage.
                </p>
                <p className="mt-4">
                  One of the most important sequences involved compositing a rotating dartboard element onto a notebook in Episode 3, carefully adjusting shadows, scale, perspective, and movement to make it feel natural rather than obviously AI-generated.
                </p>
              </div>

              <div>
                <h3 className="text-white font-serif text-2xl mb-4 border-b border-white/10 pb-4">The Outcome</h3>
                <p className="text-slate-100 font-medium tracking-wide">
                  More than just a horror series, “The Quiet Quit” became a personal filmmaking experiment that tested direction, patience, editing, creative problem-solving, and the balance between practical filmmaking and AI-assisted storytelling.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Gallery Section */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Visual Atmosphere</h2>
            <div className="w-12 h-1 bg-red-900/60" />
            <p className="mt-6 text-slate-400 text-lg max-w-2xl">
              Stills and behind-the-scenes glimpses from the production, highlighting lighting, framing, and practical effects within the limited hostel room environment.
            </p>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {/* Gallery Placeholders */}
            {[
              "/images/gallery/the-quiet-quit/Screenshot 2026-04-03 004237.png",
              "/images/gallery/the-quiet-quit/Screenshot 2026-04-03 004344.png",
              "/images/gallery/the-quiet-quit/Screenshot 2026-04-03 004427.png",
              "/images/gallery/the-quiet-quit/Screenshot 2026-04-03 004123.png",
              "/images/gallery/the-quiet-quit/Screenshot 2026-03-30 162409.png",
              "/images/gallery/the-quiet-quit/Still 2026-02-05 184919_1.10.2.jpg",
              "/images/gallery/the-quiet-quit/IMG_20260202_162213254_HDR.jpg",
              "/images/gallery/the-quiet-quit/Screenshot 2026-02-27 192655.png",
              "/images/gallery/the-quiet-quit/Screenshot 2026-02-27 192745.png",
              "/images/gallery/the-quiet-quit/Screenshot 2026-03-03 202638.png",
              "/images/gallery/the-quiet-quit/ChatGPT Image Feb 5, 2026, 05_05_13 PM.png",
              "/images/gallery/the-quiet-quit/ChatGPT Image Feb 5, 2026, 08_30_39 PM.png",
              "/images/gallery/the-quiet-quit/ChatGPT Image Feb 6, 2026, 02_28_26 PM.png",
              "/images/gallery/the-quiet-quit/ChatGPT Image Feb 8, 2026, 05_44_15 PM.png",
              "/images/gallery/the-quiet-quit/Screenshot 2026-02-12 145959-Photoroom.png",
            ].map((imgSrc, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i % 6) * 0.1 }}
                className="group relative overflow-hidden bg-[#111] rounded-lg"
              >
                <Image
                  src={imgSrc}
                  alt={`Gallery Image ${i + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="transition-transform duration-700"
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