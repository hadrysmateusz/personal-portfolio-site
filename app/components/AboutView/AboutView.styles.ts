import styled from "styled-components"
import { breakpoints } from "~/components/Breakpoints"

export const AboutViewWrapper = styled.div`
  ${breakpoints.from.sm`  
  column-count: 2;
  column-gap: var(--spacing__600);
  max-height: 580px;
  `}

  text-align: justify;
  font-size: var(--font_size__500);

  b {
    font-weight: 600;
    color: var(--color__text_700);
  }

  p {
    margin: 0 0 var(--spacing__300) 0;
  }
`
