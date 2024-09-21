import {
  useState, useCallback, useEffect, useRef,
} from 'react';

export const useScreenResize = (limit: number): [number, number] => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  const [lastRan, setLastRan] = useState<number>(0);
  const postExec = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleResizePost = useCallback(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  const handleResize = useCallback(() => {
    if (Date.now() - lastRan > limit) {
      setLastRan(Date.now());
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      clearTimeout(postExec.current as ReturnType<typeof setTimeout>);
      postExec.current = setTimeout(handleResizePost, limit);
    }
  }, [limit, lastRan, handleResizePost]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
      if (postExec.current) {
        clearTimeout(postExec.current);
      }
    };
  }, [handleResize]);

  return [windowWidth, windowHeight];
};
