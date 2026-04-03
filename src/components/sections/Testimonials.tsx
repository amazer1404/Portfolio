// src/components/sections/Testimonials.tsx
export default function Testimonials() {
  return (
      <section className="relative z-10 w-full overflow-hidden bg-transparent px-4 py-16 sm:py-20 lg:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-100">Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-500">
            <div className="p-8 border border-slate-800 rounded-xl bg-slate-900/30">
                <p className="italic">"A premium placeholder for future testimonials from clients or collaborators."</p>
                <div className="mt-6 flex flex-col gap-1">
                    <span className="font-medium text-slate-300">Client Name</span>
                    <span className="text-sm">Client Position</span>
                </div>
            </div>
            
            <div className="p-8 border border-slate-800 rounded-xl bg-slate-900/30">
                <p className="italic">"A second premium placeholder for another future testimonial."</p>
                <div className="mt-6 flex flex-col gap-1">
                    <span className="font-medium text-slate-300">Director / Producer</span>
                    <span className="text-sm">Studio Name</span>
                </div>
            </div>
          </div>
        </div>
      </section>
  )
}
