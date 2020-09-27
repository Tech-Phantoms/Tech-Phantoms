import React from "react";
import { LandingTop } from "../components/sections";
import LandingMiddle from "../components/sections/landing_middle";
import LandingBottom from "../components/sections/landing_bottom.js";
import { GlobalStyles } from "../components/themes/globalStyles";
import ThemeProvider from "../components/themes"
import Toggle from "../components/themes/Toggler"

const Index = (props) => (
  <ThemeProvider>
    <>
      <GlobalStyles />
      <Toggle />
      <LandingTop/>
      <LandingMiddle/>
      <LandingBottom/>
    </>
  </ThemeProvider>
);

export default Index;
