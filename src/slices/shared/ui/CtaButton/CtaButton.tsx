import Button from '@mui/material/Button'
import type { SxProps, Theme } from '@mui/material/styles'
import { Link } from 'react-router-dom'

interface CtaButtonProps {
  to: string
  children: React.ReactNode
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'inherit' | 'secondary'
  sx?: SxProps<Theme>
}

function isExternalLink(to: string) {
  return /^(https?:|mailto:|tel:)/.test(to)
}

export function CtaButton({
  to,
  children,
  variant = 'contained',
  color = 'primary',
  sx,
}: CtaButtonProps) {
  if (isExternalLink(to)) {
    return (
      <Button
        component="a"
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        variant={variant}
        color={color}
        sx={sx}
      >
        {children}
      </Button>
    )
  }

  return (
    <Button component={Link} to={to} variant={variant} color={color} sx={sx}>
      {children}
    </Button>
  )
}
