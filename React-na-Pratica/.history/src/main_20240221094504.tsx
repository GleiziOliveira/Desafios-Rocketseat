import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'

const queryClient = new Query

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider></QueryClientProvider>
    <App/>
  </React.StrictMode>,
)
