import * as React from 'react'
import { ConnectedProps } from 'observable-duck'
import Duck from './Duck'

export default function About(props: ConnectedProps<Duck>) {
  const { duck, store, dispatch } = props
  const [state, setState] = React.useState(true)
  return (
    <>
      <h2>Test1 Page</h2>
    </>
  )
}
