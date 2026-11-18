'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clapperboard, Edit3, Camera, PenTool, Eye, Lightbulb, BookOpenText, Film } from 'lucide-react';
import { motion } from 'framer-motion';
import BackToTop from '@/components/ui/BackToTop';

export default function ShiuliProjectPage() {
  const galleryImages = [
    '/images/gallery/shiuli-the-october-story/Still 2026-11-06 131007_1.1.1.jpg',
    '/images/gallery/shiuli-the-october-story/Still 2026-11-06 131007_1.1.2.jpg',
    '/images/gallery/shiuli-the-october-story/Still 2026-11-06 131007_1.1.3.jpg',
    '/images/gallery/shiuli-the-october-story/Still 2026-11-06 131007_1.1.4.jpg',
    '/images/gallery/shiuli-the-october-story/Still 2026-11-06 131007_1.1.5.jpg',
    '/images/gallery/shiuli-the-october-story/WhatsApp Image 2026-11-06 at 1.57.48 PM.jpeg',
    '/images/gallery/shiuli-the-october-story/WhatsApp Image 2026-11-06 at 1.57.49 PM.jpeg'
  ];

  const contributions = [
    { title: 'Story Writing', icon: <BookOpenText className="w-5 h-5 text-slate-200" /> },
    { title: 'Screenwriting', icon: <PenTool className="w-5 h-5 text-slate-300" /> },
    { title: 'Scriptwriting', icon: <Film className="w-5 h-5 text-cyan-300" /> },
    { title: 'Narrative Development', icon: <Eye className="w-5 h-5 text-sky-300" /> },
    { title: 'Visual Storytelling', icon: <Eye className="w-5 h-5 text-cyan-300" /> },
    { title: 'Direction', icon: <Clapperboard className="w-5 h-5 text-cyan-300" /> },
    { title: 'Video Editing', icon: <Edit3 className="w-5 h-5 text-slate-300" /> },
    { title: 'Cinematography', icon: <Camera className="w-5 h-5 text-cyan-400" /> },
    { title: 'Creative Direction', icon: <Lightbulb className="w-5 h-5 text-cyan-200" /> }
  ];

  return (
    <div className="relative min-h-screen bg-[#03070a] text-slate-100 selection:bg-cyan-900/40">
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none" />
      <div className="fixed top-[8%] left-1/4 w-[45vw] h-[45vw] rounded-full bg-cyan-900/10 blur-[180px] pointer-events-none mix-blend-screen" />
      <div className="fixed bottom-[15%] right-1/4 w-[50vw] h-[50vw] rounded-full bg-slate-500/10 blur-[200px] pointer-events-none mix-blend-screen" />

      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04] z-[100] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <nav className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-slate-400 hover:text-white transition-colors drop-shadow-md"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>
      </nav>

      <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-6xl h-[50vh] bg-gradient-to-r from-cyan-900/10 to-slate-600/10 rounded-[100px] blur-[140px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center mb-8"
          >
            <span className="inline-block text-xs md:text-sm font-medium tracking-[0.2em] text-cyan-300/80 mb-6 uppercase">
              Short Film / Romance / Drama
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter mb-4 text-slate-100 drop-shadow-2xl">
              SHIULI
            </h1>
            <p className="text-lg md:text-xl font-serif text-slate-400">The October Story</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full"
          >
            <div>
              <p className="mb-3 text-center text-xs md:text-sm font-medium tracking-[0.16em] uppercase text-slate-300">
                Watch Short Film
              </p>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.08)] group border border-slate-700/50 bg-[#020202]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/63Iwows87Ms"
                  title="SHIULI – The October Story Short Film"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div>
              <p className="mb-3 text-center text-xs md:text-sm font-medium tracking-[0.16em] uppercase text-slate-300">
                Watch Official Trailer
              </p>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(148,163,184,0.08)] group border border-slate-700/50 bg-[#020202]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/3kEP9AClfwY"
                  title="SHIULI – The October Story Official Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-slate-100 mb-6 border-l-2 border-cyan-900/50 pl-6">
              An Original Story Told Between Moments
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16 text-lg text-slate-400 font-light leading-relaxed">
              <div className="space-y-8">
                <p>
                  <strong className="text-slate-100 font-medium">I conceptualised and wrote the original story and screenplay for SHIULI – The October Story.</strong> The 9-minute romantic drama was shaped around memory, love, loss, and the small moments that continue to live within us.
                </p>
                <p>
                  The narrative structure was developed to move emotionally rather than rely on exposition. I translated feelings into scenes, visual motifs, character beats, expressions, and meaningful silences, with the screenplay written primarily to communicate through action and performance.
                </p>
              </div>

              <div className="space-y-8">
                <p>
                  Almost the entire film was deliberately written without dialogue. Visual storytelling, music, performances, and atmosphere carry the relationship from beginning to end. The single piece of dialogue at the conclusion was carefully placed to make the emotional meaning of the story feel earned and memorable.
                </p>
                <p>
                  As Writer, Director, and Editor, I shaped the screenplay and carried its emotion through direction and post-production. This project demonstrates my ability to create emotionally engaging stories beyond the horror genre.
                </p>
                <p className="text-slate-200 italic border-l border-cyan-800/60 pl-4">
                  The separate cinematic trailer used an AI-assisted score that connected strongly with audiences and contributed to a noticeable increase in subscribers after the film&apos;s release.
                </p>
              </div>
            </div>

            <div className="mt-24">
              <span className="block text-sm font-medium tracking-[0.2em] text-slate-500 mb-8 uppercase text-center md:text-left">
                Creative Contributions
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {contributions.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col items-center justify-center p-6 bg-slate-900/20 border border-slate-800/60 rounded-xl hover:bg-slate-800/40 hover:border-cyan-800/50 transition-colors backdrop-blur-sm group"
                  >
                    <div className="mb-3 p-3 bg-[#080b0d] rounded-full group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.12)] transition-all duration-500">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-400 text-center tracking-wide group-hover:text-slate-200 transition-colors">
                      {item.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-slate-100 mb-4">A Winter in Memory</h2>
          </motion.div>

          <div className="columns-2 sm:columns-2 lg:columns-3 gap-2 md:gap-6 space-y-2 md:space-y-6 px-2">
            {galleryImages.map((imgSrc, idx) => (
              <motion.div
                key={imgSrc}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: (idx % 4) * 0.1 }}
                className="relative overflow-hidden bg-[#050505] rounded-xl border border-white/5 break-inside-avoid group"
              >
                <Image
                  src={imgSrc}
                  alt={`SHIULI – The October Story still ${idx + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]"
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
