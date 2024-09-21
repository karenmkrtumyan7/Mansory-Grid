import { useEffect, RefObject } from 'react';

export const useClickOutside = <T extends HTMLElement>(
  innerRef: RefObject<T>,
  callback: (event: MouseEvent) => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      event.stopPropagation();
      if (
        innerRef.current
          && !innerRef.current.contains(event.target as Node)
          && event.target instanceof Node
          && event.target.contains(innerRef.current)
      ) {
        callback(event);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [callback, innerRef]);
};
