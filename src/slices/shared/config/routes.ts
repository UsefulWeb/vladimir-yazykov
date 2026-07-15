import { contacts } from './contacts'

export const paths = {
  home: '/',
  mentoring: '/mentoring',
  development: '/development',
  education: '/education',
  courses: '/courses',
  about: '/about',
  projects: '/projects',
  contacts: '/contacts',
  privacy: '/privacy',
  resume: '/resume',
} as const

export type ResumeSlug =
  | 'frontend'
  | 'backend'
  | 'fullstack-node'
  | 'fullstack-php'
  | 'team-lead'
  | 'mentoring-education'

export const resumeSlugs: ResumeSlug[] = [
  'frontend',
  'backend',
  'fullstack-node',
  'fullstack-php',
  'team-lead',
  'mentoring-education',
]

export function resumePath(slug: ResumeSlug) {
  return `${paths.resume}/${slug}`
}

export type ContactType = 'mentoring' | 'development' | 'education' | 'other'

export function contactUrl(_type: ContactType = 'other') {
  return contacts.telegram
}

export type NavLink = {
  label: string
  path: string
}

export type NavGroup = {
  label: string
  path?: string
  children: NavLink[]
}

export type NavMenuItem = NavLink | NavGroup

export function isNavGroup(item: NavMenuItem): item is NavGroup {
  return 'children' in item
}

export const developmentAnchors = {
  ai: 'ai-automation',
  mobile: 'mobile-apps',
  chatbots: 'chatbots',
} as const

export const allRoutes = [
  ...Object.values(paths),
  ...resumeSlugs.map((slug) => resumePath(slug)),
]
