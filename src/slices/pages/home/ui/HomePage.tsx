import { Hero } from '@entities'
import Stack from '@mui/material/Stack'
import type { SxProps, Theme } from '@mui/material/styles'

const heroOutlinedButtonSx: SxProps<Theme> = {
  color: 'common.white',
  borderColor: 'rgba(255, 255, 255, 0.85)',
  '&:hover': {
    borderColor: 'common.white',
    bgcolor: 'rgba(255, 255, 255, 0.12)',
  },
}

import { contactUrl, paths } from '@shared/config'
import { PageMeta, usePersonJsonLd } from '@shared/lib/seo'
import { CtaButton } from '@shared/ui'
import { Approach, Directions, ProjectsPreview, Stats } from '@widgets'
import { useTranslation } from 'react-i18next'

export function HomePage() {
  const { t } = useTranslation()
  const personJsonLd = usePersonJsonLd()

  return (
    <>
      <PageMeta
        title={t('home.metaTitle')}
        path={paths.home}
        jsonLd={personJsonLd}
      />
      <Hero>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
          sx={{ pt: 1 }}
        >
          <CtaButton
            to={paths.mentoring}
            variant="contained"
            sx={{
              bgcolor: 'common.white',
              color: 'primary.main',
              '&:hover': { bgcolor: 'grey.200' },
            }}
          >
            {t('home.ctaMentoring')}
          </CtaButton>
          <CtaButton
            to={contactUrl('development')}
            variant="outlined"
            sx={heroOutlinedButtonSx}
          >
            {t('home.ctaDiscuss')}
          </CtaButton>
          <CtaButton
            to={paths.education}
            variant="outlined"
            sx={heroOutlinedButtonSx}
          >
            {t('home.ctaEducation')}
          </CtaButton>
        </Stack>
      </Hero>
      <Directions />
      <Stats />
      <ProjectsPreview />
      <Approach />
    </>
  )
}
