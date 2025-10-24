import { useTranslation } from 'react-i18next';
import MainTitle from '../common/MainTitle'
import styled from 'styled-components';
import AboutStyle from './About.module.scss';

const About = () => {
  const { t } = useTranslation();

  const shortProfileArray = [
    t('shortProfile1'),
    t('shortProfile2'),
    t('shortProfile3'),
    t('shortProfile4'),
    t('shortProfile5'),
  ];

  const shortProfileArrayWithStrong = shortProfileArray.map(profile => {
    if (profile.includes('<strong>')) {
      return profile.replace('<strong>', '<strong>').replace('</strong>', '</strong>');
    }
    return profile;
  });

  return (
    <>
      <AboutSection id="about">
        <div className="inner">
          {/* 섹션 타이틀 */}
          <MainTitle title={ t('about') } />
          <div className={ AboutStyle.about }>
            <div className={ AboutStyle.about_myself }>
              { shortProfileArrayWithStrong.map((profile, index) => (
                <p key={ index } dangerouslySetInnerHTML={{ __html: profile }} />
              )) }
            </div>
            <div className={ AboutStyle.about_keyword }>
              <div className={ AboutStyle.keyword__cont }>
                <h3 className={ AboutStyle.keyword__title }>{ t('keyword') }</h3>
                <p className={ AboutStyle.keyword__desc }>{ t('keywordDesc') }</p>
                <div className={ AboutStyle.keyword__label__wrap }>
                  <span className={ AboutStyle.keyword__label }># { t('keyword1') }</span>
                  <span className={ AboutStyle.keyword__label }># { t('keyword2') }</span>
                  <span className={ AboutStyle.keyword__label }># { t('keyword3') }</span>
                  <span className={ AboutStyle.keyword__label }># { t('keyword4') }</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutSection>
    </>
  )
}


const AboutSection = styled.section`
  padding: 20rem 0 0;
`;

export default About