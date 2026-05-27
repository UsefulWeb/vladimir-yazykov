import type { SxProps, Theme } from '@mui/material/styles'

export function mergeSx(
  first?: SxProps<Theme>,
  second?: SxProps<Theme>,
): SxProps<Theme> {
  if (!first) return second ?? {}
  if (!second) return first
  return [first, second] as SxProps<Theme>
}
