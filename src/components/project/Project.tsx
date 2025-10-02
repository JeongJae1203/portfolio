import { useTranslation } from "react-i18next";
import styled from "styled-components"
import MainTitle from "../common/MainTitle";
import ProjectList from './ProjectList';
import { pjrtData } from '../../data/project/project';

const Project = () => {
  const { t } = useTranslation();

  return (
    <ProjectSection>
      <div className="inner">
        {/* 섹션 타이틀 */}
        <MainTitle title={ t('project') } />
        <ProjectInner>
          {
            pjrtData.length > 1
            ? (
              <ProjectGrid>
                {
                  pjrtData.map(project => (
                    <ProjectList key={project.id} project={project} />
                  ))
                }
              </ProjectGrid>
            ) : (
              <></>
            )
          }
        </ProjectInner>
      </div>
    </ProjectSection>
  )
}

const ProjectSection = styled.section`
  min-height: 100vh;
  padding: 20rem 0 0;
`;

const ProjectInner = styled.article`
  position: relative;
  max-width: 120rem;
  margin: 0 auto;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media all and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media all and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

export default Project