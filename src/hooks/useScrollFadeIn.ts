import { useCallback, useEffect, useRef } from "react";

export const useScrollFadeIn = (rootMargin = '0px') => {
  const dom = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(([entry]: IntersectionObserverEntry[]) => {
    const { current } = dom;
    if (entry.isIntersecting) {
      current?.classList.add('intersecting');
    } else {
      current?.classList.remove('intersecting');
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;

    if (current) {
      // 요소의 위치 정보 확인
      const rect = current.getBoundingClientRect();
      console.log('📏 요소 위치 정보:', {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
        width: rect.width,
        height: rect.height,
        viewportHeight: window.innerHeight
      });

      observer = new IntersectionObserver(handleScroll, { 
        threshold: 0.2, // threshold를 낮춰서 테스트
        rootMargin: rootMargin,
      });

      observer.observe(current);
      console.log('👀 IntersectionObserver 시작됨');
    } else {
      console.log('❌ current가 null입니다!');
    }

    return () => observer && observer.disconnect();
  }, [handleScroll, rootMargin]);

  return { 
    ref: dom,
    className: 'intersecting',
  };
}