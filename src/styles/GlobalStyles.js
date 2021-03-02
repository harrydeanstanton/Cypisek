import { createGlobalStyle } from 'styled-components';
import font from '../fonts/LuckiestGuy-Regular.woff2';

const GlobalStyle = createGlobalStyle`


  html {
      font-size: 10px
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    box-sizing: border-box;
  }
  @font-face {
      font-family: ManhattanHand;
      src: url(${font});
  }

  :root {
    --cypisYellow: #b4c26e;
    --cypisBrown: #be6e46;
    --cypisBlue: #3a5683;
    --cypisGreen: #44633f;
    --cypisLightBlue: #84bcda;
    --headerFont: ManhattanHand;
  }

  .active {
  color: var(--cypisLightBlue);
  };
`;

export default GlobalStyle;
