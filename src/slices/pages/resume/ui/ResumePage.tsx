import { DirectionCard } from '@entities'
import Grid from '@mui/material/Grid'
import { contactUrl, paths, resumePath } from '@shared/config'
import { PageMeta } from '@shared/lib/seo'
import { Section } from '@shared/ui'
import { PageHero } from '@widgets'
import { useTranslation } from 'react-i18next'
import { useResumeRoles } from '../model/roles'

export function ResumePage() {
  const { t } = useTranslation()
  const resumeRoles = useResumeRoles()

  return (
    <>
      <PageMeta
        title={t('resume.heroTitle')}
        description={t('resume.metaDescription')}
        path={paths.resume}
      />
      <PageHero
        title={t('resume.heroTitle')}
        subtitle={t('resume.heroSubtitle')}
      />
      <Section>
        <Grid container spacing={3}>
          {resumeRoles.map((role) => (
            <Grid key={role.slug} size={{ xs: 12, md: 4 }}>
              <DirectionCard
                title={role.title}
                description={role.tagline}
                href={resumePath(role.slug)}
                cta={contactUrl()}
              />
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  )
}
