// Equivalent to Flutter's MS6Projects component

import { ContainerCardType3 } from '../shared/container-card'
import { FrameTitle } from '../shared/frame-title'
import { DataValues } from '@/data/data-values'

export function MS6Projects() {
  return (
    <section
      id="projects"
      className="bg-surface p-[40px] flex flex-col items-start"
    >
      <FrameTitle
        title={DataValues.projectsTitle}
        description={DataValues.projectsDescription}
        isDesktop={false}
      />
      <div className="h-[30px]" />
      <ContainerCardType3
        image="cardiac"
        title={DataValues.projectsOrg3Title}
        role={DataValues.projectsOrg3Role}
        years={DataValues.projectsOrg3Years}
        values={DataValues.projectsOrg3Values}
        message={DataValues.cardiacUrl}
        url={DataValues.cardiacUrl}
        isButtonEnabled={true}
        buttonText="View on GitHub >>"
      />
      <div className="h-[30px]" />
      <ContainerCardType3
        image="portfolio"
        title={DataValues.projectsOrg1Title}
        role={DataValues.projectsOrg1Role}
        years={DataValues.projectsOrg1Years}
        values={DataValues.projectsOrg1Values}
        message={DataValues.siteUrl}
        url={DataValues.siteUrl}
        isButtonEnabled={true}
      />
      <div className="h-[30px]" />
      <ContainerCardType3
        image="society"
        title={DataValues.projectsOrg2Title}
        role={DataValues.projectsOrg2Role}
        years={DataValues.projectsOrg2Years}
        values={DataValues.projectsOrg2Values}
        message={DataValues.societyUrl}
        url={DataValues.societyUrl}
        isButtonEnabled={true}
      />
    </section>
  )
}

