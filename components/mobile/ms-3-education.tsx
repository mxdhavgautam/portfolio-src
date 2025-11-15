// Equivalent to Flutter's MS3Education component

import { ContainerCardType2 } from '../shared/container-card'
import { FrameTitle } from '../shared/frame-title'
import { DataValues } from '@/data/data-values'

export function MS3Education() {
  return (
    <section
      id="education"
      className="bg-surface p-[40px] flex flex-col items-start"
    >
      <FrameTitle
        title={DataValues.educationTitle}
        description={DataValues.educationDescription}
        isDesktop={false}
      />
      <div className="h-[30px]" />
      <ContainerCardType2
        image="vit"
        title={DataValues.educationOrg2Title}
        buttonEnabled={true}
        values={[
          DataValues.educationOrg2Course1Name,
          DataValues.educationOrg2Course1Grade,
          DataValues.educationOrg2Course1Year,
          DataValues.educationOrg2Course2Name,
          DataValues.educationOrg2Course2Grade,
          DataValues.educationOrg2Course2Year,
          DataValues.educationOrg2Course3Name,
          DataValues.educationOrg2Course3Grade,
          DataValues.educationOrg2Course3Year,
        ]}
        message={DataValues.linkedinURL}
        url={DataValues.linkedinURL}
      />
      <div className="h-5" />
      <ContainerCardType2
        image="ncs"
        title={DataValues.educationOrg1Title}
        buttonEnabled={true}
        values={[
          DataValues.educationOrg1Course1Name,
          DataValues.educationOrg1Course1Grade,
          DataValues.educationOrg1Course1Year,
          DataValues.educationOrg1Course2Name,
          DataValues.educationOrg1Course2Grade,
          DataValues.educationOrg1Course2Year,
          '',
          '',
          '',
        ]}
        message={DataValues.linkedinURL}
        url={DataValues.linkedinURL}
      />
    </section>
  )
}

