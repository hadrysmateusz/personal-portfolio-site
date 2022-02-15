import styled from "styled-components"
import { breakpoints } from "~/components/Breakpoints"
import { keyframeAnimations } from "~/components/GlobalStyles"

export const SideNavWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  
  text-align: right;

  display: none;
  ${breakpoints.from.xl`display:flex`}
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  pointer-events: none;

  animation: ease 0.9s both ${keyframeAnimations.reveal};

  ul {
    margin-right: var(--spacing__600);
    display: flex;
    flex-flow: column nowrap;
    gap: var(--spacing__400);
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
