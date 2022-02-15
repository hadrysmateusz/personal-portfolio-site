import styled from "styled-components"
import { breakpoints } from "~/components/Breakpoints"

export const PageContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  padding-top: var(--page_header_height);

  .inner-container {
    padding: var(--spacing__400);

    ${breakpoints.from.xs`max-width: 600px;`}
    ${breakpoints.from.sm`max-width: 720px;`}
    ${breakpoints.from.md`max-width: 840px;`}
    ${breakpoints.from.lg`max-width: 960px;`}
    ${breakpoints.from.xl`max-width: 1100px;`}
  }

  img {
    display: block;
    max-width: 100%;
  }
`
