'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { featuredProjects } from '@/data/projects';
import BackToTop from '@/components/ui/BackToTop';

export default function AllProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100 selection:bg-blue-900/30 pt-24 px-4 sm:px-6 lg:px-8 pb-32">
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none" />

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
          <span className="text-xs tracking-widest text-slate-500 uppercase">Archive</span>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-serif tracking-tighter text-slate-200">All Projects</h1>
          <p className="mt-4 text-slate-400 text-lg">A complete archive of all short films, creative reels, and visual experiments.</p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {featuredProjects.map((project, index) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col md:flex-row items-center gap-6 p-4 rounded-2xl bg-zinc-900/20 border border-zinc-800/40 hover:bg-zinc-800/40 hover:border-zinc-700/50 transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-full md:w-64 aspect-video shrink-0 rounded-xl overflow-hidden bg-slate-900 border border-slate-800/50">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80">
                      <span className="text-slate-600 text-sm">No Image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-400/80 mb-2">
                    <span>{project.category}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-700" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-slate-200 mb-2 group-hover:text-blue-400 transition-colors truncate">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2 max-w-3xl">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="rounded max-w-full truncate bg-slate-900 border border-slate-800 px-2.5 py-1 text-[10px] sm:text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="rounded bg-slate-900 px-2.5 py-1 text-[10px] sm:text-xs text-slate-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      
      <BackToTop />
    </div>
  );
}