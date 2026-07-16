import { type ResumeSlug, resumeSlugs } from '@shared/config'
import { useTranslation } from 'react-i18next'

export interface ResumeExperienceEntry {
  company: string
  companyLine: string
  location: string
  role: string
  period: string
  mission: string
  bullets: string[]
}

export interface ResumeRole {
  slug: ResumeSlug
  title: string
  tagline: string
  summary: string
  skills: string[]
  experience: ResumeExperienceEntry[]
}

export function useResumeRoles(): ResumeRole[] {
  const { t } = useTranslation()

  return resumeSlugs.map((slug) => ({
    slug,
    title: t(`resume.roles.${slug}.title`),
    tagline: t(`resume.roles.${slug}.tagline`),
    summary: t(`resume.roles.${slug}.summary`),
    skills: t(`resume.roles.${slug}.skills`, {
      returnObjects: true,
    }) as string[],
    experience: t(`resume.roles.${slug}.experience`, {
      returnObjects: true,
    }) as ResumeExperienceEntry[],
  }))
}

export function useResumeRole(slug: string): ResumeRole | undefined {
  const roles = useResumeRoles()
  return roles.find((role) => role.slug === slug)
}

export function useResumeEducation(): string {
  const { t } = useTranslation()
  return t('resume.education')
}

export function useResumeLanguages(): string {
  const { t } = useTranslation()
  return t('resume.languages')
}
