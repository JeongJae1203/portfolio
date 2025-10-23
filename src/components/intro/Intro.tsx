import { useTranslation } from 'react-i18next';
import IntroStyle from './Intro.module.scss'
import { RiDownloadLine, RiGithubFill, RiScrollToBottomLine } from '@remixicon/react';
import { useCallback, useRef } from 'react';

const Intro = () => {
  const { t } = useTranslation();

  const speechBubbleRef = useRef<HTMLDivElement>(null);

  const handleSpeechBubble = useCallback((e: React.MouseEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.offsetLeft)

    if (speechBubbleRef.current) {
      speechBubbleRef.current.classList.add('on');
      speechBubbleRef.current.style.top = `${e.currentTarget.offsetTop + 120}px`;
      speechBubbleRef.current.style.left = `${e.currentTarget.offsetLeft + 50}px`;
    }
  }, []);

  const handleSpeechBubbleLeave = useCallback(() => {
    if (speechBubbleRef.current) {
      speechBubbleRef.current.classList.remove('on');
    }
  }, []);

  return (
    <section className={ IntroStyle.intro }>
      <div className={ IntroStyle.inner }>
        <div className={ IntroStyle.intro__info }>
          <span className={ IntroStyle.intro__summary }>Web Developer</span>
          <p className={ IntroStyle.self }>
            {t('hello')} <br />
            { t('developer') }
            <strong 
              onMouseEnter={handleSpeechBubble} 
              onMouseLeave={handleSpeechBubbleLeave}
            >
              {t('name')}
            </strong> <br />
            {t('helloEnd')}
          </p>
          <div ref={ speechBubbleRef } className="speech_bubble">
            <span>
              {t('summary3')}
              <br />
              {t('summary4')}
              <br />
              {t('summary5')}
            </span>
          </div>
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