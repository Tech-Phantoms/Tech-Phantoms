import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";
// Importing Footers from footer component
import FooterContent from "./components/footer";

//footer component
const Footer = () => (
  <footer className="footer">
    <FooterContent />
  </footer>
);
//Component with App as class
const MainApp = () => {
  return (
    <div className="content">
      <App />
    </div>
  );
};
//Wrapping Parameter
const Wrapper = () => <MainApp />;

//function to wrap component with footer
const withFooter = (WrappedComponent) => () => [
  <WrappedComponent key="1" />,
  <Footer key="2" />,
];

//MainApp wrapped with footer
const WrapperWithFooter = withFooter(Wrapper);
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Router>
      <WrapperWithFooter />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
