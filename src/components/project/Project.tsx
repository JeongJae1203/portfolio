import { useTranslation } from "react-i18next";
import styled from "styled-components"
import MainTitle from "../common/MainTitle";

const Project = () => {
  const { t } = useTranslation();

  return (
    <ProjectSection>
      <div className="inner">
        {/* 섹션 타이틀 */}
        <MainTitle title={ t('project') } />
      </div>
    </ProjectSection>
  )
}

const ProjectSection = styled.section`
  padding: 20rem 0 0;
`;

export default Project