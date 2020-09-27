import React from 'react'; 
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import config from './config';

const ThemeContext = React.createContext(null);

export const ThemeProvider = ({ children }) => {
  const defaultTheme = React.useMemo(() => window.localStorage.getItem("theme") || "light", [])
  const [theme, setThemeState] = React.useState(defaultTheme);

  const setTheme = (theme) => {
    window.localStorage.setItem("theme", theme);
    setThemeState(theme);
  };

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const themeConfig = config[theme];

  return (
    <ThemeContext.Provider value={{ theme, themeConfig, toggleTheme }}>
      <StyledThemeProvider theme={themeConfig}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext);

export default ThemeProvider;