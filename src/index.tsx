import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './plugin/report'
import App from './App'

reportWebVitals(console.log)

ReactDom.createRoot(document.querySelector('#duck-app')).render(
  <BrowserRouter basename={process.env.BASENAME || ''}>
    <App />
  </BrowserRouter>
)
