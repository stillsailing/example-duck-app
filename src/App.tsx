import * as React from 'react'
import { ConnectedProps } from 'observable-duck'
import AppDuck from './AppDuck'
import RegisteredRouter from './routes/RegisteredRouter'

export default function App(props: ConnectedProps<AppDuck>) {
  const { duck, store, dispatch } = props
  const [state, setState] = React.useState(true)
  return (
    <>
      <h1>version: {store.version}（{store.stamp}）</h1>
      <main>
        main page content
        <section>
          <RegisteredRouter />
        </section>
      </main>
      <footer>page footer</footer>
    </>
  )
}
