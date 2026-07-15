import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { contacts, contactUrl, paths } from '@shared/config'
import { PageMeta } from '@shared/lib/seo'
import { CtaButton, Section } from '@shared/ui'
import { PageHero } from '@widgets'
import { useTranslation } from 'react-i18next'

export function ContactsPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageMeta
        title={t('contacts.metaTitle')}
        description={t('contacts.metaDescription')}
        path={paths.contacts}
      />
      <PageHero
        title={t('contacts.heroTitle')}
        subtitle={t('contacts.heroSubtitle')}
      />
      <Section>
        <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
          <CtaButton to={contactUrl()}>{t('contacts.telegramCta')}</CtaButton>
          <Typography>
            {t('contacts.telegramLabel')}:{' '}
            <Link
              href={contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              @neizerth
            </Link>
          </Typography>
          <Typography>
            {t('contacts.emailLabel')}:{' '}
            <Link href={`mailto:${contacts.email}`}>{contacts.email}</Link>
          </Typography>
          <Typography>
            {t('contacts.phoneLabel')}:{' '}
            <Link href={`tel:${contacts.phone.replace(/\s/g, '')}`}>
              {contacts.phone}
            </Link>
          </Typography>
          <Typography>
            {t('contacts.githubLabel')}:{' '}
            <Link
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/neizerth
            </Link>
          </Typography>
        </Stack>
      </Section>
      <Section title={t('contacts.faqTitle')}>
        <Typography color="text.secondary">{t('contacts.faqText')}</Typography>
      </Section>
    </>
  )
}
