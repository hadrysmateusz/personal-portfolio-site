import styled, { keyframes } from "styled-components"

const bob = keyframes`
  from { transform: translateY(-10px) }
  to { transform: translateY(10px) }
`

export const ScrollIndicatorWrapper = styled.div`
  color: var(--color__accent);

  display: flex;
  justify-content: center;

  width: 100%;
  bottom: 0;
  position: absolute;
  z-index: 100;

  animation: ease alternate 0.9s infinite both ${bob};
  
  a {
    padding: var(--spacing__600);
  }
`
