'use client'

import { ButtonRectangle } from './button-rectangle'
import { DataValues } from '@/data/data-values'

interface MobileNavDrawerProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (sectionId: string) => void
}

interface DrawerNavButtonProps {
  label: string
  message: string
  onPressed: () => void
}

function DrawerNavButton({ label, message, onPressed }: DrawerNavButtonProps) {
  return (
    <button
      onClick={onPressed}
      title={message}
      className="group flex h-12 w-full items-center justify-between rounded-[10px] px-4 text-left text-base font-medium text-foreground transition-colors duration-200 hover:bg-surface-variant dark:hover:bg-background-grey"
    >
      <span>{label}</span>
      <span
        aria-hidden="true"
        className="h-2 w-2 rotate-[-45deg] border-b-2 border-r-2 border-primary/60 opacity-70 transition-all duration-200 group-hover:translate-x-0.5 group-hover:border-primary group-hover:opacity-100"
      />
    </button>
  )
}

export function MobileNavDrawer({
  isOpen,
  onClose,
  onNavigate,
}: MobileNavDrawerProps) {
  const handleResumeClick = () => {
    window.open(DataValues.resumeURL, '_blank', 'noopener,noreferrer')
    onClose()
  }

  const handleNavClick = (sectionId: string) => {
    onClose()
    window.requestAnimationFrame(() => {
      onNavigate(sectionId)
    })
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-200 ease-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[86vw] bg-white dark:bg-background-black z-50 overflow-y-auto px-4 shadow-2xl transition-transform duration-300 ease-out will-change-transform ${
          isOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="pt-5 pb-6">
          <div className="mb-5 flex items-center justify-between rounded-[10px] bg-surface-variant px-4 py-3 dark:bg-background-grey">
            <div>
              <p className="text-sm font-medium text-primary">Devfolio</p>
              <p className="text-xs font-normal text-grey-dark">v{DataValues.appVersion}</p>
            </div>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-white dark:hover:bg-card-grey"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Navigation buttons - centered */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-full flex justify-center pb-2">
              <ButtonRectangle
                name={DataValues.navBarResume}
                onPressed={handleResumeClick}
                color="#E53935"
                message="View my Resume"
              />
            </div>
            <div className="w-full rounded-[10px] border border-black/5 p-1 dark:border-white/10">
              <DrawerNavButton
                label={DataValues.navBarAboutMe}
                onPressed={() => handleNavClick('about')}
                message={`Go to ${DataValues.navBarAboutMe} section`}
              />
              <DrawerNavButton
                label={DataValues.navBarEducation}
                onPressed={() => handleNavClick('education')}
                message={`Go to ${DataValues.navBarEducation} section`}
              />
              <DrawerNavButton
                label={DataValues.navBarExperience}
                onPressed={() => handleNavClick('experience')}
                message={`Go to ${DataValues.navBarExperience} section`}
              />
              <DrawerNavButton
                label={DataValues.navBarTechNotes}
                onPressed={() => handleNavClick('projects')}
                message={`Go to ${DataValues.navBarTechNotes} section`}
              />
              <DrawerNavButton
                label={DataValues.navBarVolunteering}
                onPressed={() => handleNavClick('extracurriculars')}
                message={`Go to ${DataValues.navBarVolunteering} section`}
              />
              <DrawerNavButton
                label={DataValues.navBarContactMe}
                onPressed={() => handleNavClick('contact')}
                message={`Go to ${DataValues.navBarContactMe} section`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
