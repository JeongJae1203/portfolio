import styled from 'styled-components'
import type { ProjectProps } from '../../types/type';
import { RiExternalLinkLine, RiGithubFill } from '@remixicon/react';
import { t } from 'i18next';

interface ProjectListProps {
  project?: ProjectProps;
}

const ProjectList = ({ project } : ProjectListProps) => {
  if (!project) {
    return;
  }

  const { name, keyword, description, url, github } = project;
  const openGitHubHandler = () => {
    window.open(github, '_blank');
  }
  
  return (
    <ProjectItemArticle>
      <ProjectImg />
      <ProjectContent>
        <strong className="project__name">{ name }</strong>
        <p className="project__desc">{ description }</p>
        <div className="keyword__wrap">
          {
            keyword && keyword.map(kwrd => (
              <span key={kwrd} className="label">{kwrd}</span>
            ))
          }
        </div>
        <BtnContainer>
          <button
            type="button"
            className="detail__btn"
          >
            <RiExternalLinkLine />
            <span>{ t('linkToDetail') }</span>
          </button>
          <button 
            type="button" 
            onClick={ openGitHubHandler }
            className="github__btn"
          >
            <RiGithubFill />
            <span>{ t('linkToGithub') }</span>
          </button>
        </BtnContainer>
      </ProjectContent>
    </ProjectItemArticle>
  )
}

const ProjectItemArticle = styled.article`
  position: relative;
  width: 100%;
  background-color: #323232;
  border-radius: 5px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, .4);
`;

const ProjectImg = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #f9f9f9;
  background-position: center;
  background-size: cover;
  border-radius: 5px 5px 0 0;

  @media all and (min-width: 768px) {
    height: 13rem;
  }

  @media all and (min-width: 992px) {
    height: 15rem;
  }
`;

const ProjectContent = styled.div`
  padding: 2.5rem;

  @media all and (min-width: 768px) {
    height: calc(100% - 13rem);
    padding: 5rem 3rem 2rem;

    .project__name {
      font-size: 2.4rem;
    }

    .project__desc {
      font-size: 1.6rem;
    }
  }

  @media all and (min-width: 992px) {
    height: calc(100% - 15rem);
  }

  .project__name {
    display: block;
    font-size: 2rem;
    font-weight: 700;
  }

  .project__desc {
    margin: 3rem 0 6rem;
    font-size: 1.4rem;
    font-weight: 400;
    color: #a6a6a6;
  }

  .keyword__wrap {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;

    .label {
      padding: .75rem;
      background-color: #232323;
      border-radius: 4px;
      font-size: 1.2rem;
      font-weight: 300;
      color: #fff;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  button {
    flex: 1;
  }

  .github__btn {
    gap: 1rem;
    padding: .75rem 1.5rem;
    border: 1px solid #212121;
    background-color: #212121;
    border-radius: 4px;
    font-size: 1.4rem;
    font-weight: 400;
    color: #fff;
  }

  .detail__btn {
    gap: 1rem;
    padding: .75rem 1.5rem;
    border: 1px solid #fff;
    background-color: transparent;
    border-radius: 4px;
    font-size: 1.4rem;
    font-weight: 400;
    color: #fff;
  }
`;

export default ProjectList