import { useTranslation } from 'react-i18next'

export function useCoursesContent() {
  const { t } = useTranslation()

  return {
    highlights: t('courses.highlights', { returnObjects: true }) as string[],
    topics: t('courses.topics', { returnObjects: true }) as string[],
  }
}
