import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider, App as AntdApp, theme } from 'antd'
import reportWebVitals from './plugin/report'
import loadDarkMode from './plugin/darkmode'
import App from './App'

reportWebVitals(console.log)
loadDarkMode()

ReactDom.createRoot(document.querySelector('#duck-app')).render(
  <BrowserRouter basename={process.env.BASENAME || ''}>
    <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
      <AntdApp>
        <App />
      </AntdApp>
    </ConfigProvider>
  </BrowserRouter>
)
