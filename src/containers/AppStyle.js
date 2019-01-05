import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    --brown: #882323;
    --dark-gray: #2b303a;
    --light-gray: #bac1b8;
    --blue: #00788c;
    --green: #4e9b1b;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    min-height: 300px;
    min-width: 300px;
    font-family: Candara, sans-serif;
    font-size: 16px;
    font-weight: lighter;
    background-color: var(--dark-gray);
    color: var(--light-gray);
  }
  #root {
    display: flex;
    padding: 16px;
  }
`;

export default GlobalStyle;