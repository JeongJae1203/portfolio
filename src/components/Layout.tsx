import React from 'react'
import Header from './layout/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <main id='main'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout