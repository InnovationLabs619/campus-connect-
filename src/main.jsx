import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('Mounting Campus Connect...')

const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('CRITICAL: Root element not found!')
} else {
  try {
    const root = createRoot(rootElement)
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    )
    console.log('App rendered to DOM')
  } catch (err) {
    console.error('Mounting error:', err)
  }
}
