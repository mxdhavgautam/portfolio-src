'use client'

// Equivalent to Flutter's NavBar widget

import { ButtonRectangle } from './button-rectangle'
import { ButtonTextLarge } from './button-text'
import { DataValues } from '@/data/data-values'

interface NavBarProps {
  isDesktop?: boolean
}

function navigateToSection(sectionId: string) {
  const targets = Array.from(document.querySelectorAll<HTMLElement>(`#${sectionId}`))
  const visibleTarget = targets.find((target) => target.offsetParent !== null)
  const target = visibleTarget ?? targets[0]

  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function NavBar({ isDesktop = true }: NavBarProps) {
  const handleResumeClick = () => {
    window.open(DataValues.resumeURL, '_blank', 'noopener,noreferrer')
  }

  if (isDesktop) {
    return (
      <nav className="flex items-center justify-center" style={{ gap: '20px' }}>
        <ButtonRectangle
          name={DataValues.navBarResume}
          onPressed={handleResumeClick}
          color="#E53935"
          message="View my Resume"
        />
        <ButtonTextLarge
          text={DataValues.navBarAboutMe}
          onPressed={() => navigateToSection('about')}
          message={`Go to ${DataValues.navBarAboutMe} section`}
        />
        <ButtonTextLarge
          text={DataValues.navBarEducation}
          onPressed={() => navigateToSection('education')}
          message={`Go to ${DataValues.navBarEducation} section`}
        />
        <ButtonTextLarge
          text={DataValues.navBarExperience}
          onPressed={() => navigateToSection('experience')}
          message={`Go to ${DataValues.navBarExperience} section`}
        />
        <ButtonTextLarge
          text={DataValues.navBarTechNotes}
          onPressed={() => navigateToSection('projects')}
          message={`Go to ${DataValues.navBarTechNotes} section`}
        />
        <ButtonTextLarge
          text={DataValues.navBarVolunteering}
          onPressed={() => navigateToSection('extracurriculars')}
          message={`Go to ${DataValues.navBarVolunteering} section`}
        />
        <ButtonTextLarge
          text={DataValues.navBarContactMe}
          onPressed={() => navigateToSection('contact')}
          message={`Go to ${DataValues.navBarContactMe} section`}
          outlineTone="primary"
        />
      </nav>
    )
  }

  // Mobile drawer navigation would go here
  return null
}
