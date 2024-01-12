import * as React from "react"
import { Routes, Route } from "react-router-dom"
import routes from './routes'
import Index from "./index"
import About from "./about"

export default function RegisteredRouter() {
  return <>
    <Routes>
      <Route path="/">
        <Route index Component={Index} />
        <Route path="about" Component={About} />
        <Route path="*" element={<section>Page Not Found</section>} />
      </Route>
      {/* {Object.keys(routes).map((route) => <Route key={route} path={route} Component={routes[route]} />)} */}
    </Routes>
  </>
}