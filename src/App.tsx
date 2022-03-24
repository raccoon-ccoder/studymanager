import React from 'react';
import Router from './Router';
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
