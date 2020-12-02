import { ChangeEvent, useState } from "react";

const useInput = (
  argValue: string,
  validator: Function,
) => {
  const [value, setValue] = useState(argValue);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default useInput;
