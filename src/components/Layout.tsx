import Header from './layout/header/Header'
import { Outlet } from 'react-router-dom'
import FixedUtil from './layout/fixed/FixedUtil'
import Footer from './layout/footer/Footer';

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
      <Footer />
    </>
  )
}

export default Layout