import { contactUrl, paths } from '@shared/config'
import { useTranslation } from 'react-i18next'

export function useDirections() {
  const { t } = useTranslation()

  return [
    {
      id: 'mentoring',
      title: t('directions.mentoring.title'),
      description: t('directions.mentoring.description'),
      href: paths.mentoring,
      cta: contactUrl('mentoring'),
    },
    {
      id: 'development',
      title: t('directions.development.title'),
      description: t('directions.development.description'),
      href: paths.development,
      cta: contactUrl('development'),
    },
    {
      id: 'education',
      title: t('directions.education.title'),
      description: t('directions.education.description'),
      href: paths.education,
      cta: contactUrl('education'),
    },
  ]
}
