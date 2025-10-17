import { RiCloseLine, RiExternalLinkLine, RiGithubFill } from '@remixicon/react';
import type { ProjectProps } from '../../../types/type';
import ModalStyle from './Modal.module.scss';

interface ModalProps {
  projectData?: ProjectProps | null;
  closeModal: () => void;
}

const Modal = ({ projectData, closeModal }: ModalProps) => {
  const openGithub = () => {
    window.open(projectData?.github, '_blank');
  }

  const openSite = () => {
    if (projectData?.url) {
      window.open(projectData?.url, '_blank');
    } else {
      alert('현재 프로젝트는 개발 중이므로 외부 사이트 연결이 없습니다.');
      return;
    }
  }

  const closeModalHandler = () => {
    closeModal();
    document.body.style.overflow = 'initial';
  }

  return (
    <>
      <div className={ ModalStyle.modal }>
        <div className={ ModalStyle.modal__content }>
          {/* body */}
          <div className={ ModalStyle.modal__body }>
            <div className={ ModalStyle.modal__body__top }></div>
            {/* title */}
            <div className={ ModalStyle.modal__body__title }>
              <div className={ ModalStyle.modal__body__bottom__thumbnail }>
                <img src={ projectData?.thumbnail } alt={ projectData?.name } />
              </div>
              <h2 className={ ModalStyle.modal__title }>{ projectData?.name }</h2>
            </div>
            {/* description */}
            <p className={ ModalStyle.modal__body__description }>{ projectData?.description }</p>
            {/* 기술 스택 */}
            <div className={ ModalStyle.modal__body__stack }>
              <div className={ ModalStyle.modal__inner }>
                <h3 className={ ModalStyle.modal__title }>기술 스택</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={ ModalStyle.modal__util }>
          <button 
            type="button" 
            className={ ModalStyle.modal__util__btn }
            onClick={ closeModalHandler }
            data-text="닫기"
          >
            <RiCloseLine />
          </button>
          <button
            type="button"
            className={ ModalStyle.modal__util__btn }
            onClick={ openGithub }
            data-text="Github"
          >
            <RiGithubFill />
          </button>
          <button 
            type="button"
            className={ ModalStyle.modal__util__btn }
            data-text="사이트"
            onClick={ openSite }
          >
            <RiExternalLinkLine />
          </button>
        </div>
      </div>
      <div className={ ModalStyle.modal__overlay }></div>
    </>
  )
}

export default Modal