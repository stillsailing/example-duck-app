import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from 'observable-duck/react'
import { RootStore } from '@/store'
import RegisteredRouter from '@/main/RegisteredRouter'

export default function Main() {
  const { store } = useStore(RootStore)

  const navigate = useNavigate()
  React.useEffect(() => {
    navigate(store.route.path)
  }, [store.route.path])

  return <RegisteredRouter />
}
