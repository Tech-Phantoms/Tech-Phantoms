import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

