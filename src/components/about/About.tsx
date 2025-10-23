import { useTranslation } from 'react-i18next';
import MainTitle from '../common/MainTitle'
import styled from 'styled-components';
import Box from '../common/Box';
import AboutStyle from './About.module.scss';
import CssImg from '../../assets/images/skill/CSS.svg';
import ScssImg from '../../assets/images/skill/Sass.svg';
import HTMLImg from '../../assets/images/skill/HTML.svg';
import JSImg from '../../assets/images/skill/JavaScript.svg';
import VueImg from '../../assets/images/skill/Vue.svg';
import ReactImg from '../../assets/images/skill/React.svg';
import NodeImg from '../../assets/images/skill/NodeJS-Light.svg';
import MySQLImg from '../../assets/images/skill/MySQL-Light.svg';
import VSCodeImg from '../../assets/images/skill/VSCode.svg';
import IdeaImg from '../../assets/images/skill/Idea-Dark.svg';
import GithubImg from '../../assets/images/skill/Github-Light.svg';
import VercelImg from '../../assets/images/skill/Vercel-Light.svg';
import ViteImg from '../../assets/images/skill/Vite-Light.svg';


const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <AboutSection id="about">
        <div className="inner">
          {/* 섹션 타이틀 */}
          <MainTitle title={ t('about') } />
          <div className={ AboutStyle.about }>
            <div className={ AboutStyle.about_myself }>
              
            </div>
            <div className={ AboutStyle.about_keyword }>

            </div>
          </div>

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
                    <span className={ AboutStyle.keyword__label }># { t('keyword1') }</span>
                    <span className={ AboutStyle.keyword__label }># { t('keyword2') }</span>
                    <span className={ AboutStyle.keyword__label }># { t('keyword3') }</span>
                    <span className={ AboutStyle.keyword__label }># { t('keyword4') }</span>
                  </div>
                </div>
              </Box>
            </ShortProfileBox>
          </ShortProfile>
          {/* 스킬 */}
          <CommonSection>
            <h4 className={ AboutStyle.sub__title }>{ t('skill') }</h4>
            <div className={ AboutStyle.skill }>
              <div className={ AboutStyle.skill__list }>
                <div className={ AboutStyle.skill__item }>
                  <img src={ CssImg } alt="CSS" />
                  <span>CSS</span>
                </div>
                <div className={ AboutStyle.skill__item }>
                  <img src={ ScssImg } alt="SCSS" />
                  <span>SCSS</span>
                </div>
                <div className={ AboutStyle.skill__item }>
                  <img src={ HTMLImg } alt="HTML" />
                  <span>HTML</span>
                </div>
                <div className={ AboutStyle.skill__item }>
                  <img src={ JSImg } alt="JavaScript" />
                  <span>JavaScript</span>
                </div>
                <div className={ AboutStyle.skill__item }>
                  <img src={ VueImg } alt="Vue.js" />
                  <span>Vue.js</span>
                </div>
                <div className={ AboutStyle.skill__item }>
                  <img src={ ReactImg } alt="React.js" />
                  <span>React.js</span>
                </div>
                <div className={ AboutStyle.skill__item }>
                  <img src={ NodeImg } alt="Node.js" />
                  <span>Node.js</span>
                </div>
                <div className={ AboutStyle.skill__item }>
                  <img src={ MySQLImg } alt="MySQL" />
                  <span>MySQL</span>
                </div>
                <div className={ AboutStyle.skill__item }>
                  <img src={ VSCodeImg } alt="VSCode" />
                  <span>VSCode</span>
                </div>
                <div className={ AboutStyle.skill__item }>
                  <img src={ IdeaImg } alt="IntelliJ IDEA" />
                  <span>IntelliJ IDEA</span>
                </div>
                <div className={ AboutStyle.skill__item }>
                  <img src={ GithubImg } alt="GitHub" />
                  <span>GitHub</span>
                </div>
                <div className={ AboutStyle.skill__item }>
                  <img src={ VercelImg } alt="Vercel" />
                  <span>Vercel</span>
                </div>
                <div className={ AboutStyle.skill__item }>
                  <img src={ ViteImg } alt="Vite" />
                  <span>Vite</span>
                </div>
              </div>
              <div className={ AboutStyle.skill__spec }>
                <div className={ AboutStyle.skill__spec__item }>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Vue.js</span>
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </CommonSection>
        </div>
      </AboutSection>
    </>
  )
}


const AboutSection = styled.section`
  padding: 20rem 0 0;
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