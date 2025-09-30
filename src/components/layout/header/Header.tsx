import { Link } from 'react-router-dom'
import HeaderStyle from './Header.module.scss'
import { RiAlignRight, RiCloseLine } from '@remixicon/react'
import styled, { css } from 'styled-components'
import { useState } from 'react'
import koFlag from '../../../assets/images/national/korea.png'
import enFlag from '../../../assets/images/national/eng.png'

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
        <nav className={ HeaderStyle.pcNav }>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
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
            <div className={ HeaderStyle.multiple__language }>
              <button type='button'>
                <span><img src={ koFlag } alt="Korean" /></span>
              </button>
              <button type='button'>
                <span><img src={ enFlag } alt="English" /></span>
              </button>
            </div>
            <button 
              type='button' 
              className={ HeaderStyle.mobileMenuClose }
              onClick={ handleMenuClose }
            >
              <RiCloseLine />
            </button>
          </div>
          <nav className={ HeaderStyle.mobileNav }>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
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
  width: 27rem;
  height: 100vh;
  background-color: #373737;
  z-index: 100;
  transition: .4s;

  ${props => props.$isMenuOpen && css`
    right: 0;
  `}

  @media (min-width: 992px) {
    display: none;
  }
`;

export default Header