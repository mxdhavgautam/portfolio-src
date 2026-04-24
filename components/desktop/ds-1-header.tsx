// Equivalent to Flutter's DS1Header component

import Image from 'next/image'
import { NavBar } from '@/components/shared/nav-bar'
import { SocialProfiles } from '@/components/shared/social-profiles'
import { DataValues } from '@/data/data-values'

export function DS1Header() {
  return (
    <div className="bg-surface-variant dark:bg-background-black pt-[60px] pb-[40px]">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-[60px]">
          <div className="w-[250px] h-[250px] flex items-center justify-center">
            <Image
              src="/assets/images/logo.webp"
              alt="Madhav Gautam logo"
              width={250}
              height={250}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[28px] font-bold text-primary text-center">
              {DataValues.headerGreetings}
            </p>
            <h1 className="text-[54px] font-bold text-foreground text-center">
              {DataValues.headerName}
            </h1>
            <p className="text-xl font-medium text-grey-dark text-center">
              {DataValues.headerTitle}
            </p>
            <div className="mt-5">
              <SocialProfiles />
            </div>
          </div>
        </div>
        <div className="mt-[60px]">
          <NavBar />
        </div>
      </div>
    </div>
  )
}
