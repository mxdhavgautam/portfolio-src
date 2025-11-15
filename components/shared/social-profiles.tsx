// Equivalent to Flutter's SocialProfiles widget

import { ButtonIcon } from './button-icon'
import { DataValues } from '@/data/data-values'

const socialLinks = [
  { name: 'dev', url: DataValues.devURL },
  { name: 'github', url: DataValues.githubURL },
  { name: 'linkedin', url: DataValues.linkedinURL },
  { name: 'twitter', url: DataValues.twitterURL },
  { name: 'telegram', url: DataValues.telegramURL },
  { name: 'instagram', url: DataValues.instagramURL },
]

export function SocialProfiles() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center" style={{ gap: '10px' }}>
        {socialLinks.map((link) => (
          <ButtonIcon
            key={link.name}
            name={link.name}
            url={link.url}
            height={30}
            width={30}
          />
        ))}
      </div>
      <div className="h-5" />
      <p className="text-grey-dark text-sm text-center">My Public Profiles ^</p>
    </div>
  )
}

