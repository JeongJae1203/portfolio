import About from '../components/about/About';
import Modal from '../components/common/modal/Modal';
import Intro from '../components/intro/Intro';
import Project from '../components/project/Project';
import Sincerely from '../components/sincerely/Sincerely';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import { useOpenModal } from '../stores/useModalStroe';

const Home = () => {
  const aboutFadeIn = useScrollFadeIn('100px');
  const projectFadeIn = useScrollFadeIn('100px');
  const sincerelyFadeIn = useScrollFadeIn('-300px');

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