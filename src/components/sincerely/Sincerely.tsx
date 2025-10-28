import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Sincerely = () => {
  const { t } = useTranslation();

  return (
    <SincerelySection>
      <div className="inner">
        <SincerelyDesc>{ t('sinDesc') } <br /> { t('sinDesc2') }</SincerelyDesc>
        <SincerelyMent>{ t('thanks') }</SincerelyMent>
      </div>
    </SincerelySection>
  )
}

const SincerelySection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 20rem 0 0;
`;

const SincerelyMent = styled.strong`
  display: block;
  font-size: 5rem;
  color: #fff;
  text-align: center;
  text-shadow: 0 0 10px rgba(59, 130, 246, .8);
`;

const SincerelyDesc = styled.p`
  margin-bottom: 6rem;
  font-size: 3rem;
  line-height: 1.5;
  text-align: center;
  word-break: keep-all;
  color: rgba(255, 255, 255, .8);
  letter-spacing: -.02em;
`;

export default Sincerely