import styled, { css } from "styled-components"
import { breakpoints } from "~/components/Breakpoints"

import { IWithLayoutType, LayoutType } from "./types"

const layoutStyles = (props: IWithLayoutType) => {
  switch (props.layoutType) {
    case "one-column":
      return css``
    case "two-column":
      return css`
        ${breakpoints.from.xs`
          grid-template-columns: repeat(2, 1fr);
          // gap: var(--spacing__300);
        `}
        ${breakpoints.from.xl`margin: 0 -160px;`}
      `
    case "three-column":
      return css`
        grid-template-columns: repeat(3, 1fr);
        gap: var(--spacing__500);
        //margin-top: var(--spacing__800);
      `
  }
}

export const ImageGridWrapper = styled.div<{
  layoutType: LayoutType
}>`
  display: grid;
  gap: var(--spacing__400);
  margin-top: var(--spacing__700);
  
  img {
    cursor: zoom-in;
  }

  ${layoutStyles};
`
