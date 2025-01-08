import * as React from 'react'
import { Link } from 'react-router-dom'

const items = [
  {
    route: '/',
    title: 'Main',
  },
  {
    route: '/about',
    title: 'About',
  },
  {
    route: '/test1',
    title: 'Test1',
  },
  {
    route: '/test2',
    title: 'Test2',
  },
]

const AppMenu: React.FC = () => {
  const [current, setCurrent] = React.useState('main')
  const onClick = (e) => {
    setCurrent(e.key)
  }
  return (
    <nav className='m-4 shadow-sm'>
      {items.map(({ route, title }) => (
        <Link key={route} to={route}>
          {title}
        </Link>
      ))}
    </nav>
  )
}

export default AppMenu
