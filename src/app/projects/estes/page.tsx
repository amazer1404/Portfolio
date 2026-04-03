'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clapperboard, Video, User, Headphones, Edit3, Camera, CloudFog, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import BackToTop from '@/components/ui/BackToTop';

export default function EstesProjectPage() {
  const galleryImages = [
    "/images/gallery/estes/cover_image.jpg",
    "/images/gallery/estes/Still 2024-12-25 224748_4.1.1.jpg",
    "/images/gallery/estes/Still 2024-12-25 224912_1.4.2.jpg",
    "/images/gallery/estes/Still 2024-12-25 224950_1.4.4.jpg",
    "/images/gallery/estes/Still 2024-12-25 225124_1.5.5.jpg",
    "/images/gallery/estes/Still 2024-12-25 225229_1.2.2.jpg",
    "/images/gallery/estes/Still 2024-12-25 225241_1.2.3.jpg",
    "/images/gallery/estes/Still 2024-12-25 225303_1.2.4.jpg",
    "/images/gallery/estes/Still 2024-12-25 225434_1.3.2.jpg"
  ];

  const contributions = [
    { title: "Direction", icon: <Clapperboard className="w-5 h-5 text-zinc-400" /> },
    { title: "Acting", icon: <User className="w-5 h-5 text-red-800" /> },
    { title: "Sound Design", icon: <Headphones className="w-5 h-5 text-zinc-500" /> },
    { title: "Self Shooting", icon: <Camera className="w-5 h-5 text-stone-400" /> },
    { title: "Horror Storytelling", icon: <Brain className="w-5 h-5 text-red-900" /> },
    { title: "Editing", icon: <Edit3 className="w-5 h-5 text-zinc-600" /> },
    { title: "Camera Angles", icon: <Video className="w-5 h-5 text-neutral-500" /> },
    { title: "Atmosphere Building", icon: <CloudFog className="w-5 h-5 text-stone-500" /> },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100 selection:bg-red-900/30">
      
      {/* 1. Base Static Cinematic Background (Minimal & Dark) */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none" />

      {/* 2. Unsettling Dark / Desaturated Ambient Glows */}
      <div className="fixed top-[10%] left-1/4 w-[45vw] h-[45vw] rounded-full bg-zinc-900/40 blur-[180px] pointer-events-none mix-blend-screen" />
      <div className="fixed bottom-[20%] right-1/4 w-[50vw] h-[50vw] rounded-full bg-red-900/5 blur-[200px] pointer-events-none mix-blend-screen" />

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
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-zinc-400 hover:text-white transition-colors drop-shadow-md"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>
      </nav>

      {/* SECTION 1: Main Playable Video (Hero) */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-24 px-4 sm:px-6 lg:px-8">
        
        {/* Glow focused entirely around the video frame */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-4xl h-[40vh] bg-gradient-to-r from-red-900/10 to-zinc-900/20 rounded-[100px] blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto mt-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center mb-8"
          >
            <span className="inline-block text-xs md:text-sm font-medium tracking-[0.2em] text-red-900/80 mb-6 uppercase">
              Horror Short Film / Sound-Driven Experience
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter mb-4 text-zinc-200 drop-shadow-2xl">
              ESTES
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="w-full aspect-video relative rounded-2xl overflow-hidden shadow-2xl group border border-zinc-800/40 bg-[#020202]"
          >
            {/* Hover Frame Glow Effect */}
            <div className="absolute inset-0 z-20 pointer-events-none border border-white/5 group-hover:border-red-900/30 rounded-2xl transition-colors duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 z-10 pointer-events-none" />
            
            <iframe 
              className="relative z-30 w-full h-full grayscale-[25%] group-hover:grayscale-0 transition-all duration-1000"
              src="https://www.youtube.com/embed/MdnC_E1wvOs" 
              title="ESTES Horror Short Film" 
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
            <h2 className="text-3xl md:text-5xl font-serif text-zinc-200 mb-6 border-l-2 border-red-900/50 pl-6">
              Building Fear Through Sound
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16 text-lg text-zinc-400 font-light leading-relaxed">
              <div className="space-y-8">
                <p>
                  <strong className="text-zinc-200 font-medium">ESTES</strong> was my first short film and one of my earliest horror projects.
                </p>
                <p>
                  Unlike traditional horror films, there was no ghost, monster, or visible entity shown on screen. The entire experience depended on sound design, atmosphere, and imagination.
                </p>
                <p>
                  The film was inspired by the feeling of going through an Estes test to find out whether there is an entity present or not. The goal was to make the viewer feel immersed in that fear without actually showing anything.
                </p>
                <p>
                  Sound design became the core of the entire project. Every small sound, silence, movement, and background layer was used to create tension and uneasiness.
                </p>
              </div>

              <div className="space-y-8">
                <p>
                  Since I only had one phone camera, I shot the same scenes multiple times from different angles to make the film feel more dynamic and cinematic. Self-shooting also became an important part of the process.
                </p>
                <p className="text-zinc-300 italic border-l border-zinc-700 pl-4">
                  This project taught me how powerful sound can be in storytelling, especially in horror. It showed me that what you do not show can sometimes be scarier than what you do.
                </p>
                <p className="text-sm font-medium tracking-widest uppercase text-red-900/70 mt-6">
                  The final film was around 2 minutes long and still has around 8.3K views on YouTube.
                </p>
              </div>
            </div>
            
            {/* Contributions Cards */}
            <div className="mt-24">
              <span className="block text-sm font-medium tracking-[0.2em] text-zinc-600 mb-8 uppercase text-center md:text-left">
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
                    className="flex flex-col items-center justify-center p-6 bg-zinc-900/20 border border-zinc-800/40 rounded-xl hover:bg-zinc-800/40 hover:border-zinc-700/50 transition-colors backdrop-blur-sm group"
                  >
                    <div className="mb-3 p-3 bg-[#0a0a0a] rounded-full group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(127,29,29,0.15)] transition-all duration-500">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-zinc-400 text-center tracking-wide">
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
            <h2 className="text-3xl md:text-5xl font-serif text-zinc-200 mb-4">Isolation</h2>
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
                  alt={`Estes Visual ${idx + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover opacity-70 hover:opacity-100 transition-opacity duration-700 group-hover:scale-[1.02]"
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