import { contacts, site, siteUrl } from '@shared/config'
import { useTranslation } from 'react-i18next'

export function usePersonJsonLd() {
  const { t } = useTranslation()

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: t('common.siteName'),
    jobTitle: 'Frontend Architect',
    email: contacts.email,
    url: 'https://github.com/neizerth',
    image: `${siteUrl}${site.heroImage}`,
    sameAs: [contacts.github, contacts.youtube, contacts.telegram],
  }
}
