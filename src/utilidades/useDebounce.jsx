import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const operar = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(operar);
    };
  }, [value, delay]);

  return debounceValue;
};