import { DS1Header } from '@/components/desktop/ds-1-header'
import { DS2AboutMe } from '@/components/desktop/ds-2-about-me'
import { DS3Education } from '@/components/desktop/ds-3-education'
import { DS4Experience } from '@/components/desktop/ds-4-experience'
import { DS5Extracurriculars } from '@/components/desktop/ds-5-extracurriculars'
import { DS6Projects } from '@/components/desktop/ds-6-projects'
import { DS7Contact } from '@/components/desktop/ds-7-contact'
import { DS8Footer } from '@/components/desktop/ds-8-footer'
import { MS1Header } from '@/components/mobile/ms-1-header'
import { MS2AboutMe } from '@/components/mobile/ms-2-about-me'
import { MS3Education } from '@/components/mobile/ms-3-education'
import { MS4Experience } from '@/components/mobile/ms-4-experience'
import { MS5Extracurriculars } from '@/components/mobile/ms-5-extracurriculars'
import { MS6Projects } from '@/components/mobile/ms-6-projects'
import { MS7Contact } from '@/components/mobile/ms-7-contact'
import { MS8Footer } from '@/components/mobile/ms-8-footer'
import { PageControls } from '@/components/shared/page-controls'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface">
      <PageControls />

      <main className="flex flex-col pt-14 desktop:pt-0">
        <div className="hidden desktop:block">
          <DS1Header />
          <DS2AboutMe />
          <DS3Education />
          <DS4Experience />
          <DS6Projects />
          <DS5Extracurriculars />
          <DS7Contact />
          <DS8Footer />
        </div>

        <div className="desktop:hidden">
          <MS1Header />
          <MS2AboutMe />
          <MS3Education />
          <MS4Experience />
          <MS6Projects />
          <MS5Extracurriculars />
          <MS7Contact />
          <MS8Footer />
        </div>
      </main>
    </div>
  )
}
