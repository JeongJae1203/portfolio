import Header from './layout/header/Header'
import { Outlet } from 'react-router-dom'
import FixedUtil from './layout/fixed/FixedUtil'

interface LayoutProps {
  onLanguageChange: (language: string) => void;
}

const Layout = ({ onLanguageChange }: LayoutProps) => {
  return (
    <>
      <Header onLanguageChange={onLanguageChange} />
      <main id='main'>
        <Outlet />
      </main>
      <FixedUtil /> 
    </>
  )
}

export default Layout