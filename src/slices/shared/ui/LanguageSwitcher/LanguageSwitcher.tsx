import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useTranslation } from 'react-i18next'
import { supportedLngs } from '../../lib/i18n'

interface LanguageSwitcherProps {
  color?: 'inherit' | 'primary'
}

export function LanguageSwitcher({ color = 'inherit' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation()
  const current = i18n.resolvedLanguage ?? i18n.language

  return (
    <ButtonGroup
      size="small"
      variant="outlined"
      color={color}
      aria-label="Язык / Language"
    >
      {supportedLngs.map((lng) => (
        <Button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          variant={current === lng ? 'contained' : 'outlined'}
          sx={{ minWidth: 40 }}
        >
          {lng.toUpperCase()}
        </Button>
      ))}
    </ButtonGroup>
  )
}
