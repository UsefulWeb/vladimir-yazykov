import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import Stack from '@mui/material/Stack'
import { contactUrl, paths } from '@shared/config'
import { PageMeta } from '@shared/lib/seo'
import { BulletList, CtaButton, Section } from '@shared/ui'
import { PageHero } from '@widgets'
import { useTranslation } from 'react-i18next'
import { useEducationContent } from '../model/content'

export function EducationPage() {
  const { t } = useTranslation()
  const { services, experience, numbers } = useEducationContent()

  return (
    <>
      <PageMeta
        title={t('education.metaTitle')}
        description={t('education.metaDescription')}
        path={paths.education}
      />
      <PageHero
        title={t('education.heroTitle')}
        subtitle={t('education.heroSubtitle')}
      />
      <Section title={t('education.servicesTitle')}>
        <BulletList items={services} />
      </Section>
      <Section title={t('education.experienceTitle')}>
        <BulletList items={experience} />
      </Section>
      <Section title={t('education.numbersTitle')}>
        <BulletList items={numbers} icon={TrendingUpIcon} />
      </Section>
      <Section>
        <Stack direction="row" sx={{ justifyContent: 'center' }}>
          <CtaButton to={contactUrl('education')}>
            {t('education.cta')}
          </CtaButton>
        </Stack>
      </Section>
    </>
  )
}
