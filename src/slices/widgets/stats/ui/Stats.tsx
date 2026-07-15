import { Stat, useStats } from '@entities/stat'
import Grid from '@mui/material/Grid'
import { Section } from '@shared/ui'
import { useTranslation } from 'react-i18next'

export function Stats() {
  const { t } = useTranslation()
  const stats = useStats()

  return (
    <Section title={t('stats.title')}>
      <Grid container spacing={2}>
        {stats.map((s) => (
          <Grid key={s.label} size={{ xs: 6, md: 3 }}>
            <Stat {...s} />
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}
