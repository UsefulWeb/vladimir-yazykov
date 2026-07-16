import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionProps {
  title?: string
  subtitle?: string
  children: ReactNode
  id?: string
}

export function Section({ title, subtitle, children, id }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ py: { xs: 6, md: 8 }, '@media print': { py: 1.5 } }}
    >
      <Container maxWidth="lg">
        {(title || subtitle) && (
          <Stack
            spacing={1}
            sx={{ mb: 4, maxWidth: 720, '@media print': { mb: 1 } }}
          >
            {title && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  color="text.primary"
                  sx={{ fontWeight: 700 }}
                >
                  {title}
                </Typography>
              </motion.div>
            )}
            {subtitle && (
              <Typography color="text.secondary">{subtitle}</Typography>
            )}
          </Stack>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </Container>
    </Box>
  )
}
