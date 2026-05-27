import Box, { type BoxProps } from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { mergeSx } from '@src/slices/shared/util'

export interface HeroProps extends BoxProps {
  image: string
  title: string
}

export function Hero({ image, children, title, ...props }: HeroProps) {
  return (
    <Box
      component="section"
      sx={mergeSx(
        {
          minHeight: { xs: 520, md: 640 },
          display: 'flex',
          alignItems: 'center',
          color: 'common.white',
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 8, md: 10 },
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        },
        props.sx,
      )}
    >
      <Container maxWidth="lg">
        <Stack spacing={2.5} sx={{ maxWidth: 720 }}>
          <Typography variant="overline" sx={{ opacity: 0.9 }}>
            vladimir-yazykov
          </Typography>

          <Typography
            variant="h2"
            component="h1"
            sx={{ fontWeight: 800, lineHeight: 1.1 }}
          >
            {title}
          </Typography>

          {children}
        </Stack>
      </Container>
    </Box>
  )
}
