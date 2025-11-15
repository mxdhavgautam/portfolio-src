// Equivalent to Flutter's MS2AboutMe component

import { TextPairsType1 } from '../shared/text-pairs'
import { ContainerCardType1 } from '../shared/container-card'
import { FrameTitle } from '../shared/frame-title'
import { DataValues } from '@/data/data-values'

export function MS2AboutMe() {
  return (
    <section
      id="about"
      className="bg-surface p-[40px] flex flex-col items-start"
    >
      <FrameTitle
        title={DataValues.aboutMeTitle}
        description={DataValues.aboutMeDescription}
        isDesktop={false}
      />
      <div className="h-10" />

      {/* Bio Section */}
      <div className="w-full flex flex-col items-start">
        <TextPairsType1
          title={DataValues.aboutMeBiographyTitle}
          description={DataValues.aboutMeBiographyDescription}
        />
        <div className="h-5" />
        {/* Note: Flutter has commented out View Full Biography button */}
        <TextPairsType1
          title={DataValues.aboutMeGenderTitle}
          description={DataValues.aboutMeGenderDescription}
        />
        <div className="h-[30px]" />
        <TextPairsType1
          title={DataValues.aboutMeLanguageTitle}
          description={DataValues.aboutMeLanguageDescription}
        />
        <div className="h-[30px]" />
        <TextPairsType1
          title={DataValues.aboutMeSkillsTitle}
          description={DataValues.aboutMeSkillsDescription}
        />
        <div className="h-[30px]" />
        <TextPairsType1
          title={DataValues.aboutMeHobbiesTitle}
          description={DataValues.aboutMeHobbiesDescription}
        />
        <div className="h-[30px]" />
        <TextPairsType1
          title={DataValues.aboutMeGoalTitle}
          description={DataValues.aboutMeGoalDescription}
        />
      </div>

      <div className="h-10" />

      {/* Titles Section */}
      <div className="w-full flex flex-col items-start">
        <ContainerCardType1
          title={DataValues.aboutMeStudentTitle}
          description={DataValues.aboutMeStudentDescription}
          image="student"
          message={DataValues.linkedinURL}
          url={DataValues.linkedinURL}
        />
        <div className="h-5" />
        <ContainerCardType1
          title={DataValues.aboutMeEnthusiastTitle}
          description={DataValues.aboutMeEnthusiastDescription}
          image="volunteer"
          message={DataValues.linkedinURL}
          url={DataValues.linkedinURL}
        />
        <div className="h-5" />
        <ContainerCardType1
          title={DataValues.aboutMeDeveloperTitle}
          description={DataValues.aboutMeDeveloperDescription}
          image="developer"
          message={DataValues.linkedinURL}
          url={DataValues.linkedinURL}
        />
      </div>

      <div className="h-10" />
    </section>
  )
}

