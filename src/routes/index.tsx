import * as React from 'react'
import { Routes, Route } from 'react-router'

import NavLayout from '@/layout/NavLayout'
import Spin from '@/components/Spin'

import NotFound from './404'
import Home from './home'

export default function AppRoutes() {
  return (
    <React.Suspense fallback={<Spin />}>
      <Routes>
        <Route path='/' Component={NavLayout}>
          <Route index Component={Home} />
          <Route
            path='about'
            Component={React.lazy(() => import(/* webpackChunkName: "main-about" */ './about'))}
          />
          {/** 单独合并路由 test1 & test2 出包 */}
          <Route
            path='test1'
            Component={React.lazy(() => import(/* webpackChunkName: "main-test" */ './test1'))}
          />
          <Route
            path='test2'
            Component={React.lazy(() => import(/* webpackChunkName: "main-test" */ './test2'))}
          />
          <Route path='*' Component={NotFound} />
        </Route>
      </Routes>
    </React.Suspense>
  )
}
