// src/components/sections/ServicesSection.tsx
export default function ServicesSection() {
  const services = [
    "Creative Direction", "Video Editing", "Short Film Production", 
    "Reels Editing", "Brand Content Strategy", "Social Media Content Planning", 
    "Sound Design", "AI-assisted Visual Content", "Voiceover Direction"
  ]

  return (
    <section className="relative z-10 w-full bg-transparent px-4 py-16 sm:py-20 lg:py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-100 text-center">Services</h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-slate-900/40 p-10 border border-slate-800 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800 hover:shadow-[0_0_35px_-10px_rgba(59,130,246,0.25)]">
              <div className="flex flex-col gap-4">
                <span className="text-slate-500 font-mono text-sm">{(index + 1).toString().padStart(2, '0')}</span>
                <h3 className="font-serif text-2xl text-slate-200 group-hover:text-white transition-colors">
                  {service}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
