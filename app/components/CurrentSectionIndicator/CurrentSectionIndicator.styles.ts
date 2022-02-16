import styled from "styled-components"
import { breakpoints } from "~/components/Breakpoints"
import { keyframeAnimations } from "~/components/GlobalStyles"

export const CurrentSectionIndicatorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;

  display: none;
  ${breakpoints.from.xl`display:flex;`}
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  pointer-events: none;

  color: var(--color__text_100);

  font-size: 120px;
  font-weight: 700;
  text-transform: capitalize;
  writing-mode: vertical-lr;

  animation: ease 0.9s both ${keyframeAnimations.reveal};

  --page_horizontal_margin: calc(100vw - var(--page_container_max_width));

  width: calc(var(--page_horizontal_margin) / 2);

  div {
    transform: rotate(180deg)
      translate(0, calc(var(--page_header_height) / 2 * -1));
  }
`
