import PrintIcon from '@mui/icons-material/Print'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { contacts, contactUrl, paths } from '@shared/config'
import { PageMeta } from '@shared/lib/seo'
import { BulletList, ChipList, CtaButton, Section } from '@shared/ui'
import { PageHero } from '@widgets'
import { useTranslation } from 'react-i18next'
import { Navigate, useParams } from 'react-router-dom'
import {
  useResumeEducation,
  useResumeLanguages,
  useResumeRole,
} from '../model/roles'

export function ResumeRolePage() {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const role = useResumeRole(slug ?? '')
  const education = useResumeEducation()
  const languages = useResumeLanguages()

  if (!role) {
    return <Navigate to={paths.resume} replace />
  }

  return (
    <>
      <PageMeta
        title={`${t('resume.metaTitlePrefix')}: ${role.title}`}
        description={role.summary}
        path={`${paths.resume}/${role.slug}`}
      />
      <PageHero title={t('common.siteName')} subtitle={role.title} />
      <Section>
        <Stack
          direction="row"
          sx={{
            gap: { xs: 1, sm: 2 },
            flexWrap: 'wrap',
            color: 'text.secondary',
          }}
        >
          <Typography variant="body2" component="span">
            {contacts.email}
          </Typography>
          <Typography variant="body2" component="span">
            •
          </Typography>
          <Typography variant="body2" component="span">
            {contacts.phone}
          </Typography>
          <Typography variant="body2" component="span">
            •
          </Typography>
          <Typography variant="body2" component="span">
            {t('resume.telegramLabel')}: @neizerth
          </Typography>
          <Typography variant="body2" component="span">
            •
          </Typography>
          <Typography variant="body2" component="span">
            {t('resume.githubLabel')}: neizerth
          </Typography>
        </Stack>
      </Section>
      <Section title={t('resume.aboutMeTitle')}>
        <Typography color="text.secondary">{role.summary}</Typography>
      </Section>
      <Section title={t('resume.experienceTitle')}>
        <Stack spacing={3}>
          {role.experience.map((entry, i) => (
            <Stack
              key={entry.company}
              spacing={1.25}
              sx={{ '@media print': { breakInside: 'avoid' } }}
            >
              {i > 0 && <Divider sx={{ mb: 1.25 }} />}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                sx={{ justifyContent: 'space-between', gap: 0.5 }}
              >
                <Typography sx={{ fontWeight: 700 }}>
                  {entry.company} — {entry.companyLine}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {entry.location}
                </Typography>
              </Stack>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                sx={{ justifyContent: 'space-between', gap: 0.5 }}
              >
                <Typography color="text.secondary">{entry.role}</Typography>
                <Typography color="text.secondary" variant="body2">
                  {entry.period}
                </Typography>
              </Stack>
              <Typography sx={{ fontStyle: 'italic' }} color="text.secondary">
                {entry.mission}
              </Typography>
              <BulletList items={entry.bullets} />
            </Stack>
          ))}
        </Stack>
      </Section>
      <Section title={t('resume.educationTitle')}>
        <Typography color="text.secondary">{education}</Typography>
      </Section>
      <Section title={t('resume.skillsLanguagesTitle')}>
        <Stack spacing={2}>
          <ChipList items={role.skills} />
          <Typography color="text.secondary">{languages}</Typography>
        </Stack>
      </Section>
      <Section>
        <Stack
          className="no-print"
          direction="row"
          sx={{ gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Button
            variant="outlined"
            startIcon={<PrintIcon />}
            onClick={() => window.print()}
          >
            {t('resume.printCta')}
          </Button>
          <CtaButton to={contactUrl()}>{t('resume.discussCta')}</CtaButton>
        </Stack>
      </Section>
    </>
  )
}
