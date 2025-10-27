import portfolioThumbnail from '../../assets/images/project/thumb_portfolio.png';
import cezanneThumbnail from '../../assets/images/project/thumb_cezanne.png';
import jjlogThumbnail from '../../assets/images/project/thumb_jjlog.png';

/**
 * Project Data를 배열 객체로 관리
 */
export const pjrtData = [
  {
    id : 1,
    name : '대전세잔직업전문학교 리뉴얼',
    type : 'team',
    keyword : ['HTML5', 'SCSS', 'JavaScript', 'JQuery', 'Parcel', 'Vercel', 'GSAP'],
    thumbnail: cezanneThumbnail,
    description : '교육기간 내 팀 프로젝트 주제로 선정된 대전세잔직업전문학교 리뉴얼 프로젝트입니다. HTML과 CSS를 사용하여 반응형 웹 사이트를 구현하였습니다.',
    features : [
      '반응형 UI', 
      'Swiper.js를 사용한 메인 및 기타 이미지 슬라이드 구현',
      'GSAP를 통한 애니메이션 구현',
      'Vercel을 통한 배포 환경 구성'
    ],
    techStack : {
      frontend : ['HTML', 'CSS', 'Javascript', 'SCSS'],
      backend : [],
      tools: ['Parcel Bundler', 'Github', 'Vercel']
    },
    implementation: [
      'GSAP를 통한 애니메이션 구현',
    ],
    deployment: [
      'Vercel을 통해 배포 자동화',
      'Github를 통한 버전 관리 및 커밋 히스토리 관리'
    ],
    duration : '2025.08.18 - 2025.08.29 (약 2주)',
    url: 'https://renewal-cezanne.vercel.app/',
    github : 'https://github.com/JeongJae1203/renewal-cezanne',
  },
  {
    id : 2,
    name : '포트폴리오',
    type : 'personal',
    keyword : ['React.js', 'Typescript', 'SCSS', 'Styled-Components', 'Vite', 'Vercel', 'Zustand'],
    description : '프론트엔드 개발자로서의 포트폴리오 프로젝트입니다.',
    thumbnail: portfolioThumbnail,
    features : [
      '반응형 UI',
      'i18next를 통한 다국어 지원',
      'Intersection Observer를 통한 스크롤 페이드 인 애니메이션 구현',
      'Vercel을 통한 배포 환경 구성'
    ],
    techStack : {
      frontend : ['React.js', 'Typescript', 'Styled-Components', 'Zustand', 'Vite', 'SCSS'],
      backend : [],
      tools: ['Github', 'Vercel', 'i18next']
    },
    implementation: [
      '컴포넌트 단위 설계 및 Props 타입 정의',
      'Intersection Observer를 통한 스크롤 페이드 인 애니메이션 구현',
      "Styled Components로 UI 스타일링 일원화",
      'i18next를 통한 다국어 지원 구현'
    ],
    deployment: [
      'Vercel을 통해 배포 자동화',
      'Github를 통한 버전 관리 및 커밋 히스토리 관리'
    ],
    duration : '2025.09.28 - 현재',
    url: 'https://jarryjeong.vercel.app/',
    github : 'https://github.com/JeongJae1203/portfolio'
  },
  {
    id : 3,
    name : 'JJlog',
    type : 'personal',
    keyword : ['Vue', 'SCSS', 'Vite', 'Vercel', 'Pinia', 'Toast UI Editor', 'Node.js', 'Express', 'MySQL'],
    description : 'Vue.js + Express.js로 개발한 간단한 개인 커뮤니티 프로젝트입니다. Pinia를 통해 로그인 상태 관리를 진행하였고, Toast UI Editor를 통해 글쓰기 기능을 구현하였습니다.',
    thumbnail: jjlogThumbnail,
    features : [
      '회원가입 및 로그인 (bcryptjs + JWT 기반 인증)',
      '로그인 상태 Pinia를 통한 전역 관리',
      '게시글 CRUD (작성, 수정, 삭제, 조회)',
      'Toast UI Editor를 활용한 마크다운 형식 글쓰기 기능',
      '게시글 목록 및 상세 페이지 구현',
      '반응형 UI 및 사용자 친화적 인터페이스 구성'
    ],
    techStack : {
      frontend : ['Vue.js', 'Pinia', 'Vite', 'SCSS'],
      backend : ['Node.js', 'Express.js', 'MySQL'],
      tools: ['Github', 'Vercel']
    },
    implementation: [
      'Pinia Store를 사용하여 로그인 상태를 전역적으로 관리하고, 페이지 새로고침 시 상태 유지 구현',
      'Express.js와 MySQL을 연동하여 RESTful API 형태로 게시글 CRUD 개발',
      'bcryptjs로 비밀번호 암호화 처리, JWT로 로그인 토큰 인증 구현',
      'Toast UI Editor를 이용하여 마크다운 기반의 글쓰기 환경 구현',
      'Vite 개발 환경에서 Vue Router를 이용한 페이지 라우팅 구성',
      'GitHub으로 버전 관리 후, Vercel을 통해 배포 진행'
    ],
    deployment: [
      'Vercel을 통한 프론트엔드 배포 및 백엔드 서버 연동',
      '로컬 환경에서 API 테스트 (Postman 활용)',
      'Github를 통한 버전 관리 및 커밋 히스토리 관리'
    ],
    duration : '2025.10.09 - 현재',
    url: 'https://jjlog-kappa.vercel.app/',
    github : 'https://github.com/JeongJae1203/jjlog'
  }
];