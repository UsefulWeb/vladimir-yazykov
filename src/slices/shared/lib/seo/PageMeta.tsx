import { site, siteUrl } from '@shared/config'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { usePersonJsonLd } from './personJsonLd'

interface PageMetaProps {
  title: string
  description?: string
  path?: string
  ogImage?: string
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function PageMeta({
  title,
  description,
  path = '/',
  ogImage = site.ogImage,
  noindex = false,
  jsonLd,
}: PageMetaProps) {
  const { t, i18n } = useTranslation()
  const resolvedDescription = description ?? t('common.defaultDescription')
  const fullTitle = `${title} | ${t('common.siteName')}`
  const canonical = `${siteUrl}${path === '/' ? '' : path}`

  return (
    <Helmet>
      <html lang={i18n.resolvedLanguage ?? i18n.language} />
      <title>{fullTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}

export { usePersonJsonLd }
