import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './plugin/report'
import Main from '@/main/Main'
import './main.css'

reportWebVitals(console.log)

const Header = React.lazy(() => import(/* webpackChunkName: "header" */ '@layout/header'))
const Footer = React.lazy(() => import(/* webpackChunkName: "footer" */ '@layout/footer'))

ReactDom.createRoot(document.querySelector('#app-header')).render(<Header />)
ReactDom.createRoot(document.querySelector('#app-footer')).render(<Footer />)
ReactDom.createRoot(document.querySelector('#app-content')).render(
  <BrowserRouter basename={process.env.BASENAME || ''}>
    <Main />
  </BrowserRouter>
)
