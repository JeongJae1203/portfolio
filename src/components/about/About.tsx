import { useTranslation } from 'react-i18next';
import MainTitle from '../common/MainTitle'
import styled from 'styled-components';
import Box from '../common/Box';
import AboutStyle from './About.module.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <AboutSection id="about">
        <div className="inner">
          {/* 섹션 타이틀 */}
          <MainTitle title={ t('about') } />
          <ShortProfile>
            <Box>
              <p className={ AboutStyle.shortProfile__cont }>{ t('shortProfile1') }</p>
              <p className={ AboutStyle.shortProfile__cont }>{ t('shortProfile2') }</p>
              <p className={ AboutStyle.shortProfile__cont }>{ t('shortProfile3') }</p>
              <p className={ AboutStyle.shortProfile__cont }>{ t('shortProfile4') }</p>
              <p className={ AboutStyle.shortProfile__cont }>{ t('shortProfile5') }</p>
            </Box>
            <ShortProfileBox>
              <Box>
                <div className={ AboutStyle.keyword__cont }>
                  <h3 className={ AboutStyle.keyword__title }>{ t('keyword') }</h3>
                  <p className={ AboutStyle.keyword__desc }>{ t('keywordDesc') }</p>
                  <div className={ AboutStyle.keyword__label__wrap }>
                    <span className={ AboutStyle.keyword__label }>#{ t('keyword1') }</span>
                    <span className={ AboutStyle.keyword__label }>#{ t('keyword2') }</span>
                    <span className={ AboutStyle.keyword__label }>#{ t('keyword3') }</span>
                    <span className={ AboutStyle.keyword__label }>#{ t('keyword4') }</span>
                  </div>
                </div>
              </Box>
              <Box></Box>
            </ShortProfileBox>
          </ShortProfile>
          {/* 경력 */}
          <CommonSection>
            <h4 className={ AboutStyle.sub__title }>{ t('career') }</h4>
            <div className={ AboutStyle.cont }>
              <Box>
                <div className={ AboutStyle.title__wrap }>
                  <span className={ AboutStyle.date }>2018.02 - 2020.01</span>
                </div>
              </Box>
              <Box>
                <div className={ AboutStyle.title__wrap }>
                  <span className={ AboutStyle.date }>2020.10 - 2025.03</span>
                </div>
              </Box>
            </div>
          </CommonSection>
          {/* 교육 */}
          <CommonSection>
            <h4 className={ AboutStyle.sub__title }>{ t('education') }</h4>
            <div className={ AboutStyle.cont }>
              <Box />
              <Box />
            </div>
          </CommonSection>
        </div>
      </AboutSection>
    </>
  )
}


const AboutSection = styled.section`
  padding: 5rem 0 0;
`;

const ShortProfile = styled.div`
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media all and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ShortProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const CommonSection = styled.section`
  padding: 10rem 0 0;
`;

export default About