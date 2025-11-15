'use client'

import { useEffect, useState } from 'react'
import { DS1Header } from '@/components/desktop/ds-1-header'
import { DS2AboutMe } from '@/components/desktop/ds-2-about-me'
import { DS3Education } from '@/components/desktop/ds-3-education'
import { DS4Experience } from '@/components/desktop/ds-4-experience'
import { DS5Extracurriculars } from '@/components/desktop/ds-5-extracurriculars'
import { DS6Projects } from '@/components/desktop/ds-6-projects'
import { DS7Contact } from '@/components/desktop/ds-7-contact'
import { DS8Footer } from '@/components/desktop/ds-8-footer'
import { MS1Header } from '@/components/mobile/ms-1-header'
import { MS2AboutMe } from '@/components/mobile/ms-2-about-me'
import { MS3Education } from '@/components/mobile/ms-3-education'
import { MS4Experience } from '@/components/mobile/ms-4-experience'
import { MS5Extracurriculars } from '@/components/mobile/ms-5-extracurriculars'
import { MS6Projects } from '@/components/mobile/ms-6-projects'
import { MS7Contact } from '@/components/mobile/ms-7-contact'
import { MS8Footer } from '@/components/mobile/ms-8-footer'
import { MobileNavDrawer } from '@/components/shared/mobile-nav-drawer'
import { isDesktopScreen } from '@/utils/responsive'

export default function HomePage() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    // Prevent browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    // Set scroll position to top immediately on mount
    // Images have fixed dimensions so no layout shift will occur
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    const handleResize = () => {
      setIsDesktop(isDesktopScreen(window.innerWidth))
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY >= 300)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-surface">
          {/* Mobile App Bar - Fixed at top */}
          {!isDesktop && (
            <header className="fixed top-0 left-0 right-0 z-30 bg-surface">
              <div className="flex items-center justify-start px-4 h-14">
            <button
              onClick={() => setMobileNavOpen(true)}
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-foreground"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </header>
      )}

      <main className={`flex flex-col ${!isDesktop ? 'pt-14' : ''}`}>
        {isDesktop ? (
          <>
            <DS1Header onNavigate={handleNavigate} />
            <DS2AboutMe />
            <DS3Education />
            <DS4Experience />
            <DS6Projects />
            <DS5Extracurriculars />
            <DS7Contact />
            <DS8Footer />
          </>
        ) : (
          <>
            <MS1Header />
            <MS2AboutMe />
            <MS3Education />
            <MS4Experience />
            <MS6Projects />
            <MS5Extracurriculars />
            <MS7Contact />
            <MS8Footer />
          </>
        )}
      </main>

      {/* Mobile Navigation Drawer */}
      <MobileNavDrawer
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-button-primary text-icon-secondary flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity z-50"
          aria-label="Go to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
