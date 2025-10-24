import AboutStyle from './About.module.scss'
import { useTranslation } from 'react-i18next'
import { techData, techImgData } from '../../data/tech/tech';
import TechItem from './tech/TechItem';
import type { TechProps } from '../../types/type';

const Tech = () => {
  const { t } = useTranslation();

  return (
    <div className={ AboutStyle.tech }>
      <div className="inner">
        <h4 className={ AboutStyle.sub__title }>{ t('skill') }</h4>
        <div className={ AboutStyle.tech_area }>
          <div className={ AboutStyle.tech_area_list }>
            {
              techImgData && techImgData.map((techImg) => (
                <img key={ techImg?.id } src={ techImg?.img } alt={ techImg?.id } />
              ))
            }
          </div>
          <div className={ AboutStyle.tech_area_spec }>
            <ul>
              {
                techData && techData.map((tech: TechProps['tech']) => (
                  <TechItem key={ tech?.id } tech={ tech as TechProps['tech'] } />
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech