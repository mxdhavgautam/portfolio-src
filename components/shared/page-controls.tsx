'use client'

import { useEffect, useState } from 'react'
import { MobileNavDrawer } from './mobile-nav-drawer'

function navigateToSection(sectionId: string) {
  const targets = Array.from(document.querySelectorAll<HTMLElement>(`#${sectionId}`))
  const visibleTarget = targets.find((target) => target.offsetParent !== null)
  const target = visibleTarget ?? targets[0]

  if (!target) return

  const mobileHeaderOffset = window.matchMedia('(max-width: 799px)').matches ? 72 : 0
  const targetTop = target.getBoundingClientRect().top + window.scrollY - mobileHeaderOffset

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: 'smooth',
  })
}

export function PageControls() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    let ticking = false
    const handleScroll = () => {
      if (ticking) return

      ticking = true
      window.requestAnimationFrame(() => {
        setShowBackToTop(window.scrollY >= 300)
        ticking = false
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 bg-surface desktop:hidden">
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

      <MobileNavDrawer
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onNavigate={navigateToSection}
      />

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
    </>
  )
}
