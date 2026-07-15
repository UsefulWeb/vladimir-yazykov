export const contacts = {
  email: 'neizerth@mail.ru',
  phone: '+7 (916) 309-01-45',
  github: 'https://github.com/neizerth',
  youtube: 'https://www.youtube.com/@usefulweb',
  telegram: 'https://t.me/neizerth',
} as const

export const socialLinks = [
  { label: 'GitHub', href: contacts.github },
  { label: 'YouTube', href: contacts.youtube },
  { label: 'Telegram', href: contacts.telegram },
  { label: 'Email', href: `mailto:${contacts.email}` },
] as const
