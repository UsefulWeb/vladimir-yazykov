import Stack from '@mui/material/Stack'
import { contactUrl, paths } from '@shared/config'
import { PageMeta } from '@shared/lib/seo'
import { BulletList, CtaButton, Section } from '@shared/ui'
import { Faq, PageHero, useMentoringFaq } from '@widgets'
import { useTranslation } from 'react-i18next'
import { useMentoringContent } from '../model/content'

export function MentoringPage() {
  const { t } = useTranslation()
  const { forWho, whatIGive, formats, proof } = useMentoringContent()
  const mentoringFaq = useMentoringFaq()

  return (
    <>
      <PageMeta
        title={t('mentoring.metaTitle')}
        description={t('mentoring.metaDescription')}
        path={paths.mentoring}
      />
      <PageHero
        title={t('mentoring.heroTitle')}
        subtitle={t('mentoring.heroSubtitle')}
      />
      <Section title={t('mentoring.forWhoTitle')}>
        <BulletList items={forWho} />
      </Section>
      <Section title={t('mentoring.whatIGiveTitle')}>
        <BulletList items={whatIGive} />
      </Section>
      <Section title={t('mentoring.formatsTitle')}>
        <BulletList items={formats} />
      </Section>
      <Section title={t('mentoring.experienceTitle')}>
        <BulletList items={proof} />
      </Section>
      <Faq title={t('mentoring.faq.title')} items={mentoringFaq} />
      <Section>
        <Stack direction="row" sx={{ justifyContent: 'center' }}>
          <CtaButton to={contactUrl('mentoring')}>
            {t('mentoring.cta')}
          </CtaButton>
        </Stack>
      </Section>
    </>
  )
}
