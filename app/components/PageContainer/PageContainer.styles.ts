import styled from "styled-components"

export const PageContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  
  padding-top: var(--page_header_height);

  .inner-container {
    max-width: 1100px;
  }
`
