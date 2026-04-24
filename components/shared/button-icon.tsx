// Equivalent to Flutter's ButtonIcon widget

import Image from 'next/image'

interface ButtonIconProps {
  name: string
  url: string
  height?: number
  width?: number
}

export function ButtonIcon({
  name,
  url,
  height = 30,
  width = 30,
}: ButtonIconProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={url}
      className="relative inline-block hover:opacity-80 transition-opacity cursor-pointer"
      style={{ width, height }}
    >
      <Image
        src={`/assets/icons/${name}.png`}
        alt={name}
        width={width}
        height={height}
        className="absolute inset-0 block dark:block"
      />
      <Image
        src={`/assets/icons/${name}-light.png`}
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        className="absolute inset-0 block dark:hidden"
      />
    </a>
  )
}
