import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Spin from '../components/layout/Spin'
import NotFound from './404/Index'
import Index from './index'

export default function RegisteredRouter() {
  return (
    <>
      <React.Suspense fallback={<Spin />}>
        <Routes>
          <Route path='/'>
            <Route index Component={Index} />
            <Route
              path='about'
              Component={React.lazy(() => import(/* webpackChunkName: "main-about" */ './about'))}
            />
            <Route path='*' Component={NotFound} />
          </Route>
        </Routes>
      </React.Suspense>
    </>
  )
}
