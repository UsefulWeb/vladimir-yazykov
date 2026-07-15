import { useTranslation } from 'react-i18next'

export function useEducationContent() {
  const { t } = useTranslation()

  return {
    services: t('education.services', { returnObjects: true }) as string[],
    experience: t('education.experience', {
      returnObjects: true,
    }) as string[],
    numbers: t('education.numbers', { returnObjects: true }) as string[],
  }
}
