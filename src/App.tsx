import * as React from 'react'
import AppDuck from './AppDuck'
import RegisteredRouter from '@src/routes/RegisteredRouter'
import AppMenu from './components/layout/Menu'
import './app.css'
import { ConnectedProps } from 'observable-duck'

interface AppProps extends ConnectedProps<AppDuck> {
  version: number
}

export default function App(props: AppProps) {
  const { duck, store, dispatch } = props
  return (
    <div className='justify-center'>
      <div className='app-layout'>
        <header className='app-header'>
          <AppMenu />
        </header>
        <main className='app-content'>
          <RegisteredRouter />
        </main>
        <footer className='app-footer'>
          Footer * Init Version [{props.version}] * Duck Stamp[{store.stamp}]{' '}
          <button onClick={() => dispatch(duck.creators.update())}>update</button>
        </footer>
      </div>
    </div>
  )
}
