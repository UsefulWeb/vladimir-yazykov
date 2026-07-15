import Stack from '@mui/material/Stack'
import Step from '@mui/material/Step'
import StepContent from '@mui/material/StepContent'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'
import { contactUrl, paths } from '@shared/config'
import { PageMeta } from '@shared/lib/seo'
import { BulletList, ChipList, CtaButton, Section } from '@shared/ui'
import { PageHero } from '@widgets'
import { useTranslation } from 'react-i18next'
import { stack, useDevelopmentContent } from '../model/content'
import { useDevelopmentServices } from '../model/services'

export function DevelopmentPage() {
  const { t } = useTranslation()
  const { tasks, process, cooperation } = useDevelopmentContent()
  const developmentServices = useDevelopmentServices()

  return (
    <>
      <PageMeta
        title={t('development.metaTitle')}
        description={t('development.metaDescription')}
        path={paths.development}
      />
      <PageHero
        title={t('development.heroTitle')}
        subtitle={t('development.heroSubtitle')}
      />
      {developmentServices.map((service) => (
        <Section key={service.id} title={service.title} id={service.id}>
          <BulletList items={service.items} />
        </Section>
      ))}
      <Section title={t('development.tasksTitle')}>
        <BulletList items={tasks} />
      </Section>
      <Section title={t('development.stackTitle')}>
        <ChipList items={stack} />
      </Section>
      <Section title={t('development.processTitle')}>
        <Stepper orientation="vertical" nonLinear sx={{ maxWidth: 560 }}>
          {process.map((step) => (
            <Step key={step.label} active completed={false}>
              <StepLabel>
                <Typography sx={{ fontWeight: 700 }}>{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <Typography color="text.secondary">
                  {step.description}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Section>
      <Section title={t('development.cooperationTitle')}>
        <BulletList items={cooperation} />
      </Section>
      <Section>
        <Stack
          direction="row"
          sx={{ gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <CtaButton to={paths.projects} variant="outlined">
            {t('development.casesCta')}
          </CtaButton>
          <CtaButton to={contactUrl('development')}>
            {t('development.discussCta')}
          </CtaButton>
        </Stack>
      </Section>
    </>
  )
}
