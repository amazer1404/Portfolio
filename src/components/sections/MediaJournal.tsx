// src/components/sections/MediaJournal.tsx
export default function MediaJournal() {
  return (
    <section className="relative z-10 w-full overflow-hidden bg-transparent px-4 py-16 sm:py-20 lg:py-32 sm:px-6 lg:px-8 bg-slate-900/10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-100">Media Journal</h2>
        <p className="mb-16 text-xl text-slate-400 max-w-2xl">
          Thoughts on media trends, film reviews, AI in storytelling, and creative direction insights.
        </p>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x text-slate-500">
          <p>Journal feed placeholder. Connect to a headless CMS or local markdown files later.</p>
        </div>
      </div>
    </section>
  )
}
