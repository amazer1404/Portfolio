'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Lightbulb, Clapperboard, Edit3, Film, Aperture, Video, Frame, PenTool, Mic, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import BackToTop from '@/components/ui/BackToTop';

export default function HonestHostelsProjectPage() {
  const galleryImages = [
    "/images/gallery/honest-hostels/Screenshot 2026-04-27 000657.png",
    "/images/gallery/honest-hostels/Screenshot 2026-04-27 000720.png",
    "/images/gallery/honest-hostels/Screenshot 2026-04-27 000738.png",
    "/images/gallery/honest-hostels/Screenshot 2026-04-27 000813.png",
    "/images/gallery/honest-hostels/Screenshot 2026-04-27 000819.png",
    "/images/gallery/honest-hostels/Screenshot 2026-04-27 000836.png",
    "/images/gallery/honest-hostels/Screenshot 2026-04-27 000942.png",
  ];

  const contributions = [
    { title: "Scriptwriting", icon: <PenTool className="w-5 h-5 text-yellow-500" /> },
    { title: "Content Creation", icon: <Film className="w-5 h-5 text-purple-400" /> },
    { title: "Dialogue Writing", icon: <Mic className="w-5 h-5 text-cyan-400" /> },
    { title: "Satire & Comedy", icon: <Smile className="w-5 h-5 text-red-500" /> },
    { title: "Fast-Paced Editing", icon: <Edit3 className="w-5 h-5 text-slate-300" /> },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#0f172a] bg-fixed text-slate-100 selection:bg-purple-900/40">
      
      {/* 1. Base Static Cinematic Background */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none" />

      {/* 2. Energetic, rhythmic glows for Honest Hostels */}
      <div className="fixed top-[10%] left-1/4 w-[45vw] h-[45vw] rounded-full bg-orange-600/10 blur-[180px] pointer-events-none mix-blend-screen" />
      <div className="fixed bottom-[20%] right-1/4 w-[50vw] h-[50vw] rounded-full bg-red-900/10 blur-[180px] pointer-events-none mix-blend-screen" />

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

      {/* SECTION 1: Main Playable Video */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-24 px-4 sm:px-6 lg:px-8">
        
        {/* Glow focused entirely around the video frame */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-4xl h-[40vh] bg-gradient-to-r from-orange-700/20 to-red-800/25 rounded-[100px] blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto mt-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center mb-8"
          >
            <span className="inline-block text-xs md:text-sm font-medium tracking-[0.2em] text-orange-400 mb-6 uppercase">
              Comedy Sketch / Writing Project
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter mb-4 text-slate-100 drop-shadow-2xl">
              Honest Hostels
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="w-full aspect-video relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(234,88,12,0.15)] group border border-slate-800/60 bg-[#050505]"
          >
            {/* Hover Frame Glow Effect */}
            <div className="absolute inset-0 z-20 pointer-events-none border border-white/5 group-hover:border-white/20 rounded-3xl transition-colors duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
            
            <iframe 
              className="relative z-30 w-full h-full grayscale-[5%] group-hover:grayscale-0 transition-all duration-1000"
              src="https://www.youtube.com/embed/IvqAgaYm71U" 
              title="Honest Hostels Video" 
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
              Exposing Relatable Hostel Struggles
            </h2>
            
            <div className="mt-16 text-lg text-slate-300 font-light leading-relaxed space-y-8">
              <p>
                <strong className="text-white font-medium">Honest Hostels</strong> is a satire-based comedy project inspired by AIB style sketches, exposing the relatable struggles students face in college hostels.
              </p>
              <p>
                It focuses primarily on <strong className="text-white">scriptwriting, humour, Hinglish dialogues, comedic timing, and fast-paced editing</strong> to capture the authentic essence of college life in a highly engaging manner.
              </p>
              <p className="text-white italic border-l border-white/20 pl-4">
                This project showcases my versatility as a creator beyond cinematic videos, highlighting my humour, writing strength, and engaging social commentary.
              </p>
            </div>
            
            {/* Contributions Cards */}
            <div className="mt-24">
              <span className="block text-sm font-medium tracking-[0.2em] text-slate-500 mb-8 uppercase text-center md:text-left">
                Key Skills & Contributions
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {contributions.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col items-center justify-center p-6 bg-slate-900/20 border border-slate-800/40 rounded-xl hover:bg-slate-800/40 hover:border-slate-700/50 transition-colors backdrop-blur-sm group"
                  >
                    <div className="mb-3 p-3 bg-[#0a0a0a] rounded-full group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.2)] transition-all duration-500">
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
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Behind the Scenes</h2>
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
                  alt={`Honest Hostels Visual ${idx + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 group-hover:scale-[1.02]"
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
