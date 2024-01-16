import * as React from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const items: MenuProps['items'] = [
  {
    label: <Link to='/'>Main</Link>,
    key: 'main',
  },
  {
    label: <Link to='/about'>About</Link>,
    key: 'about',
  },
]

const AppMenu: React.FC = () => {
  const [current, setCurrent] = React.useState('main')

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
  }

  return <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />
}

export default AppMenu
