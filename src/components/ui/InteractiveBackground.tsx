'use client';

import { motion } from 'framer-motion';
import ParticlesLayer from './ParticlesLayer';

export default function InteractiveBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#0f172a]">
      
      {/* 1. Cinematic Ambient Lighting (Volumetric Glows) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <motion.div 
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[130px]"
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-900/10 blur-[150px]"
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* 2. Structured Fabric & Cinematic Grids */}
      {/* Fine weave */}
      <div 
        className="absolute inset-0 opacity-[0.2]" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)', 
          backgroundSize: '4px 4px'
        }}
      ></div>
      {/* Larger structural grid */}
      <div 
        className="absolute inset-0 opacity-[0.1]" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)', 
          backgroundSize: '48px 48px'
        }}
      ></div>

      <ParticlesLayer />

      {/* 3. Cinematic Light Rays (Vertical Lens Flares ) */}
      <div className="absolute inset-0 flex justify-between px-[15vw] opacity-20">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="relative h-full w-[2px] bg-gradient-to-b from-transparent via-blue-500/10 to-transparent">
            <motion.div
              className="absolute left-0 top-0 h-96 w-full bg-blue-300 blur-[4px]"
              animate={{
                y: ["-100%", "1500%"]
              }}
              transition={{
                duration: 12 + i * 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2.5
              }}
            />
          </div>
        ))}
      </div>

      {/* 4. Cinematic Camera Reticles / UI Elements */}
      <svg className="absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 opacity-[0.03]" viewBox="0 0 1000 1000">
        <circle cx="500" cy="500" r="400" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-200" />
        <circle cx="500" cy="500" r="380" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="4 20" className="text-slate-400">
          <animateTransform attributeName="transform" type="rotate" from="0 500 500" to="360 500 500" dur="180s" repeatCount="indefinite" />
        </circle>
        {/* Crosshairs */}
        <path d="M 500,50 L 500,150 M 500,850 L 500,950 M 50,500 L 150,500 M 850,500 L 950,500" stroke="currentColor" strokeWidth="3" className="text-slate-400" />
      </svg>
      
      {/* Corner Registration Marks */}
      <div className="absolute left-8 top-8 h-8 w-8 border-l-2 border-t-2 border-slate-500/30"></div>
      <div className="absolute right-8 top-8 h-8 w-8 border-r-2 border-t-2 border-slate-500/30"></div>
      <div className="absolute bottom-8 left-8 h-8 w-8 border-b-2 border-l-2 border-slate-500/30"></div>
      <div className="absolute bottom-8 right-8 h-8 w-8 border-b-2 border-r-2 border-slate-500/30"></div>
    </div>
  );
}