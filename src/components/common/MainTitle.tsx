import styled from 'styled-components';
import type { MainTitleProps } from '../../types/type';

const MainTitle = ({ title } : MainTitleProps) => {
  return (
    <MainTitleStyle>
      { title && title }
    </MainTitleStyle>
  )
}

const MainTitleStyle = styled.h2`
  margin-bottom: 3rem;
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.05em;

  @media all and (min-width: 768px) {
    font-size: 5.5rem;
  }
`;

export default MainTitle