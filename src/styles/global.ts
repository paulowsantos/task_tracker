import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

import backgroundimg from '../assets/background.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    background: no-repeat 70% top;
    background-color: ${darken(0.1, '#e8edf3')};
    background-image: url(${backgroundimg}),
    linear-gradient(180deg, #fff 20%, ${darken(0.1, '#e8edf3')});
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Heebo, sans-serif;
  }

  #root {
    height: 100%;
    max-width: 80%;
    margin: 0 auto;
    padding: 40px 20px 0px;
    @media (max-width: 1080px) {
      max-width: 100%;
    }
  }

  button {
    cursor: pointer;
  }
`;
