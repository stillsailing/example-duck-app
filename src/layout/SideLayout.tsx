import * as React from 'react'
import classnames from 'classnames'
import { useStore } from 'observable-duck/react'
import { RootStore } from '@/store'
import { Menus } from '@/data/menus'
import { Link, Outlet } from 'react-router'
import ErrorBoundary from '@/components/ErrorBoundary'

const aside = [
  {
    route: '/step/one',
    title: 'One',
  },
  {
    route: '/step/two',
    title: 'Two',
  },
  {
    route: '/step/three',
    title: 'Three',
  },
  {
    route: '/step/test1',
    title: 'Test1',
  },
  {
    route: '/step/test2',
    title: 'Test2',
  },
  {
    route: '/step/error',
    title: 'Error',
  },
]

const SideLayout: React.FC = () => {
  const { duck, store, dispatch } = useStore(RootStore)
  return (
    <div className='relative min-h-screen space-y-4 py-4'>
      <header className='shadow rounded'>
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
      </header>
      <main className='flex gap-8'>
        <nav className='flex flex-col p-4 shadow rounded min-w-48'>
          {aside.map(({ route, title }) => (
            <Link key={route} to={route}>
              {title}
            </Link>
          ))}
        </nav>
        <div className='flex-1'>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </div>
      </main>
      <footer className='absolute bottom-0 w-full pb-4'>
        <div className='flex items-center justify-center p-4 rounded shadow'>footer</div>
      </footer>
    </div>
  )
}

export default SideLayout
