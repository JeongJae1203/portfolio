import { useTranslation } from 'react-i18next';
import FooterStyle from './Footer.module.scss';
import kakaoProfile from '../../../assets/images/kakao_profile.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className={ FooterStyle.footer }>
        <div className="inner">
          <p className={ FooterStyle.footer__copyright }>
            Copyright 2025. LEEJEONGJAE. All Rights reserved. <br />
          </p>
          <p>{ t('lastUpdated') } 2025.10.28</p>
        </div>
        <div className={ FooterStyle.footer__bottom }>
          <div className={ FooterStyle.footer__bottom__inner }>
            <h4 className={ FooterStyle.footer__bottom_comment }>
              더 궁금한 점이 있으시다면 편하게 연락주세요.
            </h4>
            <ul className={ FooterStyle.footer__bottom_list }>
              <li>
                <span>이메일</span>
                <div>
                  <a href="mailto:st20916@naver.com">st20916@naver.com</a>
                  <a href="mailto:jarryjeong@jarryjeong.pe.kr">jarryjeong@jarryjeong.pe.kr</a>
                </div>
              </li>
              <li>
                <span>전화번호</span>
                <a href="tel:01043501651" title="클릭 시, 전화가 걸립니다.">010-4350-1651</a>
              </li>
              <li>
                <span>카카오톡</span>
                <img src={ kakaoProfile } alt="카카오톡 프로필" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer