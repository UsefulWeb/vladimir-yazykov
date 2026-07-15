import { useTranslation } from 'react-i18next'

export function useStats() {
  const { t } = useTranslation()

  return [
    { value: '20+', label: t('stats.web') },
    { value: '200+', label: t('stats.projects') },
    { value: '150k+', label: t('stats.students') },
    { value: '187', label: t('stats.amocrm') },
  ]
}
