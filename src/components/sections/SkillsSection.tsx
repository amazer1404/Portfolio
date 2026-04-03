// src/components/sections/SkillsSection.tsx
export default function SkillsSection() {
  const categories = [
    {
      title: "Editing & Post Production",
      skills: ["DaVinci Resolve", "Premiere Pro", "After Effects", "Clipchamp"]
    },
    {
      title: "Audio & Voice",
      skills: ["FL Studio", "Reaper", "Audacity", "Voice Modulation", "Sound Design"]
    },
    {
      title: "Creative Skills",
      skills: ["Creative Direction", "Storytelling", "Content Planning", "Performance Direction", "Cinematic Editing", "Color Grading", "Visual Direction", "Concept Ideation"]
    },
    {
      title: "AI Tools",
      skills: ["Kling AI", "Veo", "Mango Banana", "AI-assisted VFX", "AI-assisted visual workflows"]
    }
  ]

  return (
    <section className="relative z-10 w-full overflow-hidden bg-transparent px-4 py-16 sm:py-20 lg:py-32 sm:px-6 lg:px-8 bg-slate-900/10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-100">Skills & Tools</h2>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {categories.map((category) => (
            <div key={category.title} className="group flex flex-col gap-4 sm:gap-6 rounded-2xl border border-slate-800/50 bg-slate-900/20 p-6 sm:p-8 pt-8 sm:pt-10 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30 hover:bg-slate-900/40 hover:shadow-[0_0_35px_-10px_rgba(59,130,246,0.2)]">
              <h3 className="font-serif text-2xl text-slate-200">{category.title}</h3>
              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <li 
                    key={skill} 
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${
                      skill === "DaVinci Resolve" 
                        ? "bg-slate-100 text-slate-900 shadow-[0_0_15px_rgba(255,255,255,0.4)]" 
                        : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
