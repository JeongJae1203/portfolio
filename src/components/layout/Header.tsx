import { Link } from 'react-router-dom'
import HeaderStyle from './Header.module.scss'
import { RiAlignRight } from '@remixicon/react'

const Header = () => {

  return (
    <header id='header' className={ HeaderStyle.header }>
      <div className={ HeaderStyle.inner }>
        <h1 className={ HeaderStyle.logo }>
          <Link to="/">LEE JEONG JAE</Link>
        </h1>
        <button type='button' className={ HeaderStyle.mobileMenu }>
          <RiAlignRight 
            className='header__icon'
          />
        </button>
      </div>
    </header>
  )
}

export default Header