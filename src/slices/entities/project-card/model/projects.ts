import { useTranslation } from 'react-i18next'

export type ProjectCategory =
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'management'
  | 'education'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  tagline: string
  metrics: string[]
  stack: string[]
  href?: string
  githubRepo?: string
  hideLastCommitBadge?: boolean
  problem?: string
  solution?: string
}

interface ProjectMeta {
  id: string
  category: ProjectCategory
  href?: string
  githubRepo?: string
  hideLastCommitBadge?: boolean
}

const projectMeta: ProjectMeta[] = [
  {
    id: 'arkham-divider',
    category: 'frontend',
    href: 'https://arkham-divider.com',
    githubRepo: 'neizerth/ArkhamDivider',
  },
  {
    id: 'arkham-investigator',
    category: 'frontend',
    href: 'https://github.com/neizerth/ArkhamInvestigator',
    githubRepo: 'neizerth/ArkhamInvestigator',
  },
  {
    id: 'amocrm',
    category: 'backend',
    href: 'https://github.com/UsefulWeb/AmoCRM',
    githubRepo: 'UsefulWeb/AmoCRM',
    hideLastCommitBadge: true,
  },
  { id: 'cryptobazar', category: 'backend' },
  { id: 's7-airlines', category: 'fullstack' },
  { id: 'voice-social-network', category: 'fullstack' },
  { id: 'gymnastics-federation', category: 'management' },
  { id: 'yandex-practicum-league-alert', category: 'management' },
  { id: 'edtech', category: 'education', href: 'https://netology.ru' },
  { id: 'rudn', category: 'education' },
  { id: 'ivr-vtb-tele2', category: 'frontend' },
  { id: 'multichainindex', category: 'frontend' },
  { id: 'crosspack', category: 'frontend' },
  { id: 'chrome-extension-parser', category: 'frontend' },
  {
    id: 'beast-minimap',
    category: 'frontend',
    href: 'https://minimap.studiomidhall.com/',
  },
  { id: 'fintorg', category: 'backend' },
  { id: 'radio-components-tracker', category: 'backend' },
  { id: 'telegram-redirector', category: 'backend' },
  { id: 'real-vision-studio', category: 'fullstack' },
  { id: 'practical-psychology-university', category: 'fullstack' },
  { id: 'psychologi-online', category: 'fullstack' },
  { id: 'moscow-property-department', category: 'fullstack' },
  { id: 'trenerskaya', category: 'fullstack' },
  { id: 'video-lecture-schedule', category: 'fullstack' },
  { id: 'bonjoin', category: 'fullstack' },
  { id: 'antirabstvo', category: 'fullstack' },
  { id: 'own-web-studio', category: 'management' },
  { id: 'fiztekh-union', category: 'education' },
  { id: 'geekbrains', category: 'education' },
  { id: 'skolkovo', category: 'education' },
  { id: 'tel-ran', category: 'education' },
  { id: 'edutoria', category: 'education' },
  { id: 'tutorplace', category: 'education' },
  { id: 'innopolis', category: 'education' },
]

export function useProjects(): Project[] {
  const { t } = useTranslation()

  return projectMeta.map((meta) => ({
    ...meta,
    title: t(`projects.items.${meta.id}.title`),
    tagline: t(`projects.items.${meta.id}.tagline`),
    metrics: t(`projects.items.${meta.id}.metrics`, {
      returnObjects: true,
    }) as string[],
    stack: t(`projects.items.${meta.id}.stack`, {
      returnObjects: true,
    }) as string[],
    problem: t(`projects.items.${meta.id}.problem`),
    solution: t(`projects.items.${meta.id}.solution`),
  }))
}

export function useProjectsByCategory(category: ProjectCategory): Project[] {
  const projects = useProjects()
  return projects.filter((p) => p.category === category)
}

export function useProjectCategoryLabels(): Record<ProjectCategory, string> {
  const { t } = useTranslation()

  return {
    frontend: t('projects.categories.frontend'),
    backend: t('projects.categories.backend'),
    fullstack: t('projects.categories.fullstack'),
    management: t('projects.categories.management'),
    education: t('projects.categories.education'),
  }
}
