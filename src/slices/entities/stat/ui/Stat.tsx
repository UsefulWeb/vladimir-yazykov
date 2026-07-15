import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface StatProps {
  value: string
  label: string
}

export function Stat({ value, label }: StatProps) {
  return (
    <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
      <Stack spacing={0.5}>
        <Typography
          variant="h3"
          component="p"
          sx={{ fontWeight: 800, letterSpacing: '-0.03em' }}
        >
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      </Stack>
    </Paper>
  )
}
