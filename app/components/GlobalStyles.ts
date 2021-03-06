import { createGlobalStyle, keyframes } from "styled-components"
import { breakpoints } from "~/components/Breakpoints"
import { ValueWithUnit } from "~/components/ValueWithUnit"

export const PAGE_HEADER_HEIGHT = new ValueWithUnit(66, "px")
export const PAGE_CONTAINER_MAX_WIDTH = new ValueWithUnit(1100, "px")

const GlobalStyles = createGlobalStyle`
  :root {
      --font_size__400: 11px;
      --font_size__500: 14px; // base
      --font_size__600: 19px;
      --font_size__700: 24px;
      --font_size__800: 31px;
      --font_size__900: 38px;
    ${breakpoints.from.sm`
      --font_size__400: 13px;    
      --font_size__500: 16px; // base
      --font_size__600: 22px;
      --font_size__700: 28px;
      --font_size__800: 36px;
      --font_size__900: 56px;
    `}
    ${breakpoints.from.md`
      --font_size__400: 15px;    
      --font_size__500: 18px; // base
      --font_size__600: 24px;
      --font_size__700: 32px;
      --font_size__800: 46px;
      --font_size__900: 64px;
    `}
    ${breakpoints.from.lg`
      --font_size__400: 16px;    
      --font_size__500: 19px; // base
      --font_size__600: 25px;
      --font_size__700: 36px;
      --font_size__800: 50px;
      --font_size__900: 71px;
    `}
    ${breakpoints.from.xl`
      --font_size__400: 20px;    
      --font_size__500: 23px; // base
      --font_size__600: 30px;
      --font_size__700: 42px;
      --font_size__800: 61px;
      --font_size__900: 92px;
    `}

      --spacing__100: 5px;
      --spacing__200: 8px;
      --spacing__300: 11px;
      --spacing__400: 15px; 
      --spacing__500: 20px;
      --spacing__600: 30px;
      --spacing__700: 44px;
      --spacing__800: 60px;
      --spacing__900: 80px;
    ${breakpoints.from.md`
      --spacing__100: 6px;
      --spacing__200: 9px;
      --spacing__300: 12px;
      --spacing__400: 18px; 
      --spacing__500: 24px;
      --spacing__600: 32px;
      --spacing__700: 48px;
      --spacing__800: 72px;
      --spacing__900: 96px;
    `}
    ${breakpoints.from.xl`
      --spacing__100: 8px;
      --spacing__200: 12px;
      --spacing__300: 16px;
      --spacing__400: 24px; 
      --spacing__500: 32px;
      --spacing__600: 48px;
      --spacing__700: 60px;
      --spacing__800: 90px;
      --spacing__900: 120px;
    `}
    
    // TODO: switch to using new color scale and more accurate aliases
    --color__grayscale_100: #0E0D13;
    --color__grayscale_200: #16171B;
    --color__grayscale_300: #19181F;
    --color__grayscale_400: #484952;
    --color__grayscale_500: #83858E;
    --color__grayscale_600: #9A9CA5;
    --color__grayscale_700: #C2C4CD;
    --color__grayscale_800: red; // TODO: set
    --color__grayscale_900: #F6F6F6;
    
    --color__white: #ffffff;
    --color__accent: #ED355A;
    
    --color__background: var(--color__grayscale_100);
    --color__background_lighter: var(--color__grayscale_200);
    
    --color__text_100: var(--color__grayscale_300);
    --color__text_300: var(--color__grayscale_400);
    --color__text_500: var(--color__grayscale_500);
    --color__text_600: var(--color__grayscale_600);
    --color__text_700: var(--color__grayscale_700);

    --page_header_height: ${PAGE_HEADER_HEIGHT.toString()};
    --page_container_max_width: ${PAGE_CONTAINER_MAX_WIDTH.toString()}; 
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    font-size: var(--font_size__500);
    line-height: 1.6;
    
    background: var(--color__background);
    color: var(--color__white);
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

const reveal = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

export const keyframeAnimations = {
  reveal,
}

export default GlobalStyles
