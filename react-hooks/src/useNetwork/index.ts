
import { useState, useEffect } from 'react';

const useNetwork = (
  onChange?: Function,
): boolean => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (onChange) {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  });

  return status;
}

export default useNetwork;
