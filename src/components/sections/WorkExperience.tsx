// src/components/sections/WorkExperience.tsx
export default function WorkExperience() {
  const experiences = [
    {
      role: "Independent Content Creator",
      company: "AMAZER",
      date: "Dec 2024 - Present",
      description: "Produced cinematic short films and reels; managed ideation, shooting, editing, and sound design."
    },
    {
      role: "Video Editor",
      company: "Grothify",
      date: "Jun 2025 - Feb 2026",
      description: "Edited client videos for marketing campaigns and adapted content to brand tone."
    },
    {
      role: "Content Head",
      company: "AAVARTAN",
      date: "Oct 2024 - Jan 2026",
      description: "Planned and directed dance and content reels while coordinating teams."
    }
  ]
  return (
    <section id="experience" className="relative z-10 w-full bg-transparent px-4 py-16 sm:py-20 lg:py-32 sm:px-6 lg:px-8 bg-slate-900/10 scroll-mt-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-100">Work Experience</h2>
        
        <div className="flex flex-col gap-12 border-l border-slate-800 pb-8 pl-8 mx-auto max-w-4xl pt-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative group">
              <span className="absolute -left-[41px] top-6 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-slate-900 border-[3px] border-slate-950/20 group-hover:border-slate-400 group-hover:bg-slate-100 transition-colors"></span>
              
              <div className="flex flex-col justify-between sm:flex-row mb-2 gap-4 sm:gap-0">
                <h3 className="font-serif text-2xl text-slate-200">{exp.role} <span className="font-sans text-slate-500 font-light">— {exp.company}</span></h3>
                <span className="text-slate-500 text-sm font-medium tracking-wide flex-shrink-0">{exp.date}</span>
              </div>
              <p className="max-w-xl text-lg text-slate-400 leading-relaxed mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
