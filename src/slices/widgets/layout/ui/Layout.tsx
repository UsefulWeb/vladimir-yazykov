import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../footer'
import { Header } from '../../header'

export function Layout() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
