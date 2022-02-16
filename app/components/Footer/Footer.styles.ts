import styled from "styled-components"
import { breakpoints } from "~/components/Breakpoints"

export const FooterWrapper = styled.footer`
  margin-top: 150px;
  width: 100%;
  height: var(--page_header_height);
  padding: 0 var(--spacing__500);

  white-space: nowrap;
  background: var(--color__text_100);
  font-size: var(--font_size__400);

  display: grid;

  grid-template-columns: repeat(1, 1fr);
  ${breakpoints.from.xs`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${breakpoints.from.md`
    grid-template-columns: repeat(3, 1fr);
  `}

  .spacer {
    display: none;
    ${breakpoints.from.md`display: flex;`}
  }

  .credit {
    display: none;
    ${breakpoints.from.xs`display: flex;`}

    justify-content: flex-start;
    ${breakpoints.from.md`justify-content: center;`}
  }

  .contact {
    justify-content: flex-start;
    ${breakpoints.from.xs`justify-content: flex-end;`}
  }

  > * {
    display: flex;
    align-items: center;
    justify-content: center;

    a,
    a:visited {
      color: var(--color__text_700);
      :hover,
      :active {
        color: var(--color__white);
      }
    }
  }
`
