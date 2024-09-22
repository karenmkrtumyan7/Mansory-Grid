import { useCallback, useEffect, RefObject } from 'react';

export const useInfiniteScroll = (
  scrollRef: RefObject<HTMLElement>,
  action: () => void,
) => {
  const observer = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return;

      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.intersectionRatio > 0) {
              action();
            }
          });
        },
      );

      intersectionObserver.observe(node);

      return () => {
        intersectionObserver.unobserve(node);
      };
    },
    [action],
  );

  useEffect(() => {
    if (scrollRef.current) {
      observer(scrollRef.current);
    }
  }, [scrollRef, observer]);
};
