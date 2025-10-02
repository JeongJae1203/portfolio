import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Sincerely = () => {
  const { t } = useTranslation();

  return (
    <SincerelySection>
      <div className="inner">
        <SincerelyMent>{ t('thanks') }</SincerelyMent>
        <SincerelyDesc>{ t('sinDesc') } <br /> { t('sinDesc2') }</SincerelyDesc>
      </div>
    </SincerelySection>
  )
}

const SincerelySection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20rem 0 0;
`;

const SincerelyMent = styled.strong`
  display: block;
  font-size: 7rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  text-shadow: 0 0 10px rgba(59, 130, 246, .8);

  @media all and (min-width: 768px) {
    font-size: 10rem;
  }

  @media all and (min-width: 992px) {
    font-size: 16rem;
  }
`;

const SincerelyDesc = styled.p`
  margin-top: 6rem;
  font-size: 2rem;
  line-height: 1.5;
  text-align: center;
  word-break: keep-all;
  color: rgba(255, 255, 255, .8);
  letter-spacing: -.02em;

  @media all and (min-width: 768px) {
    margin-top: 10rem;
  }
`;

export default Sincerely