import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterSection>
      <div className="inner">
        <p>
          Copyright 2025. LEEJEONGJAE. All Rights reserved. <br />
        </p>
        <p>{ t('lastUpdated') } 2025.10.23</p>
      </div>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  padding: 4rem 0 2rem;

  p {
    font-size: 1.3rem;
    font-weight: 400;
    color: #a6a6a6;
    text-align: center;
    line-height: 1.5;

    + p {
      margin-top: 2rem;
      font-size: 1.2rem;
    }
  }

  @media all and (min-width: 768px) {
    p {
      font-size: 1.5rem;
    }
  }

  @media all and (min-width: 992px) {
    p {
      font-size: 1.6rem;
    }
  }
`;

export default Footer