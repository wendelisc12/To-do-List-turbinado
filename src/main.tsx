import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Global from './global.ts'
import { ThemeProvider } from 'styled-components'
import { nightTheme } from './themes/Night.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={nightTheme}>
      <Global/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
