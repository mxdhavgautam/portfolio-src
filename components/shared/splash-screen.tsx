'use client'

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Set scroll position to top IMMEDIATELY on mount
    // This ensures page is at top from the very start
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
    
    // Add splash-active class to body immediately to hide content
    if (typeof document !== 'undefined') {
      document.body.classList.add('splash-active')
    }
    
    // Flag to ensure hideSplash is only called once
    let hasHidden = false
    let revealTimer: ReturnType<typeof setTimeout> | undefined
    
    // Function to hide splash screen (don't remove DOM, let React handle it)
    const hideSplash = () => {
      // Prevent multiple calls
      if (hasHidden) return
      hasHidden = true
      
      if (typeof document !== 'undefined' && typeof window !== 'undefined') {
        const container = document.getElementById('splash-container')
        if (container) {
          container.classList.add('hidden')
        }

        // Set scroll position to top SYNCHRONOUSLY ONCE before removing splash
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        
        // Keep the existing fade, but reveal as soon as the critical above-fold UI is ready.
        setTimeout(() => {
          document.body.classList.remove('splash-active')
          document.documentElement.style.overflow = ''
          document.body.style.overflow = ''
          setIsVisible(false)
        }, 400)
      } else {
        setIsVisible(false)
      }
    }

    // Check if critical sections are loaded (header, about me, education)
    const checkCriticalSectionsLoaded = () => {
      // Check if document is ready
      if (document.readyState === 'loading') {
        return false
      }

      // Check if critical sections exist in DOM
      // Header section - check for logo image which indicates header is rendered
      const headerLogo = document.querySelector('img[src*="logo"]')
      // About Me section
      const aboutMe = document.getElementById('about')
      // Education section  
      const education = document.getElementById('education')
      
      // All three sections should exist
      if (!headerLogo || !aboutMe || !education) {
        return false
      }

      // Check if critical images are loaded (logo, icons in about section)
      const logoImg = document.querySelector('img[src*="logo"]') as HTMLImageElement
      const studentImg = document.querySelector('img[src*="student"]') as HTMLImageElement
      const volunteerImg = document.querySelector('img[src*="volunteer"]') as HTMLImageElement
      const developerImg = document.querySelector('img[src*="developer"]') as HTMLImageElement
      
      // Check logo (required)
      if (logoImg && (!logoImg.complete || logoImg.naturalHeight === 0)) {
        return false
      }
      
      // Check about section icons (at least one should be loaded)
      const aboutIconsLoaded = 
        (!studentImg || (studentImg.complete && studentImg.naturalHeight > 0)) &&
        (!volunteerImg || (volunteerImg.complete && volunteerImg.naturalHeight > 0)) &&
        (!developerImg || (developerImg.complete && developerImg.naturalHeight > 0))

      if (!aboutIconsLoaded) {
        return false
      }

      // Check if fonts are loaded (or at least started loading)
      const fontsReady = !document.fonts || document.fonts.status === 'loaded' || document.fonts.status === 'loading'

      return fontsReady
    }

    // Poll for critical sections only. Waiting for window.load can include offscreen
    // portfolio images and makes the splash feel slower than the page actually is.
    let checkCount = 0
    const maxChecks = 30 // 1.5 seconds max (30 * 50ms)
    
    const checkInterval = setInterval(() => {
      checkCount++
      
      if (checkCriticalSectionsLoaded()) {
        clearInterval(checkInterval)
        // A single frame gives layout/paint a chance to settle without holding the splash.
        revealTimer = setTimeout(() => {
          hideSplash()
        }, 50)
      } else if (checkCount >= maxChecks) {
        // Fallback: hide after max checks even if not all loaded
        clearInterval(checkInterval)
        hideSplash()
      }
    }, 50)

    if (typeof window !== 'undefined') {
      // Fallback timeout (max 1.5 seconds for critical sections)
      const timeout = setTimeout(() => {
        clearInterval(checkInterval)
        hideSplash()
      }, 1500)

      return () => {
        clearInterval(checkInterval)
        if (revealTimer) clearTimeout(revealTimer)
        clearTimeout(timeout)
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <div id="splash-container">
      <div id="splash">
        <img
          className="splash-img splash-img-light"
          aria-hidden="true"
          src="/splash/img/light-2x.webp"
          srcSet="/splash/img/light-1x.webp 1x, /splash/img/light-2x.webp 2x, /splash/img/light-3x.webp 3x, /splash/img/light-4x.webp 4x"
          sizes="(max-width: 356px) 90vw, 320px"
          alt=""
          width={320}
          height={180}
        />
        <img
          className="splash-img splash-img-dark"
          aria-hidden="true"
          src="/splash/img/dark-2x.webp"
          srcSet="/splash/img/dark-1x.webp 1x, /splash/img/dark-2x.webp 2x, /splash/img/dark-3x.webp 3x, /splash/img/dark-4x.webp 4x"
          sizes="(max-width: 356px) 90vw, 320px"
          alt=""
          width={320}
          height={180}
        />
      </div>
    </div>
  )
}
