import * as React from 'react'
import { ConnectedProps } from 'observable-duck'
import AppDuck from './AppDuck'

export default function App(props: ConnectedProps<AppDuck>) {
  const { duck, store, dispatch } = props
  return (
    <>
      <h2>version: {store.version}（{new Date(store.stamp).getDate()}）</h2>
      <main>
        main page content
      </main>
      <footer>page footer</footer>
    </>
  )
}
