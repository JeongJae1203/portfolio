import { Link } from 'react-router-dom'
import HeaderStyle from './Header.module.scss'
import { RiAlignRight, RiCloseLine } from '@remixicon/react'
import styled, { css } from 'styled-components'
import { useCallback, useState } from 'react'
import koFlag from '../../../assets/images/national/korea.png'
import enFlag from '../../../assets/images/national/eng.png'
import { t } from 'i18next'

// 다국어 처리 Props
interface HeaderProps {
  onLanguageChange: (language: string) => void;
}

const Header = ({ onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  /**
   * 각 섹션으로 스크롤 이동
   * @param sectionId 
   */
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      (element as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // 모바일 메뉴 닫기
  }, []);

  return (
    <header id='header' className={ HeaderStyle.header }>
      <div className={ HeaderStyle.inner }>
        <h1 className={ HeaderStyle.logo }>
          <Link to="/">LEE JEONG JAE</Link>
        </h1>
        <nav className={ HeaderStyle.pcNav }>
          <ul>
            <li><button onClick={() => scrollToSection('about')}>{ t('about') }</button></li>
            <li><button onClick={() => scrollToSection('projects')}>{ t('project') }</button></li>
            <li>
              <div className={ HeaderStyle.multiple__language }>
                <button type='button' onClick={() => onLanguageChange('ko')}>
                  <span><img src={ koFlag } alt="Korean" /></span>
                </button>
                <button type='button' onClick={() => onLanguageChange('en')}>
                  <span><img src={ enFlag } alt="English" /></span>
                </button>
              </div>
            </li>
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
              <button type='button' onClick={() => onLanguageChange('ko')}>
                <span><img src={ koFlag } alt="Korean" /></span>
              </button>
              <button type='button' onClick={() => onLanguageChange('en')}>
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
              <li><button onClick={() => scrollToSection('about')}>{ t('about') }</button></li>
              <li><button onClick={() => scrollToSection('projects')}>{ t('project') }</button></li>
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