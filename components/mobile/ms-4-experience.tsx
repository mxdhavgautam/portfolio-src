// Equivalent to Flutter's MS4Experience component

import { ContainerCardType3 } from '../shared/container-card'
import { FrameTitle } from '../shared/frame-title'
import { DataValues } from '@/data/data-values'

export function MS4Experience() {
  return (
    <section
      id="experience"
      className="bg-surface p-[40px] flex flex-col items-start"
    >
      <FrameTitle
        title={DataValues.experienceTitle}
        description={DataValues.experienceDescription}
        isDesktop={false}
      />
      <div className="h-[30px]" />
      <ContainerCardType3
        image="cr3ate"
        title={DataValues.experienceOrg3Title}
        role={DataValues.experienceOrg3Role}
        years={DataValues.experienceOrg3Years}
        values={DataValues.experienceOrg3Vales}
        message="Visit cr3ate.ai"
        url="https://cr3ate.ai"
        isButtonEnabled={true}
        buttonText="Check out CR3ATE.AI >>"
      />
      <div className="h-5" />
      <ContainerCardType3
        image="hcl"
        title={DataValues.experienceOrg2Title}
        role={DataValues.experienceOrg2Role}
        years={DataValues.experienceOrg2Years}
        values={DataValues.experienceOrg2Vales}
        message="View my Internship Completion Certificate"
        url="https://drive.google.com/file/d/15zI4GRXVM-6J9CvhuwxzudmmU48hk69s/view?usp=sharing"
        isButtonEnabled={true}
      />
      <div className="h-5" />
      <ContainerCardType3
        image="mod"
        title={DataValues.experienceOrg1Title}
        role={DataValues.experienceOrg1Role}
        years={DataValues.experienceOrg1Years}
        values={DataValues.experienceOrg1Vales}
        message="View my Internship Completion Certificate"
        url="https://drive.google.com/file/d/1koGRWt7gK_vAiK3fTFFl0i-HT11t6icd/view?usp=sharing"
        isButtonEnabled={true}
      />
    </section>
  )
}

