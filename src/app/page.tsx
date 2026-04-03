// src/app/page.tsx
import fs from 'fs'
import path from 'path'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import ReelsShowcase from '@/components/sections/ReelsShowcase'
import PhotoGallery from '@/components/sections/PhotoGallery'
import MindAndObservations from '@/components/sections/MindAndObservations'
import WorkExperience from '@/components/sections/WorkExperience'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import InteractiveBackground from '@/components/ui/InteractiveBackground'
import SectionNav from '@/components/ui/SectionNav'
import BackToTop from '@/components/ui/BackToTop'

export default function Home() {
  // Read gallery images on the server
  const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery')
  let galleryImages: string[] = []
  try {
    const files = fs.readdirSync(galleryDir)
    galleryImages = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => `/images/gallery/${file}`)
  } catch (error) {
    console.error("Gallery directory not found or error reading it.", error)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <InteractiveBackground />
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* Persistent Navigation Bar (Sticks to top) */}
      <SectionNav />

      {/* 2. About Me */}
      <AboutSection />

      {/* 3. Skills & Tools */}
      <SkillsSection />

      {/* 4. Featured Projects */}
      <FeaturedProjects />

      {/* 5. Reels Showcase */}
      <ReelsShowcase />

      {/* 6. Work Experience */}
      <WorkExperience />

      {/* 7. Photo Gallery */}
      <PhotoGallery images={galleryImages} />

      {/* 8. Mind & Observations */}
      <MindAndObservations />

      {/* 9. Let's Connect (CTA) */}
      <ContactSection />

      {/* 9. Footer */}
      <Footer />

      {/* Persistent Back to Top Button */}
      <BackToTop />
    </main>
  )
}
