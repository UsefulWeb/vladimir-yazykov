import Container from '@mui/material/Container'
import type { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  return <Container maxWidth="lg">{children}</Container>
}
