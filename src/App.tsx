import * as React from 'react'
import { ConnectedProps } from 'observable-duck'
import AppDuck from './AppDuck'
import RegisteredRouter from './routes/RegisteredRouter'
import AppMenu from './components/layout/Menu'

export default function App(props: ConnectedProps<AppDuck>) {
  const { duck, store, dispatch } = props
  return (
    <>
      <header className='app-header'>
        <AppMenu />
      </header>
      <main className='app-section'>
        <section>
          <RegisteredRouter />
        </section>
      </main>
      <footer className='app-footer'>page footer</footer>
    </>
  )
}
