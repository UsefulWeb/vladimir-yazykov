import StarIcon from '@mui/icons-material/Star'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { type Project, useProjectCategoryLabels } from '../model/projects'
import { useGithubStats } from '../model/useGithubStats'

const MotionCard = motion.create(Card)

interface ProjectCardProps {
  project: Project
  expanded?: boolean
  actions?: ReactNode
}

function GithubBadge({ repo }: { repo: string }) {
  const { data, isLoading } = useGithubStats(repo)

  if (isLoading) {
    return <Skeleton variant="rounded" width={64} height={24} />
  }

  if (!data) return null

  return (
    <Link
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
    >
      <Chip
        icon={<StarIcon fontSize="small" />}
        label={data.stars}
        size="small"
        variant="outlined"
      />
    </Link>
  )
}

export function ProjectCard({
  project,
  expanded = false,
  actions,
}: ProjectCardProps) {
  const { t } = useTranslation()
  const categoryLabels = useProjectCategoryLabels()

  return (
    <MotionCard
      variant="outlined"
      sx={{ height: '100%' }}
      whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(0,0,0,0.4)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <CardContent>
        <Stack spacing={2}>
          <Stack
            direction="row"
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Chip
              label={categoryLabels[project.category]}
              size="small"
              color="primary"
              variant="outlined"
            />
            {actions}
          </Stack>
          <Typography variant="h6" component="h3">
            {project.href ? (
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.tagline}
          </Typography>
          {project.githubRepo && <GithubBadge repo={project.githubRepo} />}
          {expanded && project.problem && (
            <Typography variant="body2">
              <strong>{t('projects.problemLabel')}:</strong> {project.problem}
            </Typography>
          )}
          {expanded && project.solution && (
            <Typography variant="body2">
              <strong>{t('projects.solutionLabel')}:</strong> {project.solution}
            </Typography>
          )}
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
            {project.stack.map((tech) => (
              <Chip key={tech} label={tech} size="small" variant="outlined" />
            ))}
          </Stack>
          {project.metrics.length > 0 && (
            <Typography variant="caption" color="text.secondary">
              {project.metrics.join(' • ')}
            </Typography>
          )}
        </Stack>
      </CardContent>
    </MotionCard>
  )
}
