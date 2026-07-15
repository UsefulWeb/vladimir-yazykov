import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

interface ChipListProps {
  items: string[]
}

export function ChipList({ items }: ChipListProps) {
  return (
    <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap' }}>
      {items.map((item) => (
        <Chip key={item} label={item} variant="outlined" />
      ))}
    </Stack>
  )
}
