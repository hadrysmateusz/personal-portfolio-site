import styled from "styled-components"

export const HeroWrapper = styled.div`
  width: 100%;

  text-align: center;

  margin-top: calc(-1 * var(--spacing__300));

  .hero-content-wrapper {
    height: calc(100vh - var(--page_header_height));

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    position: relative;
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
    margin-bottom: var(--spacing__500);

    strong {
      color: var(--color__text_600);
    }
  }
`
