import { createGlobalStyle } from 'styled-components';
import Color from '../constants/Color';

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}

  body {
    margin: 0;
    font-family: 'Karla', sans-serif;
    padding: 0;
    background-color: ${Color.WHITE}
  }

  h1 {
    font-family: 'Karla', sans-serif;
    font-size: 3rem;
}

a {
    text-decoration: none;
}

.hover {
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
}

`;

export default GlobalStyle;
