import { useState, useEffect, useCallback } from "react";

export default function useAsync(asyncFn, immediate = true) {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(
    (...args) => {
      setStatus("loading");
      setValue(null);
      setError(null);

      return asyncFn(...args)
        .then((response) => {
          setValue(response);
          setStatus("success");
        })
        .catch((error) => {
          setError(error);
          setStatus("error");
        });
    },
    [asyncFn],
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
}
