import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { type Project, useProjectCategoryLabels } from '../model/projects'

interface ProjectCardProps {
  project: Project
  expanded?: boolean
}

export function ProjectCard({ project, expanded = false }: ProjectCardProps) {
  const { t } = useTranslation()
  const categoryLabels = useProjectCategoryLabels()

  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Stack spacing={2}>
          <Chip
            label={categoryLabels[project.category]}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ alignSelf: 'flex-start' }}
          />
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
          {project.githubRepo && (
            <a
              href={`https://github.com/${project.githubRepo}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://img.shields.io/github/stars/${project.githubRepo}?style=flat-square&logo=github`}
                alt={`${project.githubRepo} stars`}
                height={20}
              />
            </a>
          )}
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
          <Typography variant="caption" color="text.secondary">
            {project.metrics.join(' • ')}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
