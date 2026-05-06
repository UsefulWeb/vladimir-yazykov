import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Header } from './Header'

type User = {
  name: string
}

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>()

  return (
    <Stack component="article" spacing={3} sx={{ pb: 4 }}>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <Container maxWidth="md">
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography variant="h4" component="h2">
              Pages in Storybook
            </Typography>

            <Typography>
              We recommend building UIs with a{' '}
              <Link
                href="https://componentdriven.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>component-driven</b>
              </Link>{' '}
              process starting with atomic components and ending with pages.
            </Typography>

            <Typography>
              Render pages with mock data. This makes it easy to build and
              review page states without needing to navigate to them in your
              app. Here are some handy patterns for managing page data in
              Storybook:
            </Typography>

            <Stack component="ul" spacing={1} sx={{ pl: 3, m: 0 }}>
              <li>
                Use a higher-level connected component. Storybook helps you
                compose such data from the "args" of child component stories
              </li>
              <li>
                Assemble data in the page component from your services. You can
                mock these services out using Storybook.
              </li>
            </Stack>

            <Typography>
              Get a guided tutorial on component-driven development at{' '}
              <Link
                href="https://storybook.js.org/tutorials/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Storybook tutorials
              </Link>
              . Read more in the{' '}
              <Link
                href="https://storybook.js.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                docs
              </Link>
              .
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <b>Tip:</b> Adjust the width of the canvas with the Viewports
              addon in the toolbar
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Stack>
  )
}
