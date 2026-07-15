import { CssBaseline, ThemeProvider } from '@mui/material'
import { appTheme } from '@shared/theme'
import type { Preview } from '@storybook/react-vite'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

const preview: Preview = {
  decorators: [
    (Story) => (
      <HelmetProvider>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <MemoryRouter>
            <Story />
          </MemoryRouter>
        </ThemeProvider>
      </HelmetProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
