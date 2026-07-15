import { useTranslation } from 'react-i18next'

export function useMentoringContent() {
  const { t } = useTranslation()

  return {
    forWho: t('mentoring.forWho', { returnObjects: true }) as string[],
    whatIGive: t('mentoring.whatIGive', { returnObjects: true }) as string[],
    formats: t('mentoring.formats', { returnObjects: true }) as string[],
    proof: t('mentoring.proof', { returnObjects: true }) as string[],
  }
}
