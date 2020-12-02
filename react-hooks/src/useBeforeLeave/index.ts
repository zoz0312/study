import { useEffect } from 'react';

const useBeforeLeave = (
  onBefore: Function,
) => {
  const handle = (event: MouseEvent) => {
    onBefore();
  }
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => {
      document.removeEventListener('mouseleave', handle);
    }
  }, [])
}

export default useBeforeLeave;
