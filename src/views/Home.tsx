import About from '../components/about/About';
import Modal from '../components/common/modal/Modal';
import Intro from '../components/intro/Intro';
import Project from '../components/project/Project';
import Sincerely from '../components/sincerely/Sincerely';
import Career from '../components/about/Career';
import Tech from '../components/about/Tech';
import { useOpenModal } from '../stores/useModalStroe';

const Home = () => {
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
      <div id="about">
        <About />
      </div>
      <div id="career">
        <Career />
      </div>
      <div id="tech">
        <Tech />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <Sincerely />
      </div>
    </>
  )
}

export default Home