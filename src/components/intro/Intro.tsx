import { useTranslation } from 'react-i18next';
import IntroStyle from './Intro.module.scss'
import { RiDownloadLine, RiGithubFill, RiScrollToBottomLine } from '@remixicon/react';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section className={ IntroStyle.intro }>
      <div className={ IntroStyle.inner }>
        <div className={ IntroStyle.intro__info }>
          <span className={ IntroStyle.intro__summary }>Web Developer</span>
          <p className={ IntroStyle.self }>
            {t('hello')} <br />
            { t('developer') }
            <strong>{t('name')}</strong> <br />
            {t('helloEnd')}
          </p>
          <p className={ IntroStyle.description }>
            {t('summary3')}
            <br />
            {t('summary4')}
            <br />
            {t('summary5')}
          </p>
        </div>
        <div className={ IntroStyle.btn__container }>
          <a href="/file/resume.hwp" download={true} className={ IntroStyle.btn__download }>
            <span>{t('download')}</span>
            <RiDownloadLine />
          </a>
          <a 
            href="https://github.com/JeongJae1203" 
            target="_blank" 
            className={ IntroStyle.btn__github }
          >
            <RiGithubFill />
          </a>
        </div>
      </div>
      <div className={ IntroStyle.scroll__icon }>
        <RiScrollToBottomLine />
      </div>
    </section>
  )
}

export default Intro