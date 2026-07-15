import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import TelegramIcon from '@mui/icons-material/Telegram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import { contacts } from '@shared/config'

const socialItems = [
  { label: 'GitHub', href: contacts.github, icon: GitHubIcon },
  { label: 'YouTube', href: contacts.youtube, icon: YouTubeIcon },
  { label: 'Telegram', href: contacts.telegram, icon: TelegramIcon },
  { label: 'Email', href: `mailto:${contacts.email}`, icon: EmailOutlinedIcon },
] as const

interface SocialLinksProps {
  size?: 'small' | 'medium'
  color?: 'inherit' | 'primary' | 'default'
}

export function SocialLinks({
  size = 'medium',
  color = 'default',
}: SocialLinksProps) {
  return (
    <Stack direction="row" spacing={0.5}>
      {socialItems.map(({ label, href, icon: Icon }) => (
        <Tooltip key={label} title={label}>
          <IconButton
            component="a"
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            aria-label={label}
            color={color}
            size={size}
          >
            <Icon fontSize={size} />
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  )
}
