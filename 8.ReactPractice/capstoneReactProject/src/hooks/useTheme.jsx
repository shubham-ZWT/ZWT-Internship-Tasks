import { useEffect, useState } from "react";

const THEMES = ["light", "dark", "sharp"];

export function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;

    // remove all theme classes first
    root.classList.remove("dark", "sharp");

    if (theme !== "light") {
      root.classList.add(theme);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
