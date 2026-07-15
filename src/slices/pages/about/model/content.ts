import { useTranslation } from 'react-i18next'

const skillGroupKeys = ['frontend', 'architecture', 'backend', 'tools'] as const

export function useAboutContent() {
  const { t } = useTranslation()

  return {
    bio: t('about.bio'),
    skillGroups: skillGroupKeys.map((key) => ({
      title: t(`about.skillGroups.${key}.title`),
      items: t(`about.skillGroups.${key}.items`, {
        returnObjects: true,
      }) as string[],
    })),
    personal: t('about.personal', { returnObjects: true }) as string[],
  }
}
