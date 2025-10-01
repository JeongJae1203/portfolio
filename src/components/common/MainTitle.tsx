import styled from 'styled-components';

interface MainTitleProps {
  title?: string;
}

const MainTitle = ({ title } : MainTitleProps) => {
  return (
    <MainTitleStyle>
      { title && title }
    </MainTitleStyle>
  )
}

const MainTitleStyle = styled.h2`
  margin-bottom: 3rem;
  font-size: 6rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.05em;

  @media all and (max-width: 500px) {
    font-size: 3.5rem;
  }
`;

export default MainTitle