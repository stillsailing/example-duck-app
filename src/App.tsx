import * as React from 'react'
import { useDuck } from 'observable-duck'
import AppDuck from './AppDuck'
import RegisteredRouter from '@src/routes/RegisteredRouter'
import AppMenu from './components/layout/Menu'
import { Layout, Flex } from 'antd'
import './app.css'

const { Header, Footer, Content } = Layout

export default function App() {
  const { duck, store, dispatch } = useDuck(AppDuck)
  return (
    <Flex justify='center'>
      <Layout className='app-layout'>
        <Header className='app-header'>
          <AppMenu />
        </Header>
        <Content className='app-content'>
          <RegisteredRouter />
        </Content>
        <Footer className='app-footer'>Footer</Footer>
      </Layout>
    </Flex>
  )
}
