import * as React from 'react'
import AppDuck from './AppDuck'
import RegisteredRouter from '@src/routes/RegisteredRouter'
import AppMenu from './components/layout/Menu'
import { Layout, Flex } from 'antd'
import './app.css'
import { ConnectedProps } from 'observable-duck'

const { Header, Footer, Content } = Layout

interface AppProps extends ConnectedProps<AppDuck> {
  version: number
}

export default function App(props: AppProps) {
  const { duck, store, dispatch } = props
  return (
    <Flex justify='center'>
      <Layout className='app-layout'>
        <Header className='app-header'>
          <AppMenu />
        </Header>
        <Content className='app-content'>
          <RegisteredRouter />
        </Content>
        <Footer className='app-footer'>
          Footer * Init Version [{props.version}] * Duck Stamp[{store.stamp}]{' '}
          <button onClick={() => dispatch(duck.creators.update())}>update</button>
        </Footer>
      </Layout>
    </Flex>
  )
}
