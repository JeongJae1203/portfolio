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
              <Box></Box>
            </ShortProfileBox>
          </ShortProfile>
          {/* 경력 */}
          <CommonSection>
            <h4 className={ AboutStyle.sub__title }>{ t('career') }</h4>
            <div className={ AboutStyle.cont }>
              <Box>
                <div className={ AboutStyle.title__wrap }>
                  <span className={ AboutStyle.date }>2020.10 - 2025.03</span>
                  <h4 className={ AboutStyle.company }>(주)지플러스</h4>
                  <p className={ AboutStyle.department }># e-biz 사업부 디자인팀 - 퍼블리싱 총괄</p>
                </div>
                <ul className={ AboutStyle.charge__list }>
                  <li><span>HTML, CSS, JS, SCSS를 활용해 웹 표준 및 접근성 준수하여 자사 및 타사 웹 사이트 퍼블리싱</span></li>
                  <li><span>웹 디자이너 및 백엔드 개발자와의 협업 툴을 적극적으로 활용해 지속적인 커뮤니테이션</span></li>
                  <li><span>클라이언트와의 직접적인 소통 및 응대를 통해 프로젝트 구체화</span></li>
                </ul>
              </Box>
              <Box>
                <div className={ AboutStyle.title__wrap }>
                  <span className={ AboutStyle.date }>2018.02 - 2020.01</span>
                  <h4 className={ AboutStyle.company }>(주)온더시스</h4>
                  <p className={ AboutStyle.department }># 시스템 개발부 - Java 기반 웹 개발</p>
                </div>
                <ul className={ AboutStyle.charge__list }>
                  <li><span>Spring, Tibero DB 한국수자원공사 및 기타 지자체 웹 수문 현황 모니터링 개발</span></li>
                  <li><span>웹 디자이너와의 지속적인 커뮤니케이션</span></li>
                  <li><span>클라이언트와의 직접적인 소통 및 응대를 통해 프로젝트 구체화</span></li>
                </ul>
              </Box>
            </div>
          </CommonSection>
          {/* 교육 */}
          <CommonSection>
            <h4 className={ AboutStyle.sub__title }>{ t('education') }</h4>
            <div className={ AboutStyle.cont }>
            <Box>
                <div className={ AboutStyle.title__wrap }>
                  <span className={ AboutStyle.date }>2025.04 - 2025.10 / 2020.04 - 2020.10</span>
                  <h4 className={ AboutStyle.company }>대전세잔직업전문학교</h4>
                  <p className={ AboutStyle.department }># 프론트엔드 개발자 과정 수료</p>
                  <p className={ AboutStyle.department }># 웹 디자인 & 퍼블리서 과정 수료</p>
                </div>
                <ul className={ AboutStyle.charge__list }>
                  <li><span>Javascript, Vue.js, React.js, MySQL 학습</span></li>
                  <li><span>스터디에 참여하여 개발 공부 진행 및 동기생들과 원활한 소통과 커뮤니케이션</span></li>
                  <li><span>팀 프로젝트 1회 진행</span></li>
                  <li><span>HTML, CSS, Javascript, JQuery 학습</span></li>
                </ul>
              </Box>
              <Box>
                <div className={ AboutStyle.title__wrap }>
                  <span className={ AboutStyle.date }>2017.06 - 2017.12</span>
                  <h4 className={ AboutStyle.company }>이노비즈협회</h4>
                  <p className={ AboutStyle.department }># Java 기반 웹 개발자 과정 수료</p>
                </div>
                <ul className={ AboutStyle.charge__list }>
                  <li><span>Spring, JPA, Oracle DB 학습</span></li>
                  <li><span>팀 프로젝트 1회 진행</span></li>
                </ul>
              </Box>
            </div>
          </CommonSection>
          {/* 스킬 */}
          <CommonSection>
            <h4 className={ AboutStyle.sub__title }>{ t('skill') }</h4>
            <div className={ AboutStyle.skill__list }>
              <div className={ AboutStyle.skill__item }>
                <h5 className={ AboutStyle.title }>{ t('Front-End') }</h5>
                <ul className={ AboutStyle.list }>
                  <li>
                    <div className={ AboutStyle.image__icon }>
                      <img src={ CssImg } alt="CSS" />
                      <img src={ ScssImg } alt="SCSS" />
                    </div>
                    <span>CSS, SCSS</span>
                  </li>
                  <li>
                    <div className={ AboutStyle.image__icon }>
                      <img src={ HTMLImg } alt="HTML" />
                    </div>
                    <span>HTML</span>
                  </li>
                  <li>
                    <div className={ AboutStyle.image__icon }>
                      <img src={ JSImg } alt="Javascript" />
                    </div>
                    <span>Javascript</span>
                  </li>
                  <li>
                    <div className={ AboutStyle.image__icon }>
                      <img src={ VueImg } alt="Vue.js" />
                      <img src={ ReactImg } alt="React.js" />
                    </div>
                    <span>Vue.js, React.js</span>
                  </li>
                </ul>
              </div>
              <div className={ AboutStyle.skill__item }>
                <h5 className={ AboutStyle.title }>{ t('Back-End') }</h5>
                <ul className={ AboutStyle.list }>
                  <li>
                    <div className={ AboutStyle.image__icon }>
                      <img src={ NodeImg } alt="Node.js" />
                    </div>
                    <span>Node.js</span>
                  </li>
                  <li>
                    <div className={ AboutStyle.image__icon }>
                      <img src={ MySQLImg } alt="MySQL" />
                    </div>
                    <span>MySQL</span>
                  </li>
                </ul>
              </div>
              <div className={ AboutStyle.skill__item }>
                <h5 className={ AboutStyle.title }>{ t('Tools') }</h5>
                <ul className={ AboutStyle.list }>
                  <li>
                    <div className={ AboutStyle.image__icon }>
                      <img src={ VSCodeImg } alt="Visual Studio Code" />
                    </div>
                    <span>Visual Studio Code</span>
                  </li>
                  <li>
                    <div className={ AboutStyle.image__icon }>
                      <img src={ IdeaImg } alt="IntelliJ IDEA" />
                    </div>
                    <span>IntelliJ IDEA</span>
                  </li>
                  <li>
                    <div className={ AboutStyle.image__icon }>
                      <img src={ GithubImg } alt="Github" />
                    </div>
                    <span>Github</span>
                  </li>
                  <li>
                    <div className={ AboutStyle.image__icon }>
                      <img src={ VercelImg } alt="Vercel" />
                    </div>
                    <span>Vercel</span>
                  </li>
                  <li>
                    <div className={ AboutStyle.image__icon }>
                      <img src={ ViteImg } alt="Vite" />
                    </div>
                    <span>Vite</span>
                  </li>
                </ul>
              </div>
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