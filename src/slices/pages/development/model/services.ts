import { developmentAnchors } from '@shared/config'
import { useTranslation } from 'react-i18next'

const serviceKeys = ['ai', 'mobile', 'chatbots'] as const

export function useDevelopmentServices() {
  const { t } = useTranslation()

  return serviceKeys.map((key) => ({
    id: developmentAnchors[key],
    title: t(`development.services.${key}.title`),
    items: t(`development.services.${key}.items`, {
      returnObjects: true,
    }) as string[],
  }))
}
