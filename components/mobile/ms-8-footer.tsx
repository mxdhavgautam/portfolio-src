// Equivalent to Flutter's MS8Footer component

import { DataValues } from '@/data/data-values'

export function MS8Footer() {
  const handleSourceCodeClick = () => {
    window.open(DataValues.siteUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="w-full bg-surface-variant dark:bg-background-black">
      <div className="flex flex-col items-center">
        <div className="h-10" />
        <p className="text-sm font-normal text-foreground text-center">
          {DataValues.appName} (v{DataValues.appVersion})
        </p>
        <div className="h-2.5" />
        <div className="flex flex-wrap items-center justify-center gap-x-[5px] gap-y-1 px-4">
          <p className="text-sm font-normal text-foreground text-center">
            {DataValues.builtWith}
          </p>
          <button
            onClick={handleSourceCodeClick}
            title={DataValues.siteUrl}
            className="text-sm font-normal text-primary hover:opacity-80 transition-opacity cursor-pointer whitespace-nowrap"
          >
            Get Source Code
          </button>
        </div>
        <div className="h-2.5" />
        <p className="text-sm font-normal text-foreground text-center px-4">
          {DataValues.copyright}
        </p>
        <div className="h-10" />
      </div>
    </footer>
  )
}

