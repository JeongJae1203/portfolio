import htmlImg from '@/assets/images/skill/HTML.svg'
import cssImg from '@/assets/images/skill/CSS.svg'
import vueImg from '@/assets/images/skill/Vue.svg'
import reactImg from '@/assets/images/skill/React.svg'
import nodeImg from '@/assets/images/skill/NodeJS-Light.svg'
import scssImg from '@/assets/images/skill/Sass.svg'
import jsImg from '@/assets/images/skill/JavaScript.svg'
import tsImg from '@/assets/images/skill/TypeScript.svg'
import mySqlImg from '@/assets/images/skill/MySQL-Light.svg'
import viteImg from '@/assets/images/skill/Vite-Light.svg'
import vercelImg from '@/assets/images/skill/Vercel-Light.svg'
import gitImg from '@/assets/images/skill/Git.svg'
import githubImg from '@/assets/images/skill/Github-Light.svg'
import bootstrapImg from '@/assets/images/skill/Bootstrap.svg'
import tailwindImg from '@/assets/images/skill/TailwindCSS-Light.svg'
import vscodeImg from '@/assets/images/skill/VSCode.svg'
import intelliJImg from '@/assets/images/skill/Idea-Dark.svg'

export const techData = [
  {
    id: "tech-html",
    name: "🟧 HTML",
    description: "<strong>시맨틱 마크업</strong>을 기반으로 구조적이고 <strong>접근성</strong> 높은 페이지를 구성할 수 있으며, SEO와 유지보수성을 고려하여 효율적인 태그 구조를 설계하고, 디자인 시안과 일치하는 정교한 UI를 구현합니다."
  },
  {
    id: "tech-css",
    name: "🟦 CSS, SCSS",
    description: "Flexbox와 Grid를 활용해 반응형 레이아웃을 유연하게 구성할 수 있습니다. \n BEM 네이밍 규칙과 모듈화된 스타일 구조를 적용하여 일관성 있는 디자인을 유지하고, <strong>미디어 쿼리</strong>를 활용해 다양한 디바이스에 최적화된 디자인을 구현하며 <strong>애니메이션과 트랜지션</strong>을 적절히 사용하여 사용자 경험을 향상시킵니다. \n 또한, 각종 CSS 프레임워크(Tailwind CSS, Bootstrap, etc.)를 활용하여 빠르고 효율적인 디자인을 구현할 수 있습니다."
  },
  {
    id: "tech-vue",
    name: "🟩 Vue.js",
    description: "<strong>Composition API / Pinia</strong>를 기반으로 구조화된 Vue 애플리케이션을 구축할 수 있습니다. \n 컴포넌트 간 데이터 흐름을 명확하게 관리하고, 라우터, 폼, 비동기 API 연동 등 다양한 기능을 통합적으로 설계합니다."
  },
  {
    id: "tech-react",
    name: "⚛️ React.js",
    description: "시맨틱 마크업과 모듈화된 구조를 기반으로 유지보수성이 높은 UI를 구현할 수 있습니다. \n <strong>Router</strong>를 활용해 페이지 간 전환 구조를 설계하고, <strong>Styled Components</strong>로 컴포넌트 단위 스타일링을 적용할 수 있습니다. <strong>Zustand</strong>를 통한 전역 상태 관리, <strong>React-Query</strong>를 활용한 데이터 페칭 및 캐싱, 그리고 상황에 맞는 Custom Hook을 직접 정의하여 재사용 가능한 로직을 구성합니다."
  },
  {
    id: "tech-typescript",
    name: "🔷 TypeScript",
    description: "컴포넌트 간 Props 타입을 명확히 정의하고, 기능별 인터페이스나 단순한 유틸 타입을 설정할 수 있습니다. \n TypeScript를 통해 코드 안정성과 예측 가능성을 높이며, 협업 시 오류를 최소화하는 방향으로 코드를 작성합니다."
  },
  {
    id: "tech-node",
    name: "🟢 Node.js",
    description: "비동기 이벤트 기반의 서버 환경을 구축할 수 있습니다. Express.js와 함께 RESTful API 서버를 구성하며, 프론트엔드와의 통신 구조를 고려한 효율적인 백엔드 로직을 구현합니다."
  },
]

/**
 * Tech Img Data
 * 
 * @description 사용 기술 이미지
 */
export const techImgData = [
  {
    id: "tech-html",
    img: htmlImg,
  },
  {
    id: "tech-css",
    img: cssImg,
  },
  {
    id: "tech-scss",
    img: scssImg,
  },
  {
    id: "tech-bootstrap",
    img: bootstrapImg
  },
  {
    id: "tech-tawilwind",
    img: tailwindImg
  },
  {
    id: "tech-js",
    img: jsImg
  },
  {
    id: "tech-ts",
    img: tsImg
  },
  {
    id: "tech-vue",
    img: vueImg,
  },
  {
    id: "tech-react",
    img: reactImg,
  },
  {
    id: "tech-node",
    img: nodeImg,
  },
  {
    id: "tech-mysql",
    img: mySqlImg
  },
  {
    id: "tech-vite",
    img: viteImg
  },
  {
    id: "tech-vercel",
    img: vercelImg
  },
  {
    id: "tech-git",
    img: gitImg
  },
  {
    id: "tech-github",
    img: githubImg
  },
  {
    id: "tech-vscode",
    img: vscodeImg
  },
  {
    id: "tech-idea",
    img: intelliJImg
  }
]