import portfolioThumbnail from '../../assets/images/project/thumb_portfolio.png';
import cezanneThumbnail from '../../assets/images/project/thumb_cezanne.png';

/**
 * Project Data를 배열 객체로 관리
 */
export const pjrtData = [
  {
    id : 1,
    name : '대전세잔직업전문학교 리뉴얼',
    type : 'team',
    keyword : ['HTML', 'SCSS', 'JavaScript', 'JQuery', 'Parcel', 'Vercel'],
    thumbnail: cezanneThumbnail,
    description : '팀 프로젝트',
    url: 'https://renewal-cezanne.vercel.app/',
    github : 'https://github.com/JeongJae1203/renewal-cezanne',
  },
  {
    id : 2,
    name : '포트폴리오',
    type : 'personal',
    keyword : ['React.js', 'Typescript', 'SCSS', 'Styled-Components', 'Vite', 'Vercel'],
    description : '포트폴리오',
    thumbnail: portfolioThumbnail,
    url: 'https://jarryjeong.vercel.app/',
    github : 'https://github.com/JeongJae1203/portfolio'
  }
];