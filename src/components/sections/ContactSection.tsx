import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 flex min-h-[50vh] w-full flex-col justify-center overflow-hidden bg-transparent px-4 py-16 sm:py-20 lg:py-32 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center">
        <h2 className="mb-6 font-serif text-3xl font-medium tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-6xl">
          Let's create something memorable.
        </h2>
        
        <p className="mb-12 max-w-xl text-lg text-slate-400">
          Follow my journey and watch more of my recent work, or drop a line if you have an exciting project in mind.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a 
            href="mailto:karanps6525@gmail.com" 
            className="group flex items-center justify-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-sm font-medium text-blue-400 transition-all active:scale-[0.9] hover:bg-blue-500/20 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            karanps6525@gmail.com
          </a>
          
          <a 
            href="https://www.linkedin.com/in/karan-pawar-21680b290/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-medium text-slate-300 transition-all active:scale-[0.9] hover:bg-slate-700 hover:text-white"
          >
            <span className="font-bold tracking-wider">IN</span>
            LinkedIn
          </a>
          
          <a 
            href="https://www.instagram.com/amazer___/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-medium text-slate-300 transition-all active:scale-[0.9] hover:bg-slate-700 hover:text-white"
          >
            <span className="font-bold tracking-wider">IG</span>
            Instagram
          </a>
          
          <a 
            href="https://www.youtube.com/@amazer_r" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-medium text-slate-300 transition-all active:scale-[0.9] hover:bg-slate-700 hover:text-white"
          >
            <span className="font-bold tracking-wider">YT</span>
            YouTube
          </a>
        </div>
      </div>
    </section>
  )
}
