import type { SvgIconComponent } from '@mui/icons-material'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface BulletListProps {
  items: string[]
  icon?: SvgIconComponent
}

export function BulletList({
  items,
  icon: Icon = CheckCircleRoundedIcon,
}: BulletListProps) {
  return (
    <Stack spacing={1.75}>
      {items.map((item) => (
        <Stack
          key={item}
          direction="row"
          spacing={1.5}
          sx={{ alignItems: 'flex-start' }}
        >
          <Icon
            fontSize="small"
            sx={{ color: 'primary.main', mt: '2px', flexShrink: 0 }}
          />
          <Typography sx={{ flex: 1 }}>{item}</Typography>
        </Stack>
      ))}
    </Stack>
  )
}
