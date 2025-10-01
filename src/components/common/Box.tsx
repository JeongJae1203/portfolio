import styled from 'styled-components';

type ChildrenProps = {
  children?: React.ReactNode;
}

const Box = ({ children } : ChildrenProps) => {
  return (
    <>
      <BoxStyle>
        { children }
      </BoxStyle>
    </>
  )
}

const BoxStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background-color: #323232;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, .5);

  @media all and (min-width: 768px) {
    padding: 2rem;
  }

  @media all and (min-width: 992px) {
    padding: 3rem;
  }
`;

export default Box