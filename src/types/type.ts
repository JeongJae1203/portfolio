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
  stackList?: Array<string>,
  url?: string,
  github?: string
}