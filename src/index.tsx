import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './plugin/report'
import Header from '@src/layout/header'
import Footer from '@src/layout/footer'
import App from './App'
import './main.css'

reportWebVitals(console.log)

ReactDom.createRoot(document.querySelector('#app-header')).render(<Header />)
ReactDom.createRoot(document.querySelector('#app-footer')).render(<Footer />)
ReactDom.createRoot(document.querySelector('#app-content')).render(
  <BrowserRouter basename={process.env.BASENAME || ''}>
    <App />
  </BrowserRouter>
)
