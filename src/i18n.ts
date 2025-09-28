import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(HttpBackend) // JSON 번역 파일 로드
.use(LanguageDetector) // 브라우저 언어 감지
.use(initReactI18next) // React와 i18n 연결
.init({
  fallbackLng: "ko", // 기본 언어
  supportedLngs: ["en", "ko"], // 지원하는 언어
  interpolation: {
    escapeValue: false, // React에서 XSS 방어 필요 없음
  },
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json", // 번역 파일 경로
  },
  debug: true, // 디버깅 활성화
});

export default i18n;