import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { AnimatedNumber } from './AnimatedNumber'

interface StatProps {
  value: string
  label: string
}

const MotionPaper = motion.create(Paper)

export function Stat({ value, label }: StatProps) {
  return (
    <MotionPaper
      variant="outlined"
      sx={{ p: 3, height: '100%' }}
      whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(0,0,0,0.35)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <Stack spacing={0.5}>
        <Typography
          variant="h3"
          component="p"
          sx={{ fontWeight: 800, letterSpacing: '-0.03em' }}
        >
          <AnimatedNumber value={value} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      </Stack>
    </MotionPaper>
  )
}
