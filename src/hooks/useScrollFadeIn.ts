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
      observer = new IntersectionObserver(handleScroll, { 
        threshold: 0.2, // threshold를 낮춰서 테스트
        rootMargin: rootMargin,
      });

      observer.observe(current);
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