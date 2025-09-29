import Header from './layout/header/Header'
import { Outlet } from 'react-router-dom'
import FixedUtil from './layout/fixed/FixedUtil'

const Layout = () => {
  return (
    <>
      <Header />
      <main id='main'>
        <Outlet />
      </main>
      <FixedUtil /> 
    </>
  )
}

export default Layout