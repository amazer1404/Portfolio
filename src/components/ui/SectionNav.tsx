'use client';

import { User, Film, Briefcase, Image as ImageIcon, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'about', icon: <User className="h-4 w-4" />, label: 'About' },
  { id: 'projects', icon: <Film className="h-4 w-4" />, label: 'Projects' },
  { id: 'experience', icon: <Briefcase className="h-4 w-4" />, label: 'Experience' },
  { id: 'gallery', icon: <ImageIcon className="h-4 w-4" />, label: 'Gallery' },
  { id: 'mind', icon: <BookOpen className="h-4 w-4" />, label: 'Mind' },
];

const scrollToSection = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.scrollY - 100;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;
  const duration = 1200;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = progress < 0.5
      ? 8 * progress * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 4) / 2;

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };
  requestAnimationFrame(animation);
};

export default function SectionNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const getActiveSection = () => {
      let activeId: string | null = null;
      let activeTop = Number.NEGATIVE_INFINITY;
      navItems.forEach(item => {
        const section = document.getElementById(item.id);
        const top = section?.getBoundingClientRect().top;
        if (top !== undefined && top <= 120 && top > activeTop) {
          activeId = item.id;
          activeTop = top;
        }
      });
      return activeId;
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      setActiveSection(getActiveSection());
    };

    const handleHistoryNavigation = () => {
      const sectionId = window.location.hash.slice(1);
      if (navItems.some(item => item.id === sectionId)) {
        setActiveSection(sectionId);
        scrollToSection(sectionId);
      } else {
        setActiveSection(getActiveSection());
      }
    };

    const handleHashChange = () => {
      const sectionId = window.location.hash.slice(1);
      setActiveSection(
        navItems.some(item => item.id === sectionId)
          ? sectionId
          : getActiveSection()
      );
    };

    const initialSectionId = window.location.hash.slice(1);
    if (navItems.some(item => item.id === initialSectionId)) {
      setActiveSection(initialSectionId);
      setScrolled(window.scrollY > 100);
    } else {
      handleScroll();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    window.addEventListener('popstate', handleHistoryNavigation);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('popstate', handleHistoryNavigation);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateToSection = (id: string) => {
    if (
      window.matchMedia('(max-width: 639px)').matches &&
      window.location.hash !== `#${id}`
    ) {
      window.history.pushState({ sectionId: id }, '', `#${id}`);
    }
    setActiveSection(id);
    scrollToSection(id);
  };

  return (
    <div className={`fixed top-0 left-0 z-[100] w-full transition-colors duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50' : 'bg-transparent'}`}>
      <div className="mx-auto grid h-14 w-full max-w-[460px] grid-cols-5 items-center justify-items-center gap-0.5 overflow-hidden px-1 sm:flex sm:h-20 sm:max-w-7xl sm:justify-between sm:gap-6 sm:px-4 md:justify-center">
        {navItems.map(item => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigateToSection(item.id)}
              aria-label={item.label}
              aria-current={isActive ? 'location' : undefined}
              className={`flex h-12 w-full min-w-[48px] flex-col items-center justify-center gap-0.5 rounded-full px-0 py-1 text-[9px] font-medium tracking-tighter text-slate-300 bg-slate-900/30 border border-slate-800/50 shadow-sm whitespace-nowrap transition-all active:scale-90 duration-200 hover:text-white hover:bg-slate-800 hover:border-slate-700 min-[380px]:text-[10px] sm:h-auto sm:w-auto sm:min-w-0 sm:flex-row sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm sm:tracking-wide sm:duration-200 max-sm:duration-300 ${
                isActive ? 'max-sm:bg-[#B85C78]/35 max-sm:border-[#D18BA2]/60 max-sm:text-[#F3E4E9] max-sm:shadow-[0_0_14px_rgba(169,79,109,0.22)] max-sm:hover:bg-[#C47791]/40 max-sm:hover:border-[#D18BA2]/70' : ''
              }`}
            >
              {item.icon}
              <span>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
