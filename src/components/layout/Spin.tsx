import * as React from 'react'
import { Spin } from 'antd'
import './spin.css'

export default function AppContentSpin() {
  return (
    <div className='app-content-spin'>
      <Spin size='large' />
    </div>
  )
}
