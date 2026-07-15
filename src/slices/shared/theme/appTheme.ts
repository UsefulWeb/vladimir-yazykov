import { createTheme } from '@mui/material/styles'

const bodyFont = '"Inter Variable", "Inter", "Helvetica", "Arial", sans-serif'
const displayFont =
  '"Manrope Variable", "Manrope", "Inter", "Helvetica", "Arial", sans-serif'

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8b93ff',
    },
    secondary: {
      main: '#5c6bc0',
    },
    text: {
      primary: '#f0f0f5',
      secondary: 'rgba(240, 240, 245, 0.72)',
    },
    background: {
      default: '#0d0e14',
      paper: '#171922',
    },
  },
  typography: {
    fontFamily: bodyFont,
    h1: {
      fontFamily: displayFont,
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.08,
    },
    h2: {
      fontFamily: displayFont,
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.12,
    },
    h3: {
      fontFamily: displayFont,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.16,
    },
    h4: {
      fontFamily: displayFont,
      fontWeight: 700,
      letterSpacing: '-0.015em',
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: displayFont,
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontFamily: displayFont,
      fontWeight: 600,
      letterSpacing: '-0.005em',
    },
    subtitle1: {
      fontFamily: displayFont,
      fontWeight: 700,
    },
    subtitle2: {
      fontFamily: displayFont,
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.65,
    },
    body2: {
      lineHeight: 1.6,
    },
    overline: {
      fontWeight: 600,
      letterSpacing: '0.14em',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.03em',
    },
  },
  shape: {
    borderRadius: 8,
  },
})
