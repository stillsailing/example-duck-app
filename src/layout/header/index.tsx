import * as React from 'react'
import { Menus } from './menus'
import useStore from '@hook/useStore'
import { RootStore } from '@src/store'

const Header: React.FC = () => {
  const { duck, state, dispatch } = useStore(RootStore)
  return (
    <nav className='m-4 shadow-sm'>
      {Menus.map(({ route, title }) => (
        <a
          key={route}
          href={route}
          onClick={(e) => {
            e.preventDefault()
            dispatch(duck.ducks.route.creators.set(route))
          }}
        >
          {title}
        </a>
      ))}
    </nav>
  )
}

export default Header
