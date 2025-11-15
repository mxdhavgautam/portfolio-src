// Equivalent to Flutter's MS1Header component

import Image from 'next/image'
import { SocialProfiles } from '../shared/social-profiles'
import { DataValues } from '@/data/data-values'

export function MS1Header() {
  return (
    <div className="bg-white dark:bg-background-black pb-[40px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
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
          <div className="h-10" />
          <div className="flex flex-col items-center">
            <p className="text-[28px] font-bold text-primary">
              {DataValues.headerGreetings}
            </p>
            <h1 className="text-[54px] font-bold text-foreground text-center">
              {DataValues.headerName}
            </h1>
            <p className="text-xl font-medium text-grey-dark">
              {DataValues.headerTitle}
            </p>
            <div className="h-5" />
            <SocialProfiles />
          </div>
        </div>
        <div className="h-10" />
      </div>
    </div>
  )
}

