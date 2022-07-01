import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #F0F4F5;
    font-family: "Baloo 2", Helvetica, Sans-Serif;
  }

  p {
    color: #3B6779;
    font-weight: 400;
    font-size: 1rem;
  }

  .greenLabel {
    color: #63D391;
    font-weight: bold;
    font-size: 1.125rem;
  }
`;

export default GlobalStyle;
