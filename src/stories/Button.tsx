import MuiButton from '@mui/material/Button'

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large'
  /** Button contents */
  label: string
  /** Optional click handler */
  onClick?: () => void
}

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  onClick,
}: ButtonProps) => (
  <MuiButton
    size={size}
    variant={primary ? 'contained' : 'outlined'}
    onClick={onClick}
  >
    {label}
  </MuiButton>
)
