import * as React from 'react'
import classnames from 'classnames'
import { useStore } from 'observable-duck/react'
import { RootStore } from '@/store'
import { Menus } from '@/data/menus'
import { Link, Outlet } from 'react-router'
import LanguageSelect from '@/components/Language'

const HomeLayout: React.FC = () => {
  const { duck, store, dispatch } = useStore(RootStore)
  return (
    <div className='relative min-h-screen space-y-4 py-4'>
      <header className='shadow rounded flex justify-between items-center'>
        <nav className='px-4 py-2 flex items-center justify-start gap-4'>
          {Menus.map(({ route, title }) => (
            <Link
              key={route}
              to={route}
              className={classnames(store.route.path === route && 'text-blue-500')}
            >
              {title}
            </Link>
          ))}
        </nav>
        <LanguageSelect className='mx-4' />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className='absolute bottom-0 w-full pb-4'>
        <div className='flex items-center justify-center p-4 rounded shadow'>footer</div>
      </footer>
    </div>
  )
}

export default HomeLayout
