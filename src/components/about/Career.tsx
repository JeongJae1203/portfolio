import Box from '../common/Box'
import AboutStyle from './About.module.scss'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Career = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="inner">
        {/* 경력 */}
        <CommonSection>
          <h4 className={ AboutStyle.sub__title }>{ t('career') }</h4>
          <div className={ AboutStyle.cont }>
            <Box>
              <div className={ AboutStyle.title__wrap }>
                <span className={ AboutStyle.date }>2020.10 - 2025.03</span>
                <h4 className={ AboutStyle.company }>{ t('gplus') }</h4>
                <p className={ AboutStyle.department }># { t('gplusDesc') }</p>
              </div>
              <ul className={ AboutStyle.charge__list }>
                <li><span>HTML, CSS, JS, SCSS를 활용해 웹 표준 및 접근성 준수하여 자사 및 타사 웹 사이트 퍼블리싱</span></li>
                <li><span>웹 디자이너 및 백엔드 개발자와의 협업 툴을 적극적으로 활용해 지속적인 커뮤니케이션</span></li>
                <li><span>클라이언트와의 직접적인 소통 및 응대를 통해 프로젝트 구체화</span></li>
              </ul>
            </Box>
            <Box>
              <div className={ AboutStyle.title__wrap }>
                <span className={ AboutStyle.date }>2018.02 - 2020.01</span>
                <h4 className={ AboutStyle.company }>{ t('onthesys') }</h4>
                <p className={ AboutStyle.department }># { t('onthesysDesc') }</p>
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
                <li><span>스터디를 주최하여 개발 공부 진행 및 동기생들과 원활한 소통과 커뮤니케이션</span></li>
                <li><span>팀 프로젝트 1회 진행 (대전세잔직업전문학교 리뉴얼)</span></li>
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
                <li><span>팀 프로젝트 1회 진행 (도서 관리 시스템)</span></li>
              </ul>
            </Box>
          </div>
        </CommonSection>
      </div>
    </>
  )
}

const CommonSection = styled.section`
  padding: 10rem 0 0;
`;


export default Career