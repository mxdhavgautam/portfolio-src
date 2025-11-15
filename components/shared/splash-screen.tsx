'use client'

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
    
    // Function to hide splash screen (don't remove DOM, let React handle it)
    const hideSplash = () => {
      if (typeof document !== 'undefined') {
        // Set scroll position to top IMMEDIATELY before removing splash
        // This ensures page is at top when content becomes visible
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        
        document.body.style.background = 'transparent'
        document.body.classList.remove('splash-active')
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
        
        // Ensure scroll position stays at top (synchronous, no delay)
        window.scrollTo(0, 0)
      }
      setIsVisible(false)
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

    // Poll for critical sections to be loaded
    let checkCount = 0
    const maxChecks = 200 // 10 seconds max (200 * 50ms)
    
    const checkInterval = setInterval(() => {
      checkCount++
      
      if (checkCriticalSectionsLoaded()) {
        clearInterval(checkInterval)
        // Small delay to ensure everything is rendered
        setTimeout(() => {
          hideSplash()
        }, 150)
      } else if (checkCount >= maxChecks) {
        // Fallback: hide after max checks even if not all loaded
        clearInterval(checkInterval)
        hideSplash()
      }
    }, 50)

    // Also hide on window load event (fallback)
    const handleLoad = () => {
      clearInterval(checkInterval)
      setTimeout(() => {
        hideSplash()
      }, 150)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('load', handleLoad)
      
      // Fallback timeout (max 3 seconds for critical sections)
      const timeout = setTimeout(() => {
        clearInterval(checkInterval)
        hideSplash()
      }, 3000)

      return () => {
        clearInterval(checkInterval)
        clearTimeout(timeout)
        window.removeEventListener('load', handleLoad)
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <style jsx global>{`
        html {
          height: 100%;
          overflow: hidden;
        }
        body {
          margin: 0;
          min-height: 100%;
          background-color: #F7F7F7;
          background-size: 100% 100%;
          overflow: hidden;
        }
        @media (prefers-color-scheme: dark) {
          body {
            background-color: #212121;
          }
        }
        #splash {
          margin: 0;
          position: fixed;
          top: 50%;
          left: 50%;
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          z-index: 99999;
          pointer-events: none;
          transition: opacity 0.3s ease-out;
        }
        #splash.hidden {
          opacity: 0;
          pointer-events: none;
        }
        #splash img {
          display: block;
          width: auto;
          height: auto;
          max-width: 100vw;
          max-height: 100vh;
          object-fit: contain;
        }
        body.splash-active {
          overflow: hidden;
        }
        body.splash-active > *:not(#splash) {
          visibility: hidden;
        }
      `}</style>
      <picture id="splash">
        <source
          srcSet="splash/img/light-1x.png 1x, splash/img/light-2x.png 2x, splash/img/light-3x.png 3x, splash/img/light-4x.png 4x"
          media="(prefers-color-scheme: light)"
        />
        <source
          srcSet="splash/img/dark-1x.png 1x, splash/img/dark-2x.png 2x, splash/img/dark-3x.png 3x, splash/img/dark-4x.png 4x"
          media="(prefers-color-scheme: dark)"
        />
        <img
          aria-hidden="true"
          src="splash/img/light-1x.png"
          alt=""
          className="center"
        />
      </picture>
    </>
  )
}
