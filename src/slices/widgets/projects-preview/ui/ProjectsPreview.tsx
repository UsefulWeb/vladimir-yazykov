import { ProjectCard, useProjects } from '@entities/project-card'
import { FavoriteButton } from '@features'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { paths } from '@shared/config'
import { CtaButton, Section } from '@shared/ui'
import { useTranslation } from 'react-i18next'

export function ProjectsPreview() {
  const { t } = useTranslation()
  const projects = useProjects()

  return (
    <Section
      title={t('projectsPreview.title')}
      subtitle={t('projectsPreview.subtitle')}
    >
      <Stack spacing={3}>
        <Grid container spacing={3}>
          {projects.slice(0, 3).map((p) => (
            <Grid key={p.id} size={{ xs: 12, md: 4 }}>
              <ProjectCard
                project={p}
                actions={<FavoriteButton projectId={p.id} />}
              />
            </Grid>
          ))}
        </Grid>
        <CtaButton to={paths.projects} variant="outlined">
          {t('projectsPreview.allCta')}
        </CtaButton>
      </Stack>
    </Section>
  )
}
