import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter/index.css'
import '@fontsource-variable/manrope/index.css'
import '@src/slices/app/styles/index.css'
import { AppProviders } from '@src/slices/app'

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root element #root not found')
}

createRoot(rootEl).render(
  <StrictMode>
    <AppProviders />
  </StrictMode>,
)
