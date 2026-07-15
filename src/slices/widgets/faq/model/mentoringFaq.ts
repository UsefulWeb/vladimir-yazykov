import { useTranslation } from 'react-i18next'

export interface FaqItem {
  question: string
  answer: string
}

export function useMentoringFaq(): FaqItem[] {
  const { t } = useTranslation()
  return t('mentoring.faq.items', { returnObjects: true }) as FaqItem[]
}
