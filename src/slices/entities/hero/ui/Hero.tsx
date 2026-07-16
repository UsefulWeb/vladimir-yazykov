import Box, { type BoxProps } from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { site } from '@shared/config'
import { assetUrl, mergeSx } from '@shared/util'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export interface HeroProps extends BoxProps {
  image?: string
  title?: string
  subtitle?: string
  description?: string
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export function Hero({
  image,
  title,
  subtitle,
  description,
  children,
  ...props
}: HeroProps) {
  const { t } = useTranslation()
  const resolvedImage = image ?? assetUrl(site.heroImage)
  const resolvedTitle = title ?? t('common.siteName')
  const resolvedSubtitle = subtitle ?? t('common.personRoles')
  const resolvedDescription = description ?? t('common.defaultDescription')

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
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%), url(${resolvedImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '@media print': {
            color: 'common.black',
            backgroundImage: 'none',
            minHeight: 'auto',
            py: 1,
          },
        },
        props.sx,
      )}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={2.5}
          sx={{ maxWidth: 720 }}
          component={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {resolvedSubtitle && (
            <motion.div variants={item}>
              <Typography variant="overline" sx={{ opacity: 0.9 }}>
                {resolvedSubtitle}
              </Typography>
            </motion.div>
          )}

          <motion.div variants={item}>
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontWeight: 800, lineHeight: 1.1 }}
            >
              {resolvedTitle}
            </Typography>
          </motion.div>

          {resolvedDescription && (
            <motion.div variants={item}>
              <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
                {resolvedDescription}
              </Typography>
            </motion.div>
          )}

          <motion.div variants={item}>{children}</motion.div>
        </Stack>
      </Container>
    </Box>
  )
}
