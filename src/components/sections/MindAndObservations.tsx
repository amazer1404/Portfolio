"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, X, Clock, Calendar } from "lucide-react";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  preview: string;
  date: string;
  readTime: string;
  image: string;
  content: React.ReactNode;
  linkedinLink?: string;
}

const blogs: BlogPost[] = [
  {
    id: "5",
    title: "Evolution: Necessity vs Choice in Careers",
    category: "Career Thoughts",
    preview: "At some point, growth stops being survival and starts becoming a choice. This piece explores whether evolution is always necessary, or whether sometimes staying the same can also be valid.",
    date: "February 21, 2026",
    readTime: "3 min read",
    image: "/images/gallery/cards/post1.png",
    linkedinLink: "https://www.linkedin.com/posts/karan-pawar-21680b290_evolution-careerthoughts-personalgrowth-share-7430978772365041664-wqon?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaZa3IBIg8v53YHH5VfjuhJH563InO3QVU",
    content: (
      <div className="space-y-6 text-slate-300">
        <p>
          We are constantly told that to survive in our careers—especially in creative and tech fields—we must evolve. But at what point does evolution stop being a survival mechanism and start becoming a conscious choice?
        </p>
        <p>
          There is a prevailing narrative that if you aren't growing, you're dying. But sometimes, staying the same is a valid choice. Perfecting a craft doesn't always mean changing it. It can mean going deeper into the exact same well you've been drawing from for years.
        </p>
        <p>
          True evolution isn't just about adding new skills to a resume. It's about deciding whether the new skills serve the core of what you actually want to do, or if they are simply a reaction to the fear of being left behind. Choose your evolution.
        </p>
      </div>
    )
  },
  {
    id: "6",
    title: "The Family Films We Forgot",
    category: "Cinema Observations",
    preview: "Indian cinema once made memorable films for children and families. This piece reflects on why that space disappeared from the mainstream, and why it may deserve a comeback.",
    date: "February 26, 2026",
    readTime: "2 min read",
    image: "/images/gallery/cards/post2.png",
    linkedinLink: "https://www.linkedin.com/posts/karan-pawar-21680b290_indiancinema-childrenandfamilyfilms-regionalcinema-ugcPost-7432698242137550848-04u3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaZa3IBIg8v53YHH5VfjuhJH563InO3QVU",
    content: (
      <div className="space-y-6 text-slate-300">
        <p>
          Indian cinema once flourished with beautiful stories crafted specifically for children and families—films that didn't talk down to their audience but invited them into a shared sense of wonder.
        </p>
        <p>
          However, over time, that specific space seems to have faded from the mainstream. The focus shifted heavily to larger-than-life spectacles, action franchises, or intense dramas, leaving a noticeable gap where grounded, character-driven family films used to be.
        </p>
        <p>
          This piece reflects on why that genre slowly disappeared, and why, now more than ever, it deserves a comeback. In our current landscape of diverse storytelling, modern filmmakers have the perfect opportunity to redefine what a 'family film' feels like for today’s audiences.
        </p>
      </div>
    )
  },
  {
    id: "2",
    title: "Why This 2nd Place Felt Bigger Than a Competition",
    category: "Achievements",
    preview: "Securing 2nd place at Frame Flux, IIT Roorkee felt special not just because of the result, but because it proved that years of observing cinema, storytelling, editing, and audience behavior actually matter.",
    date: "March 30, 2026",
    readTime: "2 min read",
    image: "/images/gallery/cards/post3.png",
    linkedinLink: "https://www.linkedin.com/posts/karan-pawar-21680b290_iitroorkee-cognizance2026-frameflux-ugcPost-7444450840054112256-md3U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaZa3IBIg8v53YHH5VfjuhJH563InO3QVU",
    content: (
      <div className="space-y-6 text-slate-300">
        <p>
          Competitions are often about proving you're the best on paper. But securing 2nd place at Frame Flux, IIT Roorkee felt different. It felt like validation of an obsession.
        </p>
        <p>
          It wasn't just about stringing clips together; it was about the years spent quietly observing cinema. The countless hours analyzing pacing, dissecting how an editor creates emotional rhythm, and understanding how audiences subconsciously react to sound design.
        </p>
        <p>
          This achievement proved that those silent hours of studying storytelling actually translated into something tangible. It's a reminder that craft isn't built overnight—it's layered, frame by frame, insight by insight. And sometimes, the recognition is just the universe telling you to keep going.
        </p>
      </div>
    )
  }
];

export default function MindAndObservations() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedBlog]);

  return (
    <section id="mind" className="relative z-10 w-full overflow-hidden bg-transparent px-4 py-16 sm:py-20 lg:py-32 sm:px-6 lg:px-8 bg-slate-900/10 scroll-mt-12">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,41,59,0.5),transparent_70%)] opacity-50 mix-blend-screen" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-100 tracking-tight">
            Mind & Observations
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-6">
            A space for the thoughts behind the work, observations, lessons, creative experiments, and ideas that shape how I approach storytelling.
          </p>
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {blogs.map((blog, index) => {
            // Create asymmetrical styling based on index
            const isFeatured = index === 0;
            const colSpan = isFeatured 
              ? "lg:col-span-4 md:col-span-2" 
              : index === 1 
                ? "lg:col-span-2 md:col-span-1" 
                : index === 2 
                  ? "lg:col-span-3 md:col-span-1" 
                  : "lg:col-span-3 md:col-span-1";

            return (
              <div 
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/40 p-8 backdrop-blur-md transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_35px_-10px_rgba(59,130,246,0.2)] flex flex-col justify-between min-h-[300px] ${colSpan}`}
              >
                {/* Background Image Behind Glass */}
                <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-105">
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill 
                    className="object-cover opacity-20 sm:opacity-25"
                  />
                  {/* Additional gradient overlays for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
                  <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px]" />
                </div>

                {/* Subtle Grain Overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-slate-500/10 to-transparent rotate-45 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-flex rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-300 border border-slate-700/50">
                      {blog.category}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-slate-500 opacity-0 -translate-x-2 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:text-slate-200 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>

                  <div className="mt-auto relative z-10">
                    <h3 className={`font-serif text-slate-200 mb-3 transition-colors duration-300 ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-light line-clamp-3 mb-6">
                      {blog.preview}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {blog.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reading Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-500 animate-in fade-in"
            onClick={() => setSelectedBlog(null)}
          />
          
          {/* Modal Content */}
          <div className="relative flex flex-col w-full max-w-3xl h-auto max-h-[70vh] sm:max-h-[90vh] rounded-2xl sm:rounded-3xl mt-12 sm:mt-0 border border-slate-700/50 bg-slate-900 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 ease-out">
            
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-800/80 bg-slate-900/90 px-6 py-4 backdrop-blur-xl">
              <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                {selectedBlog.category}
              </span>
              <button 
                onClick={() => setSelectedBlog(null)}
                className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto px-6 py-10 sm:px-12 sm:py-16 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-700">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-50 mb-6 leading-tight">
                {selectedBlog.title}
              </h2>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 font-light mb-12 pb-12 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {selectedBlog.date}
                </div>
                <div className="h-1 w-1 rounded-full bg-slate-600" />
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {selectedBlog.readTime}
                </div>
              </div>

              <div className="prose prose-invert prose-lg max-w-none prose-p:font-light prose-p:leading-relaxed prose-headings:font-serif mb-12">
                {selectedBlog.content}
              </div>

              {selectedBlog.linkedinLink && (
                <div className="pt-8 border-t border-slate-800">
                  <a
                    href={selectedBlog.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-6 py-3 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-600/20 hover:text-blue-300"
                  >
                    Read on LinkedIn
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
}
