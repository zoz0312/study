import defaultAxios from 'axios';
import { useState, useEffect } from 'react';

interface useAxiosObject {
  loading: boolean,
  error: any,
  data: any,
}
interface useAxiosReturn extends useAxiosObject {
  refetch?: any,
}
const useAxios = (
  options: any = {},
  axiosInstance = defaultAxios,
): useAxiosReturn => {
  const defineObject: useAxiosObject = {
    loading: true,
    error: null,
    data: null,
  };

  if (!options.url) {
    defineObject.error = 'no Url';
    return defineObject;
  }

  const [state, setState] = useState(defineObject);
  const [trigger, setTrigger] = useState(0);
  const refetch = (): void => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  }

  useEffect(() => {
    axiosInstance(options).then((data: any) => {
      setState({
        ...state,
        loading: false,
        data,
      });
    })
    .catch((error) => {
      setState({
        ...state,
        loading: false,
        error,
      });
    })
  }, [trigger])

  return {
    ...state,
    refetch,
  };
}