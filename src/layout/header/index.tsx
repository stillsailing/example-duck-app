import * as React from 'react'
import classnames from 'classnames'
import { useStore } from 'observable-duck/react'
import { RootStore } from '@/store'
import { Menus } from './menus'

const Header: React.FC = () => {
  const { duck, store, dispatch } = useStore(RootStore)
  return (
    <nav className='p-4 flex items-center justify-start gap-4'>
      {Menus.map(({ route, title }) => (
        <a
          key={route}
          href={route}
          onClick={(e) => {
            e.preventDefault()
            dispatch(duck.ducks.route.creators.set(route))
          }}
          className={classnames(store.route.path === route && 'text-blue-500')}
        >
          {title.toUpperCase()}
        </a>
      ))}
    </nav>
  )
}

export default Header
