'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { allCategoryVideos, allWorksProjects, featuredProjects, workCategories } from '@/data/projects';
import CategoryVideoCarousel from '@/components/ui/CategoryVideoCarousel';
import BackToTop from '@/components/ui/BackToTop';

export default function AllProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof workCategories)[number]>('All Works');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Works') return allWorksProjects;
    return featuredProjects.filter(project => project.workCategory === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setPlayingVideo(null);
  }, [selectedCategory]);

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
          <h1 className="font-editorial text-4xl md:text-6xl tracking-tighter text-[#F2EBDD]">All Projects</h1>
          <p className="mt-4 text-slate-400 text-lg">A complete archive of all short films, creative reels, and visual experiments.</p>
        </motion.div>

        <div className="mb-8 flex w-full justify-center" aria-label="Project categories">
          <div className="grid w-full grid-cols-2 gap-2 rounded-xl border border-[#B85C78]/25 bg-slate-950/40 p-2 backdrop-blur-sm md:flex md:w-auto md:items-center md:justify-center md:gap-1.5 md:rounded-full md:p-1.5">
            {workCategories.map(category => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`min-h-10 min-w-0 rounded-lg px-2 py-2 text-center text-xs font-medium leading-tight transition-all duration-300 md:rounded-full md:px-3 lg:px-4 md:text-sm ${
                  category === 'All Works' ? 'col-span-2 md:col-span-1' : ''
                } ${
                  selectedCategory === category
                    ? 'bg-[#B85C78] text-white shadow-[0_4px_18px_rgba(169,79,109,0.18)] ring-1 ring-inset ring-[#D18BA2]/35'
                    : 'bg-slate-900/30 text-slate-400 hover:bg-[#C47791]/20 hover:text-[#F3E4E9]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {(selectedCategory === 'AI Videos' || selectedCategory === 'Clients & Assignments') ? (
          <CategoryVideoCarousel category={selectedCategory} />
        ) : (
        <motion.div layout className="flex flex-col gap-6">
          {filteredProjects.map((project, index) => (
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
          {selectedCategory === 'All Works' && allCategoryVideos.map((video, index) => (
            <motion.div
              key={`video-${video.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (filteredProjects.length + index) * 0.05 }}
              className="group flex flex-col md:flex-row items-center gap-6 p-4 rounded-2xl bg-zinc-900/20 border border-zinc-800/40 hover:bg-zinc-800/40 hover:border-zinc-700/50 transition-all duration-300"
            >
              <div className="relative w-full md:w-64 aspect-video shrink-0 rounded-xl overflow-hidden bg-slate-900 border border-slate-800/50">
                {playingVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title={video.title}
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlayingVideo(video.id)}
                    className="group absolute inset-0 flex items-center justify-center focus:outline-none"
                    aria-label={`Play ${video.title}`}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <svg className="ml-1 h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </button>
                )}
              </div>
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-400/80 mb-2">
                  <span>{video.categories.join(' / ')}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-700" />
                  <span>YouTube Video</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-slate-200 mb-2 group-hover:text-blue-400 transition-colors truncate">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        )}
      </div>
      
      <BackToTop />
    </div>
  );
}
