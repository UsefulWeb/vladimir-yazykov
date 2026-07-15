import { createTheme } from '@mui/material/styles'

const bodyFont = '"Inter Variable", "Inter", "Helvetica", "Arial", sans-serif'
const displayFont =
  '"Manrope Variable", "Manrope", "Inter", "Helvetica", "Arial", sans-serif'

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a1a2e',
    },
    secondary: {
      main: '#16213e',
    },
    text: {
      primary: '#1a1a2e',
      secondary: 'rgba(26, 26, 46, 0.72)',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
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
