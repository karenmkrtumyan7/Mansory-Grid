import {
  useCallback, useEffect, useRef, useState, RefObject,
} from 'react';

export const useImageLazyLoad = (): [boolean, RefObject<HTMLImageElement>] => {
  const [visibleState, setVisibleState] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const observer = useCallback((node: HTMLImageElement | null) => {
    if (!node) return;

    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setVisibleState(true);
            ob.unobserve(node);
          }
        });
      },
      { threshold: 0.15 },
    );
    ob.observe(node);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      observer(imageRef.current);
    }
  }, [imageRef, observer]);

  return [visibleState, imageRef];
};
