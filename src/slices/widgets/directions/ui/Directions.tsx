import { DirectionCard, useDirections } from '@entities/direction-card'
import Grid from '@mui/material/Grid'
import { Section } from '@shared/ui'
import { useTranslation } from 'react-i18next'

export function Directions() {
  const { t } = useTranslation()
  const directions = useDirections()

  return (
    <Section title={t('directions.title')} subtitle={t('directions.subtitle')}>
      <Grid container spacing={3}>
        {directions.map((d) => (
          <Grid key={d.id} size={{ xs: 12, md: 4 }}>
            <DirectionCard {...d} />
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}
