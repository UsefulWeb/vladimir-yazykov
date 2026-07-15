import { useTranslation } from 'react-i18next'
import {
  developmentAnchors,
  type NavGroup,
  type NavMenuItem,
  paths,
  type ResumeSlug,
  resumePath,
  resumeSlugs,
} from './routes'

export function useResumeDirections(): { slug: ResumeSlug; label: string }[] {
  const { t } = useTranslation()
  return resumeSlugs.map((slug) => ({ slug, label: t(`resumeNav.${slug}`) }))
}

export function useNavMenu(): NavMenuItem[] {
  const { t } = useTranslation()
  const resumeDirections = useResumeDirections()

  return [
    { label: t('nav.development'), path: paths.development },
    {
      label: t('nav.education'),
      path: paths.education,
      children: [
        { label: t('nav.mentoring'), path: paths.mentoring },
        { label: t('nav.courses'), path: paths.courses },
      ],
    },
    {
      label: t('nav.resume'),
      path: paths.resume,
      children: resumeDirections.map(({ slug, label }) => ({
        label,
        path: resumePath(slug),
      })),
    },
    {
      label: t('nav.about'),
      path: paths.about,
      children: [
        { label: t('nav.projects'), path: paths.projects },
        { label: t('nav.contacts'), path: paths.contacts },
      ],
    },
  ]
}

export function useFooterNav(): NavGroup[] {
  const { t } = useTranslation()

  return [
    {
      label: t('nav.development'),
      path: paths.development,
      children: [
        {
          label: t('development.services.ai.title'),
          path: `${paths.development}#${developmentAnchors.ai}`,
        },
        {
          label: t('development.services.mobile.title'),
          path: `${paths.development}#${developmentAnchors.mobile}`,
        },
        {
          label: t('development.services.chatbots.title'),
          path: `${paths.development}#${developmentAnchors.chatbots}`,
        },
      ],
    },
    {
      label: t('nav.education'),
      path: paths.education,
      children: [
        { label: t('nav.mentoring'), path: paths.mentoring },
        { label: t('nav.courses'), path: paths.courses },
      ],
    },
    {
      label: t('nav.about'),
      path: paths.about,
      children: [
        { label: t('nav.projects'), path: paths.projects },
        { label: t('nav.contacts'), path: paths.contacts },
      ],
    },
  ]
}
