import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './plugin/report'
import App from './App'
import AppDuck from './AppDuck'
import connect from './utils/connect'
import './main.css'

const AppDuckComponent = connect(AppDuck, App)

reportWebVitals(console.log)

ReactDom.createRoot(document.querySelector('#duck-app')).render(
  <BrowserRouter basename={process.env.BASENAME || ''}>
    <AppDuckComponent version={Date.now()} />
  </BrowserRouter>
)
