import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CtaButton } from '@shared/ui'
import { useTranslation } from 'react-i18next'

interface DirectionCardProps {
  title: string
  description: string
  href: string
  cta: string
}

export function DirectionCard({
  title,
  description,
  href,
  cta,
}: DirectionCardProps) {
  const { t } = useTranslation()

  return (
    <Card
      variant="outlined"
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <CtaButton to={href} variant="outlined" color="primary">
          {t('directions.more')}
        </CtaButton>
        <CtaButton to={cta} variant="text" color="primary">
          {t('directions.contact')}
        </CtaButton>
      </CardActions>
    </Card>
  )
}
