import * as React from 'react'
import classnames from 'classnames'
import { useStore } from 'observable-duck/react'
import { RootStore } from '@/store'
import { Menus } from '@/data/menus'
import { Link, Outlet } from 'react-router'

const NavLayout: React.FC = () => {
  const { duck, store, dispatch } = useStore(RootStore)
  return (
    <div>
      <header>
        <nav className='p-4 flex items-center justify-start gap-4'>
          {Menus.map(({ route, title }) => (
            <Link
              key={route}
              to={route}
              className={classnames(store.route.path === route && 'text-blue-500')}
            >
              {title.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className='p-4 bg-slate-400 text-white'>footer</footer>
    </div>
  )
}

export default NavLayout
