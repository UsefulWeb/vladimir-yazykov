import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button } from './Button'

type User = {
  name: string
}

export interface HeaderProps {
  user?: User
  onLogin?: () => void
  onLogout?: () => void
  onCreateAccount?: () => void
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        py: 2,
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          component="span"
          aria-hidden="true"
          sx={{
            width: 32,
            height: 32,
            borderRadius: 1,
            bgcolor: 'primary.main',
            display: 'inline-block',
          }}
        />
        <Typography variant="h6" component="h1" sx={{ fontWeight: 700 }}>
          Acme
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {user ? (
          <>
            <Typography variant="body2">
              Welcome, <b>{user.name}</b>!
            </Typography>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </Box>
    </Box>
  </header>
)
