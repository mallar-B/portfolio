import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeToggle = ({
  size,
  style,
}: {
  size?: number;
  style?: React.CSSProperties;
}) => {
  const [theme, setTheme] = useState("dark");
  const handleThemeChange = (th: string) => {
    setTheme(th === "dark" ? "light" : "dark");
    localStorage.setItem("theme", th === "dark" ? "light" : "dark");
  };
  const getTheme = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    } else {
      const t =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      return t;
    }
  };

  useEffect(() => {
    // running inside useEffect so no hydration error
    setTheme(() => getTheme());
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <DarkModeSwitch
      moonColor="#fbf1c7"
      sunColor="#282828"
      checked={theme === "dark"}
      onChange={() => handleThemeChange(theme)}
      style={style}
      size={size}
    />
  );
};

export default ThemeToggle;
