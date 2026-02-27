import { useEffect, useState } from "react";

const THEMES = ["default", "organic", "sharp"];

export default function useTheme() {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme");

    if (savedTheme && THEMES.includes(savedTheme)) {
      setTheme(savedTheme);
      document.documentElement.setAttribute(
        "data-theme",
        savedTheme === "default" ? "" : savedTheme,
      );
    }
  }, []);

  const changeTheme = (newTheme) => {
    if (!THEMES.includes(newTheme)) return;

    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);

    if (newTheme === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  return { theme, changeTheme };
}
