import { createGlobalStyle } from 'styled-components';

import { colors } from '../../utils/colors';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    position: relative;
  }

  html,
  body {
    width: 100%;
  }

  body {
    background-color: ${colors.darkbrown}
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, li, ul, a {
    margin: 0;
    padding: 0;
    font-family: "Raleway", sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

`;