import { useTranslation } from 'react-i18next'

interface ProcessStep {
  label: string
  description: string
}

export const stack = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'NestJS',
  'GraphQL',
  'FSD',
  'Redux Toolkit',
  'React Query',
  'Vitest',
  'Playwright',
  'Storybook',
]

export function useDevelopmentContent() {
  const { t } = useTranslation()

  return {
    tasks: t('development.tasks', { returnObjects: true }) as string[],
    process: t('development.process', {
      returnObjects: true,
    }) as ProcessStep[],
    cooperation: t('development.cooperation', {
      returnObjects: true,
    }) as string[],
  }
}
