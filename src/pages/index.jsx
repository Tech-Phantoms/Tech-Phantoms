import React, { useState, useEffect } from "react";
import { LandingTop } from "../components/sections";
import LandingMiddle from "../components/sections/landing_middle";
import LandingBottom from "../components/sections/landing_bottom.js";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/themes/globalStyles";
import { lightTheme, darkTheme } from "../components/themes/Themes";
import  {useDarkMode} from "../components/themes/useDarkmode"
import Toggle from "../components/themes/Toggler"

const Index = (props) => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <LandingTop colorTheme={theme} />
        <LandingMiddle colorTheme={theme} />
        <LandingBottom colorTheme={theme} />
      </>
    </ThemeProvider>
  );
};

export default Index;
