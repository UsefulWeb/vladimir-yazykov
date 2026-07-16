import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import IconButton from '@mui/material/IconButton'
import { useTranslation } from 'react-i18next'
import { useFavoriteProjectsStore } from '../model/store'

interface FavoriteButtonProps {
  projectId: string
}

export function FavoriteButton({ projectId }: FavoriteButtonProps) {
  const { t } = useTranslation()
  const isFavorite = useFavoriteProjectsStore((s) =>
    s.favorites.includes(projectId),
  )
  const toggleFavorite = useFavoriteProjectsStore((s) => s.toggleFavorite)

  return (
    <IconButton
      size="small"
      onClick={() => toggleFavorite(projectId)}
      aria-label={
        isFavorite ? t('projects.unfavorite') : t('projects.favorite')
      }
      sx={{ color: isFavorite ? 'warning.main' : 'text.secondary' }}
    >
      {isFavorite ? (
        <StarIcon fontSize="small" />
      ) : (
        <StarBorderIcon fontSize="small" />
      )}
    </IconButton>
  )
}
