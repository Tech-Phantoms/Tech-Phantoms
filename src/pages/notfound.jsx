import React from "react";
import PageNotFound from "../components/NotFound/404.jsx";
import { GlobalStyles } from "../components/themes/globalStyles";
import ThemeProvider from "../components/themes"

const NotFound = (props) => (
  <ThemeProvider>
    <>
      <GlobalStyles />     
      <PageNotFound />
      
    </>
  </ThemeProvider>
);

export default NotFound;
