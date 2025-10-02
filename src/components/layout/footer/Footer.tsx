import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterSection>
      <div className="inner">
        <p>
          Copyright 2025. LEEJEONGJAE. All Rights reserved. <br />
          { t('sincerely') }
        </p>
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