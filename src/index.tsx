import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import reportWebVitals from '@/plugin/report'
import Routes from '@/routes'

import '@/i18n'

import '@/css/tailwind.css'
import '@/css/base.css'

reportWebVitals(console.log)

ReactDom.createRoot(document.querySelector('#app-area')).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.BASENAME || ''}>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
)
