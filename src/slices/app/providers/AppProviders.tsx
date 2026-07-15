import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { appTheme } from '@shared/theme'
import '@shared/lib/i18n'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from '../router/router'

export function AppProviders() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
