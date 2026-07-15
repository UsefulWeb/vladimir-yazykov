import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { paths } from '@shared/config'
import { PageMeta } from '@shared/lib/seo'
import { CtaButton, Section } from '@shared/ui'
import { useTranslation } from 'react-i18next'

export function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageMeta title={t('notFound.metaTitle')} noindex path="/404" />
      <Section>
        <Stack spacing={2} sx={{ py: 8, alignItems: 'center' }}>
          <Typography variant="h3" component="h1">
            404
          </Typography>
          <Typography color="text.secondary">{t('notFound.text')}</Typography>
          <CtaButton to={paths.home}>{t('notFound.homeCta')}</CtaButton>
        </Stack>
      </Section>
    </>
  )
}
