import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './theme'


ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
