import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { contacts, paths } from '@shared/config'
import { PageMeta } from '@shared/lib/seo'
import { BulletList, ChipList, CtaButton, Section } from '@shared/ui'
import { PageHero } from '@widgets'
import { useTranslation } from 'react-i18next'
import { useCoursesContent } from '../model/content'

export function CoursesPage() {
  const { t } = useTranslation()
  const { highlights, topics } = useCoursesContent()

  return (
    <>
      <PageMeta
        title={t('courses.metaTitle')}
        description={t('courses.metaDescription')}
        path={paths.courses}
      />
      <PageHero
        title={t('courses.heroTitle')}
        subtitle={t('courses.heroSubtitle')}
      />
      <Section title={t('courses.aboutTitle')}>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {t('courses.aboutText')}
        </Typography>
        <BulletList items={highlights} />
      </Section>
      <Section title={t('courses.topicsTitle')}>
        <ChipList items={topics} />
      </Section>
      <Section>
        <Stack
          direction="row"
          sx={{ gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <CtaButton to={paths.education} variant="outlined">
            {t('courses.edtechCta')}
          </CtaButton>
          <Button
            component="a"
            href={contacts.youtube}
            variant="outlined"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('courses.youtubeCta')}
          </Button>
          <CtaButton to={paths.mentoring}>
            {t('courses.mentoringCta')}
          </CtaButton>
        </Stack>
      </Section>
    </>
  )
}
