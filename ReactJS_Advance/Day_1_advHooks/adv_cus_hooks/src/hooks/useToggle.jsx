import { useState, useCallback } from "react";

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  console.log(value);

  const toggle = useCallback(() => setValue((v) => !v), []);

  return [value, toggle];
}
