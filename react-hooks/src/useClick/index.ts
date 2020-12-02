import React, { useEffect, useRef } from 'react';

const useClick = (onClick: Function) => {
  const element = useRef<any>(null);
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    }
  }, []);
  return element;
}

export default useClick;
