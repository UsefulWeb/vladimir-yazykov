import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import {
  formatCopyrightYear,
  type NavGroup,
  paths,
  useFooterNav,
} from '@shared/config'
import { SocialLinks } from '@shared/ui'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'

function FooterColumn({ group }: { group: NavGroup }) {
  return (
    <Stack
      spacing={1.5}
      sx={{ alignItems: { xs: 'center', sm: 'flex-start' } }}
    >
      {group.path ? (
        <Link
          component={RouterLink}
          to={group.path}
          underline="hover"
          color="text.primary"
          sx={{ fontWeight: 700, typography: 'subtitle1' }}
        >
          {group.label}
        </Link>
      ) : (
        <Typography
          variant="subtitle1"
          color="text.primary"
          sx={{ fontWeight: 700 }}
        >
          {group.label}
        </Typography>
      )}
      <Stack
        spacing={0.75}
        sx={{ alignItems: { xs: 'center', sm: 'flex-start' } }}
      >
        {group.children.map(({ label, path }) => (
          <Link
            key={path}
            component={RouterLink}
            to={path}
            underline="hover"
            color="text.secondary"
            variant="body2"
          >
            {label}
          </Link>
        ))}
      </Stack>
    </Stack>
  )
}

export function Footer() {
  const { t } = useTranslation()
  const footerNav = useFooterNav()

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: 'auto',
        borderTop: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Stack spacing={4} sx={{ maxWidth: 'lg', mx: 'auto', px: 3 }}>
        <Grid container spacing={4} sx={{ justifyContent: 'space-between' }}>
          {footerNav.map((group) => (
            <Grid key={group.label} size={{ xs: 12, sm: 4 }}>
              <FooterColumn group={group} />
            </Grid>
          ))}
        </Grid>

        <SocialLinks />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'flex-end' },
            justifyContent: 'space-between',
            gap: 2,
            pt: 2,
            borderTop: 1,
            borderColor: 'divider',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {formatCopyrightYear()} {t('common.siteName')}
          </Typography>
          <Stack
            direction="row"
            sx={{
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', sm: 'flex-end' },
            }}
          >
            <Link
              component={RouterLink}
              to={paths.resume}
              underline="hover"
              color="text.secondary"
              variant="body2"
            >
              {t('common.resumeLink')}
            </Link>
            <Link
              component={RouterLink}
              to={paths.privacy}
              underline="hover"
              color="text.secondary"
              variant="body2"
            >
              {t('common.privacyLink')}
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
