import AboutStyle from './About.module.scss'
import { useTranslation } from 'react-i18next'

const Tech = () => {
  const { t } = useTranslation();

  return (
    <div className={ AboutStyle.tech }>
      <h4 className={ AboutStyle.sub__title }>{ t('skill') }</h4>
      <div className={ AboutStyle.tech_area }>
        <div className={ AboutStyle.tech_area_list }>
          
        </div>
        <div className={ AboutStyle.tech_area_spec }>

        </div>
      </div>
    </div>
  )
}

export default Tech