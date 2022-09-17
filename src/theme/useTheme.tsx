import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
  toggleTheme: () => void,
  theme: Theme
}

export function useTheme(): UseThemeResult {


  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  const {theme, setTheme} = useContext(ThemeContext)
  return {theme, toggleTheme}
}

