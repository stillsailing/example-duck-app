import * as React from 'react'
import { ConnectedProps } from 'observable-duck'
import Duck from './Duck'

export default function Index(props: ConnectedProps<Duck>) {
  const { duck, store, dispatch } = props
  const [state, setState] = React.useState(true)
  return (
    <>
      <h2>Home Page</h2>
    </>
  )
}
