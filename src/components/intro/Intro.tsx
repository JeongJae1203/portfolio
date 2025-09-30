import IntroStyle from './Intro.module.scss'

const Intro = () => {
  return (
    <section className={ IntroStyle.intro }>
      <div className={ IntroStyle.inner }>
        <div className={ IntroStyle.intro__info }>
          <span className={ IntroStyle.intro__summary }>Web Developer</span>
        </div>
      </div>
    </section>
  )
}

export default Intro