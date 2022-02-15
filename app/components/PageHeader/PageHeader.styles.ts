import styled from "styled-components"
import { breakpoints } from "~/components/Breakpoints"
import { keyframeAnimations } from "~/components/GlobalStyles"

export const PageHeaderWrapper = styled.nav`
  width: 100%;
  height: var(--page_header_height);
  padding: 0 var(--spacing__500);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;

  border-top: 2px solid var(--color__accent);
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.3);

  background: var(--color__background);
  color: #ffffff;
  font-size: var(--font_size__400);
  font-weight: 600;
  text-transform: uppercase;

  ul.nav-group {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: var(--spacing__500);

    li {
      display: flex;
      align-items: center;

      cursor: pointer;
    }
  }

  .name-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    display: none;
    ${breakpoints.from.sm`display: flex;`}
    align-items: center;
    justify-content: center;

    font-weight: 900;

    pointer-events: none;

    .name-inner {
      animation: ease 0.9s both ${keyframeAnimations.reveal};

      pointer-events: all;
    }
  }
`
