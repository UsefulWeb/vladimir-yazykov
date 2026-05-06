import { CssBaseline, ThemeProvider } from '@mui/material'
import { appTheme } from '@src/slices/shared/theme/appTheme'
import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
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
