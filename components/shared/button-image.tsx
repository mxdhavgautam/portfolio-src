// Equivalent to Flutter's ButtonImage widget

import Image from 'next/image'

interface ButtonImageProps {
  name: string
  url: string
  height?: number
  width?: number
}

export function ButtonImage({
  name,
  url,
  height = 70,
  width = 70,
}: ButtonImageProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={url}
      className="hover:opacity-80 transition-opacity cursor-pointer"
    >
      <Image
        src={`/assets/images/${name}.webp`}
        alt={name}
        width={width}
        height={height}
      />
    </a>
  )
}

