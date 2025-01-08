import * as React from 'react'
import RegisteredRouter from '@/main/RegisteredRouter'
import useStore from '@hook/useStore'
import { RootStore } from './store'
import { useNavigate } from 'react-router-dom'

export default function App() {
  const { state } = useStore(RootStore)

  const navigate = useNavigate()
  React.useEffect(() => {
    navigate(state.route.path)
  }, [state.route.path])

  return <RegisteredRouter />
}
