import {
  ProjectCard,
  type ProjectCategory,
  useProjectCategoryLabels,
  useProjects,
} from '@entities'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { paths } from '@shared/config'
import { PageMeta } from '@shared/lib/seo'
import { Section } from '@shared/ui'
import { PageHero } from '@widgets'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const categoryOrder: ProjectCategory[] = [
  'frontend',
  'backend',
  'fullstack',
  'management',
  'education',
]

type Filter = ProjectCategory | 'all'

export function ProjectsPage() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<Filter>('all')
  const projects = useProjects()
  const categoryLabels = useProjectCategoryLabels()
  const visibleCategories =
    filter === 'all' ? categoryOrder : categoryOrder.filter((c) => c === filter)

  const getProjectsByCategory = (category: ProjectCategory) =>
    projects.filter((p) => p.category === category)

  return (
    <>
      <PageMeta
        title={t('projects.metaTitle')}
        description={t('projects.metaDescription')}
        path={paths.projects}
      />
      <PageHero
        title={t('projects.heroTitle')}
        subtitle={t('projects.heroSubtitle')}
      />
      <Section>
        <Stack
          direction="row"
          sx={{
            gap: 1,
            flexWrap: 'wrap',
            position: 'sticky',
            top: 64,
            zIndex: 1,
            bgcolor: 'background.default',
            py: 1,
          }}
        >
          <Chip
            label={`${t('projects.all')} (${projects.length})`}
            color={filter === 'all' ? 'primary' : 'default'}
            variant={filter === 'all' ? 'filled' : 'outlined'}
            onClick={() => setFilter('all')}
          />
          {categoryOrder.map((category) => {
            const count = getProjectsByCategory(category).length
            return (
              <Chip
                key={category}
                label={`${categoryLabels[category]} (${count})`}
                color={filter === category ? 'primary' : 'default'}
                variant={filter === category ? 'filled' : 'outlined'}
                onClick={() => setFilter(category)}
                component="a"
                href={`#${category}`}
                clickable
              />
            )
          })}
        </Stack>
      </Section>
      {visibleCategories.map((category) => {
        const categoryProjects = getProjectsByCategory(category)
        if (categoryProjects.length === 0) return null

        return (
          <Section
            key={category}
            id={category}
            title={categoryLabels[category]}
          >
            <Grid container spacing={3}>
              {categoryProjects.map((p) => (
                <Grid key={p.id} size={{ xs: 12, md: 6 }}>
                  <ProjectCard project={p} expanded />
                </Grid>
              ))}
            </Grid>
          </Section>
        )
      })}
    </>
  )
}
