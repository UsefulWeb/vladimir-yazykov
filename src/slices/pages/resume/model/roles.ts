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

const experienceIndexes = [0, 1, 2]

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
    experience: experienceIndexes.map((i) => ({
      company: t(`resume.roles.${slug}.experience.${i}.company`),
      companyLine: t(`resume.roles.${slug}.experience.${i}.companyLine`),
      location: t(`resume.roles.${slug}.experience.${i}.location`),
      role: t(`resume.roles.${slug}.experience.${i}.role`),
      period: t(`resume.roles.${slug}.experience.${i}.period`),
      mission: t(`resume.roles.${slug}.experience.${i}.mission`),
      bullets: t(`resume.roles.${slug}.experience.${i}.bullets`, {
        returnObjects: true,
      }) as string[],
    })),
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
