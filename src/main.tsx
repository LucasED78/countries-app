import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App'
import 'normalize.css'
import { ThemeContextProvider } from './contexts/theme-context'
import routes from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={routes} />
    </ThemeContextProvider>
  </React.StrictMode>
)
