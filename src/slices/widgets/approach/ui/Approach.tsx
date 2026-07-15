import ArchitectureIcon from '@mui/icons-material/Architecture'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import HandymanIcon from '@mui/icons-material/Handyman'
import LayersClearIcon from '@mui/icons-material/LayersClear'
import SchoolIcon from '@mui/icons-material/School'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { alpha } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { Section } from '@shared/ui'
import { useTranslation } from 'react-i18next'
import { useApproachItems } from '../model/items'

const icons = [
  ArchitectureIcon,
  LayersClearIcon,
  SchoolIcon,
  AutoAwesomeIcon,
  HandymanIcon,
]

export function Approach() {
  const { t } = useTranslation()
  const approachItems = useApproachItems()

  return (
    <Section title={t('approach.title')}>
      <Grid container spacing={3}>
        {approachItems.map((item, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Grid key={item} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
                <Stack spacing={1.5}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, 0.08),
                      color: 'primary.main',
                    }}
                  >
                    <Icon fontSize="small" />
                  </Box>
                  <Typography>{item}</Typography>
                </Stack>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Section>
  )
}
