import { useRef, useSyncExternalStore } from 'react'
import { Base, Store } from 'observable-duck'

export default function useStore<T extends Base>(store: Store<T>) {
  const ref = useRef(store)
  const { redux, duck } = ref.current
  const { subscribe, getState, dispatch } = redux
  const state = useSyncExternalStore(subscribe, getState)
  return {
    duck,
    state,
    dispatch,
  }
}
