// src/components/sections/Footer.tsx
export default function Footer() {
  return (
    <footer className="relative z-10 w-full overflow-hidden border-t border-slate-900 bg-transparent px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
        <div className="flex flex-col items-center md:items-start text-slate-500 flex-1">
          <span className="font-serif text-xl tracking-tight text-slate-300">Karan Pawar</span>
          <span className="text-sm">Creative Director & Filmmaker</span>
        </div>
        
        <div className="flex flex-col items-center justify-center flex-1">
          <span className="text-sm font-light italic text-slate-400">
            &quot;To evoke emotion, you must understand silence.&quot;
          </span>
        </div>

        <div className="flex flex-col items-center md:items-end justify-center flex-1">
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Karan Pawar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
