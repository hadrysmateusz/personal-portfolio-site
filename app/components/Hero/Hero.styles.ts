import styled from "styled-components"

export const HeroWrapper = styled.div`
  width: 100%;
  
  .hero-content-wrapper {
    height: calc(100vh - var(--page_header_height));
    
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    
    position:relative;
  }

  h1.name {
    font-size: var(--font_size__900);
    font-weight: 800;
    color: #ffffff;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    
    margin: 0;
  }

  .subheading {
    font-size: var(--font_size__700);
    font-weight: 600;
    color: var(--color__accent);
  }

  .short-about {
    max-width: 530px;
    color: var(--color__text_500);
    margin-bottom: 40px;

    strong {
      color: var(--color__text_600);
    }
  }
`

export const SideNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  
  pointer-events: none;
  
  ul {
    margin-right: 55px;
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
  }
  
  li {
    pointer-events: all;
    cursor: pointer;
    
    font-size: var(--font_size__400);
    font-weight: 600;
    text-transform: uppercase;
    
    color: var(--color__text_300);
    &.active {
      color: white;
    }
  }
`
