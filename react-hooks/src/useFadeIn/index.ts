
import { useRef, useEffect } from 'react';

const useFadeIn = (
  duration: number = 1000,
  delay: number = 0,
) => {
  const element = useRef<any>(null);
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}ms ease-in-out ${delay}ms`;
      current.style.opacity = 1;
    }
  });
  return {
    ref: element,
    style: { opacity: 0 }
  };
}

export default useFadeIn;
