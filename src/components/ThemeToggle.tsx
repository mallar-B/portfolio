import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

// will be used to manage themes between different components 
// for mobile and desktop
const THEME_CHANGE_EVENT = "themeChange";

const ThemeToggle = ({
  size,
  style,
}: {
  size?: number;
  style?: React.CSSProperties;
}) => {
  const [theme, setTheme] = useState("dark");
  const handleThemeChange = (th: string) => {
    const newTheme = th === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // create and dispatch the event
    const event = new CustomEvent(THEME_CHANGE_EVENT, {
      detail: { theme: newTheme },
    });
    window.dispatchEvent(event);
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
    // trigger on theme change
    const handleThemeChange = (e: CustomEvent) => {
      const newTheme = e.detail.theme;
      console.log("Theme change detected:", newTheme);
      setTheme(newTheme);
    };

    // Need to cast to any for TypeScript
    window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange as any);

    // running inside useEffect so no hydration error
    setTheme(() => getTheme());
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    return () => {
      window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange as any);
    };
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
