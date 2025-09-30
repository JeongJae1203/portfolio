import { useTranslation } from 'react-i18next';
import IntroStyle from './Intro.module.scss'
import { RiScrollToBottomLine } from '@remixicon/react';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section className={ IntroStyle.intro }>
      <div className={ IntroStyle.inner }>
        <div className={ IntroStyle.intro__info }>
          <span className={ IntroStyle.intro__summary }>Web Developer</span>
          <p className={ IntroStyle.self }>{t('hello')} <strong>{t('name')}</strong> {t('helloEnd')}</p>
          <p className={ IntroStyle.description }>{t('summary')}</p>
        </div>
      </div>
      <div className={ IntroStyle.scroll__icon }>
        <RiScrollToBottomLine />
      </div>
    </section>
  )
}

export default Intro