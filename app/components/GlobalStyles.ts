import { createGlobalStyle } from "styled-components"

export const PAGE_HEADER_HEIGHT = {
  value: 66,
  unit: "px",
  toString() {
    return `${this.value}${this.unit}`
  },
} as const

const GlobalStyles = createGlobalStyle`
  :root {
    --font_size__400: 20px;    
    --font_size__500: 23px; // base
    --font_size__600: 30px;
    --font_size__700: 42px;
    --font_size__900: 92px;

    --color__background: #0E0D13;
    --color__accent: #ED355A;
    --color__text_300: #484952;
    --color__text_500: #83858E;
    --color__text_600: #9A9CA5;
    --color__text_700: #C2C4CD;
    --color__text_900: #FFFFFF;

    --page_header_height: ${PAGE_HEADER_HEIGHT.toString()};
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    font-size: var(--font_size__500);
    line-height: 1.5;
    
    background: var(--color__background);
    color: #ffffff;
  }
  
  // Reset list styles
  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  a, a:visited, a:any-link {
    color:inherit;
    text-decoration: none;
  }
`

export default GlobalStyles
