import { Hero, ProjectCard, useProjects } from '@entities'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { contactUrl, paths } from '@shared/config'
import { PageMeta, usePersonJsonLd } from '@shared/lib/seo'
import { BulletList, ChipList, CtaButton, Section } from '@shared/ui'
import { useTranslation } from 'react-i18next'
import { useAboutContent } from '../model/content'

export function AboutPage() {
  const { t } = useTranslation()
  const { bio, skillGroups, personal } = useAboutContent()
  const projects = useProjects()
  const personJsonLd = usePersonJsonLd()

  return (
    <>
      <PageMeta
        title={t('about.metaTitle')}
        description={bio}
        path={paths.about}
        jsonLd={personJsonLd}
      />
      <Hero description={bio} />
      <Section title={t('about.skillsTitle')}>
        <Grid container spacing={3}>
          {skillGroups.map((g) => (
            <Grid key={g.title} size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6" gutterBottom>
                {g.title}
              </Typography>
              <ChipList items={g.items} />
            </Grid>
          ))}
        </Grid>
      </Section>
      <Section title={t('about.openSourceTitle')}>
        <Grid container spacing={3}>
          {projects.slice(0, 3).map((p) => (
            <Grid key={p.id} size={{ xs: 12, md: 4 }}>
              <ProjectCard project={p} />
            </Grid>
          ))}
        </Grid>
      </Section>
      <Section title={t('about.educationTitle')}>
        <Typography>{t('about.educationText')}</Typography>
      </Section>
      <Section title={t('about.personallyTitle')}>
        <BulletList items={personal} />
      </Section>
      <Section>
        <Stack
          direction="row"
          sx={{ gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <CtaButton to={paths.resume} variant="outlined">
            {t('about.resumeCta')}
          </CtaButton>
          <CtaButton to={contactUrl()}>{t('about.contactCta')}</CtaButton>
        </Stack>
      </Section>
    </>
  )
}
