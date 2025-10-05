import About from '../components/about/About';
import Intro from '../components/intro/Intro';
import Project from '../components/project/Project';
import Sincerely from '../components/sincerely/Sincerely';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

const Home = () => {
  const aboutFadeIn = useScrollFadeIn('100px');
  const projectFadeIn = useScrollFadeIn();
  const sincerelyFadeIn = useScrollFadeIn('-300px');

  return (
    <>
      <Intro />
      <div ref={aboutFadeIn.ref} className="fade__area">
        <About />
      </div>
      <div ref={projectFadeIn.ref} className="fade__area">
        <Project />
      </div>
      <div ref={sincerelyFadeIn.ref} className="fade__area">
        <Sincerely />
      </div>
    </>
  )
}

export default Home