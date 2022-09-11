import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  colors:{
    primary: "lime",
    secondary: "fuchsia"
  },
  media:{
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px)"
  }
}

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Global/>
    <App />
  </ThemeProvider>
);

