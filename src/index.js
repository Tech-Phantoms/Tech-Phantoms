import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core'
import "./index.css";
import FooterContent from './components/footer'

const Footer = () => (
  <footer className="footer">
     <FooterContent/>
  </footer>
);

const MainApp=()=>{
  return(
 
        <ThemeProvider theme={theme} >
        <CSSReset />
        <Router>
        <div className="content">
          <App />
          </div>
        </Router>
        </ThemeProvider>

  )
}
const store = createStore(() => [], {}, console.log('reduxDUMMYStore for Rider Provider'));
const Wrapper = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);
const withFooter = (WrappedComponent) => () => [
  <WrappedComponent key="1" />,
  <Footer key="2" />
];
const WrapperWithFooter = withFooter(Wrapper);
ReactDOM.render(
  <WrapperWithFooter />,
  document.getElementById('root')
);














