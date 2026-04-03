import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 w-full overflow-hidden bg-transparent px-4 py-16 sm:py-20 lg:py-32 sm:px-6 lg:px-8 scroll-mt-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-100">About Me</h2>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center">
            <ul className="space-y-6 text-lg lg:text-xl text-slate-300 font-light">
              <li className="flex items-start gap-4">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                <p><strong className="font-medium text-slate-100">Filmmaker & Creative Director</strong> building emotional, cinematic experiences through thoughtful editing, sound design, pacing, and visual storytelling.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                <p><strong className="font-medium text-slate-100">Modern Workflow</strong> combining traditional filmmaking techniques with AI-assisted tools to create content that feels deeply human and memorable.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                <p><strong className="font-medium text-slate-100">Engineering Meets Art:</strong> Currently a B.Tech student at IIITDM Jabalpur, exploring the sweet spot between technical precision and creative vision.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                <p><strong className="font-medium text-slate-100">Auditory Storytelling:</strong> Having worked as a voiceover artist, I bring a sharp ear and deep appreciation for the unseen auditory layers of a story.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"></span>
                <p><strong className="font-medium text-slate-100">Beyond the Edit Bay:</strong> When I'm not cutting video, I'm usually diving into modern media, podcasts, spiritual literature, or learning about the cosmos.</p>
              </li>
            </ul>
          </div>
          <div className="relative aspect-square w-full md:aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-xl bg-slate-900 border border-slate-800/80 shadow-lg">
            <Image
              src="/images/gallery/about_me_photo.png"
              alt="Karan Pawar"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105 hover:brightness-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
