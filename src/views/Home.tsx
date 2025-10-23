import About from '../components/about/About';
import Modal from '../components/common/modal/Modal';
import Intro from '../components/intro/Intro';
import Project from '../components/project/Project';
import Sincerely from '../components/sincerely/Sincerely';
import Career from '../components/about/Career';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import { useOpenModal } from '../stores/useModalStroe';

const Home = () => {
  const aboutFadeIn = useScrollFadeIn('40px');
  const careerFadeIn = useScrollFadeIn();
  const projectFadeIn = useScrollFadeIn();
  const sincerelyFadeIn = useScrollFadeIn('-150px');

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
      <div id="projects" ref={projectFadeIn.ref} className="fade__area">
        <Project />
      </div>
      <div id="contact" ref={sincerelyFadeIn.ref} className="fade__area">
        <Sincerely />
      </div>
    </>
  )
}

export default Home