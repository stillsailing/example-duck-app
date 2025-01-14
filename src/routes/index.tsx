import * as React from 'react'
import { Routes, Route } from 'react-router'

import HomeLayout from '@/layout/HomeLayout'
import AsideLayout from '@/layout/AsideLayout'
import Spin from '@/components/Spin'

import NotFound from './404'
import Home from './home'

export default function AppRoutes() {
  return (
    <React.Suspense fallback={<Spin />}>
      <Routes>
        <Route Component={HomeLayout}>
          <Route index Component={Home} />
          <Route
            path='/about'
            Component={React.lazy(() => import(/* webpackChunkName: "main-about" */ './about'))}
          />
          <Route path='*' Component={NotFound} />
        </Route>
        <Route Component={AsideLayout}>
          <Route path='/step'>
            <Route
              index
              Component={React.lazy(
                () => import(/* webpackChunkName: "main-step" */ './step/Step1')
              )}
            />
            <Route
              path='/step/one'
              Component={React.lazy(
                () => import(/* webpackChunkName: "main-step" */ './step/Step1')
              )}
            />
            <Route
              path='/step/two'
              Component={React.lazy(
                () => import(/* webpackChunkName: "main-step" */ './step/Step2')
              )}
            />
            <Route
              path='/step/three'
              Component={React.lazy(
                () => import(/* webpackChunkName: "main-step" */ './step/Step3')
              )}
            />
            <Route
              path='/step/test1'
              Component={React.lazy(() => import(/* webpackChunkName: "main-test" */ './test1'))}
            />
            <Route
              path='/step/test2'
              Component={React.lazy(() => import(/* webpackChunkName: "main-test" */ './test2'))}
            />
          </Route>
        </Route>
      </Routes>
    </React.Suspense>
  )
}
