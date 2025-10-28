import About from '../components/about/About';
import Modal from '../components/common/modal/Modal';
import Intro from '../components/intro/Intro';
import Project from '../components/project/Project';
import Sincerely from '../components/sincerely/Sincerely';
import Career from '../components/about/Career';
import Tech from '../components/about/Tech';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import { useOpenModal } from '../stores/useModalStroe';

const Home = () => {
  const aboutFadeIn = useScrollFadeIn();
  const careerFadeIn = useScrollFadeIn();
  const projectFadeIn = useScrollFadeIn();
  const techFadeIn = useScrollFadeIn();

  const { isOpen, projectData, closeModal } = useOpenModal();

  return (
    <>
      { 
        isOpen && 
        <Modal 
          projectData={projectData} 
          closeModal={closeModal} 
        /> 
      }
      <Intro />
      <div id="about" ref={aboutFadeIn.ref} className="fade__area">
        <About />
      </div>
      <div id="career" ref={careerFadeIn.ref} className="fade__area">
        <Career />
      </div>
      <div id="tech" ref={techFadeIn.ref} className="fade__area">
        <Tech />
      </div>
      <div id="projects" ref={projectFadeIn.ref} className="fade__area">
        <Project />
      </div>
      <div id="contact">
        <Sincerely />
      </div>
    </>
  )
}

export default Home