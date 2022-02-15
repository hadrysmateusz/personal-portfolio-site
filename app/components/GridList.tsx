import styled from "styled-components"
import { breakpoints } from "~/components/Breakpoints"

export const GridList = styled.ul`
  margin: var(--spacing__600) 0;

  display: grid;

  grid-template-columns: 1fr;

  ${breakpoints.from.xs`
    grid-template-columns: repeat(2, 1fr);
    `}

  ${breakpoints.from.md`
    grid-template-columns: repeat(3, 1fr);
    `}

  gap: var(--spacing__500) var(--spacing__700);
  justify-content: space-between;

  li {
    list-style: disc inside;
    white-space: nowrap;
    width: auto;

    font-weight: 700;
    color: var(--color__text_700);

    &::marker {
      color: var(--color__accent);
    }
  }
`
