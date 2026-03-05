import React from "react";
import { useState, useEffect } from "react";
export default function useDebounce(value, delay) {
  const [debouncedValue, setDeboundedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDeboundedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
