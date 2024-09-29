import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider, App as AntdApp, theme } from 'antd'
import reportWebVitals from './plugin/report'
import loadDarkMode from './plugin/darkmode'
import App from './App'
import AppDuck from './AppDuck'
import connect from './utils/connect'

const AppDuckComponent = connect(AppDuck, App)

reportWebVitals(console.log)
loadDarkMode()

ReactDom.createRoot(document.querySelector('#duck-app')).render(
  <BrowserRouter basename={process.env.BASENAME || ''}>
    <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
      <AntdApp>
        <AppDuckComponent version={Date.now()} />
      </AntdApp>
    </ConfigProvider>
  </BrowserRouter>
)
