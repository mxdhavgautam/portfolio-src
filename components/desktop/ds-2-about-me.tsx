// Equivalent to Flutter's DS2AboutMe component

'use client'

import { TextPairsType1 } from '../shared/text-pairs'
import { ContainerCardType1 } from '../shared/container-card'
import { FrameTitle } from '../shared/frame-title'
import { DataValues } from '@/data/data-values'

export function DS2AboutMe() {
  return (
    <section
      id="about"
      className="bg-surface p-[40px] flex flex-col items-start"
    >
      <FrameTitle
        title={DataValues.aboutMeTitle}
        description={DataValues.aboutMeDescription}
        isDesktop={true}
      />
      <div className="h-10" />

      {/* Bio Section */}
      <div className="w-full flex items-start">
        <div className="flex-1 flex flex-col items-start">
          <TextPairsType1
            title={DataValues.aboutMeBiographyTitle}
            description={DataValues.aboutMeBiographyDescription}
          />
        </div>
        <div className="flex-1 flex flex-col items-start" style={{ marginLeft: '8%' }}>
          <div className="h-[30px]" />
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
        </div>
        <div className="flex-1 flex flex-col items-start" style={{ marginLeft: '8%' }}>
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
      </div>

      <div className="h-10" />

      {/* Titles Section */}
      <div className="w-full flex items-start">
        <div className="flex-1">
          <ContainerCardType1
            title={DataValues.aboutMeStudentTitle}
            description={DataValues.aboutMeStudentDescription}
            image="student"
            message={DataValues.linkedinURL}
            url={DataValues.linkedinURL}
          />
        </div>
        <div className="flex-1" style={{ marginLeft: '3%' }}>
          <ContainerCardType1
            title={DataValues.aboutMeEnthusiastTitle}
            description={DataValues.aboutMeEnthusiastDescription}
            image="volunteer"
            message={DataValues.linkedinURL}
            url={DataValues.linkedinURL}
          />
        </div>
        <div className="flex-1" style={{ marginLeft: '3%' }}>
          <ContainerCardType1
            title={DataValues.aboutMeDeveloperTitle}
            description={DataValues.aboutMeDeveloperDescription}
            image="developer"
            message={DataValues.linkedinURL}
            url={DataValues.linkedinURL}
          />
        </div>
      </div>

      <div className="h-10" />
    </section>
  )
}

