import Typography from '@mui/material/Typography'
import { paths } from '@shared/config'
import { PageMeta } from '@shared/lib/seo'
import { Section } from '@shared/ui'
import { useTranslation } from 'react-i18next'

export function PrivacyPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageMeta
        title={t('privacy.metaTitle')}
        description={t('privacy.metaDescription')}
        path={paths.privacy}
      />
      <Section title={t('privacy.title')}>
        <Typography sx={{ mb: 2 }}>{t('privacy.text1')}</Typography>
        <Typography sx={{ mb: 2 }}>{t('privacy.text2')}</Typography>
      </Section>
    </>
  )
}
