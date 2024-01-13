import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Runtime } from 'observable-duck'
import reportWebVitals from './plugin/report'
import App from './App'
import AppDuck from './AppDuck'
import logger from './plugin/logger'
import './app.css'

reportWebVitals(console.log)

const ConnectedApp = Runtime.create(AppDuck, { middlewares: [logger] }).connect(App)
ReactDom.createRoot(document.querySelector('#duck-app')).render(
  <BrowserRouter>
    <ConnectedApp />
  </BrowserRouter>
)
