export type MainTitleProps = {
  title?: string;
}

export type ChildrenProps = {
  children?: React.ReactNode;
}

/**
 * ProjectProps
 * 
 * @description 프로젝트 관련 Props Type 정의
 */
export type ProjectProps = {
  name?: string,
  type?: string,
  keyword?: Array<string>,
  description?: string,
  thumbnail?: string,
  features?: Array<string>,
  implementation?: Array<string>,
  deployment?: Array<string>,
  techStack?: {
    frontend?: Array<string>,
    backend?: Array<string>,
    tools?: Array<string>
  },
  duration?: string,
  url?: string,
  github?: string
}

/**
 * TechProps
 * 
 * @description Tech 관련 Props Type 정의
 */
export type TechProps = {
  tech?: {
    id?: string,
    name?: string,
    description?: string
  }
}