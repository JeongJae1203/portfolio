import { RiCloseLine, RiGithubFill } from '@remixicon/react';
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
            <div className={ ModalStyle.modal__body__top }>
              <div className={ ModalStyle.modal__keyword_wrap }>
                {
                  projectData?.keyword?.map((keyword) => (
                    <span 
                      key={ keyword } 
                      className={ ModalStyle.modal__body__top__keyword }
                    >#{ keyword }</span>
                  ))
                }
              </div>
            </div>
            {/* title */}
            <div className={ ModalStyle.modal__body__title }>
              <div className={ ModalStyle.modal__body__bottom__thumbnail }>
                <img src={ projectData?.thumbnail } alt={ projectData?.name } />
              </div>
              <h2 className={ ModalStyle.modal__title }>{ projectData?.name }</h2>
            </div>
            {/* description */}
            <p className={ ModalStyle.modal__body__description }>{ projectData?.description }</p>
          </div>
        </div>
        <div className={ ModalStyle.modal__util }>
          <button 
            type="button" 
            className={ ModalStyle.modal__util__btn }
            onClick={ closeModalHandler }
          >
            <RiCloseLine />
          </button>
          <button
            type="button"
            className={ ModalStyle.modal__util__btn }
            onClick={ openGithub }
          >
            <RiGithubFill />
          </button>
        </div>
      </div>
      <div className={ ModalStyle.modal__overlay }></div>
    </>
  )
}

export default Modal