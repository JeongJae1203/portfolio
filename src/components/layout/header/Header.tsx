import { Link } from 'react-router-dom'
import HeaderStyle from './Header.module.scss'
import { RiAlignRight, RiCloseLine } from '@remixicon/react'
import styled, { css } from 'styled-components'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  }

  return (
    <header id='header' className={ HeaderStyle.header }>
      <div className={ HeaderStyle.inner }>
        <h1 className={ HeaderStyle.logo }>
          <Link to="/">LEE JEONG JAE</Link>
        </h1>
        <button 
          type='button' 
          className={ HeaderStyle.mobileMenu }
          onClick={ handleMenuOpen }
        >
          <RiAlignRight 
            className='header__icon'
          />
        </button>
        <MobileNav $isMenuOpen={ isMenuOpen }>
          <div className={ HeaderStyle.mobile__header }>
            <button 
              type='button' 
              className={ HeaderStyle.mobileMenuClose }
              onClick={ handleMenuClose }
            >
              <RiCloseLine />
            </button>
          </div>
        </MobileNav>
      </div>
    </header>
  )
}

/**
 * 스타일 컴포넌트
 * MobileNav
 */
const MobileNav = styled.div<{ $isMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  right: -100%;
  width: 32rem;
  height: 100vh;
  background-color: #373737;
  z-index: 100;
  transition: .4s;

  ${props => props.$isMenuOpen && css`
    right: 0;
  `}

  @media (min-width: 768px) {
    display: none;
  }
`;

export default Header