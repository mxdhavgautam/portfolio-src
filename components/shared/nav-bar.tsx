'use client'

// Equivalent to Flutter's NavBar widget

import { ButtonRectangle } from './button-rectangle'
import { ButtonTextLarge } from './button-text'
import { DataValues } from '@/data/data-values'

interface NavBarProps {
  isDesktop: boolean
  onNavigate: (sectionId: string) => void
}

export function NavBar({ isDesktop, onNavigate }: NavBarProps) {
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
          onPressed={() => onNavigate('about')}
          message={`Go to ${DataValues.navBarAboutMe} section`}
        />
        <ButtonTextLarge
          text={DataValues.navBarEducation}
          onPressed={() => onNavigate('education')}
          message={`Go to ${DataValues.navBarEducation} section`}
        />
        <ButtonTextLarge
          text={DataValues.navBarExperience}
          onPressed={() => onNavigate('experience')}
          message={`Go to ${DataValues.navBarExperience} section`}
        />
        <ButtonTextLarge
          text={DataValues.navBarTechNotes}
          onPressed={() => onNavigate('projects')}
          message={`Go to ${DataValues.navBarTechNotes} section`}
        />
        <ButtonTextLarge
          text={DataValues.navBarVolunteering}
          onPressed={() => onNavigate('extracurriculars')}
          message={`Go to ${DataValues.navBarVolunteering} section`}
        />
        <ButtonRectangle
          name={DataValues.navBarContactMe}
          onPressed={() => onNavigate('contact')}
          color="#E53935"
          message={`Go to ${DataValues.navBarContactMe} section`}
        />
      </nav>
    )
  }

  // Mobile drawer navigation would go here
  return null
}

