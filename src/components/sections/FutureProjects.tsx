// src/components/sections/FutureProjects.tsx
export default function FutureProjects() {
  return (
      <section className="relative z-10 w-full overflow-hidden bg-transparent px-4 py-16 sm:py-20 lg:py-32 sm:px-6 lg:px-8 bg-slate-900/10">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-slate-100 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Future Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-slate-500 mt-16">
              <div className="aspect-video w-full rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800">
                <span className="text-slate-500">New films / New reels</span>
              </div>
              <div className="aspect-video w-full rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800">
                <span className="text-slate-500">Collaborations</span>
              </div>
              <div className="aspect-video w-full rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800">
                <span className="text-slate-500">Creative campaigns</span>
              </div>
            </div>
          </div>
      </section>
  )
}
