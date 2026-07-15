import { useTranslation } from 'react-i18next'

export function useApproachItems(): string[] {
  const { t } = useTranslation()
  return t('approach.items', { returnObjects: true }) as string[]
}
