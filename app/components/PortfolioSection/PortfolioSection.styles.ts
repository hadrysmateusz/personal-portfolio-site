import styled from "styled-components"

export const PortfolioSectionWrapper = styled.section<{ marginTop: string }>`
  margin-top: ${(p) => p.marginTop};

  .section-name {
    font-size: var(--font_size__400);
    font-weight: 600;
    color: var(--color__accent);
    text-transform: uppercase;
  }
  h2.section-heading {
    font-size: var(--font_size__700);
    font-weight: 700;

    margin-top: 13px;
    margin-bottom: 26px;
  }

  .content-container {
    color: var(--color__text_500);
  }
`
