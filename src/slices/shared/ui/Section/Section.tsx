import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
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
              <Typography
                variant="h4"
                component="h2"
                color="text.primary"
                sx={{ fontWeight: 700 }}
              >
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography color="text.secondary">{subtitle}</Typography>
            )}
          </Stack>
        )}
        {children}
      </Container>
    </Box>
  )
}
