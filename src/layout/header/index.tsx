import * as React from 'react'
import classnames from 'classnames'
import { Menus } from './menus'
import useStore from '@hook/useStore'
import { RootStore } from '@src/store'

const Header: React.FC = () => {
  const { duck, state, dispatch } = useStore(RootStore)
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
          className={classnames(state.route.path === route && 'text-blue-500')}
        >
          {title.toUpperCase()}
        </a>
      ))}
    </nav>
  )
}

export default Header
