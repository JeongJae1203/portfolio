import AboutStyle from '../About.module.scss';
import type { TechProps } from '../../../types/type';

const TechItem = ({ tech }: TechProps) => {
  const { name, description } = tech || {};

  // 줄바꿈 처리
  const descriptionArray = description?.split('\n') || [];
  // strong 태그가 있을 경우, 강조 표시
  const descriptionArrayWithStrong = descriptionArray.map(desc => {
    if (desc.includes('<strong>')) {
      return desc.replace('<strong>', '<strong>').replace('</strong>', '</strong>');
    }
    return desc;
  });

  return (
    <>
      <li>
        <h5 className={ AboutStyle.tech_spec_name }>{ name }</h5>
        <div className={ AboutStyle.tech_spec_content }>
          { descriptionArrayWithStrong.map((desc, index) => (
            <p key={ index } dangerouslySetInnerHTML={{ __html: desc }} />
          )) }
        </div>
      </li>
    </>
  )
}

export default TechItem;