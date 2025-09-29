import { RiArrowUpLine, RiGithubFill } from '@remixicon/react'
import FixedUtilStyle from './Fixed.module.scss'
import styled, { css } from 'styled-components'
import { useEffect, useState } from 'react';

const FixedUtil = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  }, []);

  /**
   * 화면 상단으로 이동
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /**
   * Github 이동
   */
  const goToGithub = () => {
    window.open('https://github.com/JeongJae1203', '_blank');
  }

  return (
    <>
      <FixedTop $isActiveYn={ isActive }>
        <div>
          <button 
            type='button' 
            className={ FixedUtilStyle.fixedTop__button }
            onClick={ goToGithub }
          >
            <RiGithubFill />
          </button>
          <span className={ FixedUtilStyle.fixedTop__tooltip }>Github</span>
        </div>
        <div>
          <button 
            type='button' 
            className={ FixedUtilStyle.fixedTop__button }
            onClick={ scrollToTop }
          >
            <RiArrowUpLine />
          </button>
          <span className={ FixedUtilStyle.fixedTop__tooltip }>TOP</span>
        </div>
      </FixedTop>
      <FixedMail>
        <a href="mailto:st20916@naver.com">st20916@naver.com</a>
      </FixedMail>
    </>
  )
}

// 스타일 컴포넌트
const FixedTop = styled.div<{ $isActiveYn?: boolean }>`
  position: fixed;
  right: 1rem;
  bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-direction: column;
  gap: 1.5rem;
  opacity: 0;
  visibility: hidden;
  ${props => props.$isActiveYn && css`
    opacity: 1;
    visibility: visible;
  `}
  transition: .4s;

  > div {
    position: relative;
  }

  @media (min-width: 992px) {
    right: 2rem;
  }

  @media (min-width: 1200px) {
    right: 3rem;
  }
`;

const FixedMail = styled.div`
  position: fixed;
  left: 1rem;
  bottom: 5rem;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5rem;
    transform: translateX(-50%);
    width: 1px;
    height: 4rem;
    background-color: #fff;
  }

  > a {
    writing-mode: vertical-lr;
  }

  @media (min-width: 992px) {
    left: 2rem;
  }

  @media (min-width: 1200px) {
    left: 3rem;
  }
`;

export default FixedUtil