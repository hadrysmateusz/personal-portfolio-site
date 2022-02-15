import { Link } from "@remix-run/react"
import styled, { css } from "styled-components"

interface LinkButtonProps {
  variant?: "secondary" | "primary"
}

const variant = (props: LinkButtonProps) => {
  switch (props.variant) {
    case "primary":
      return css`
        background: var(--color__accent);
        color: var(--color__text_900);
        border: 2.5px solid var(--color__accent);
      `
    case "secondary":
      return css`
        background: transparent;
        color: var(--color__text_600);
        border: 2.5px solid var(--color__text_500);
      `
  }
}

export const LinkButton = styled(Link)<LinkButtonProps>`
  display: block;
  font-size: var(--font_size__400);
  font-weight: 700;
  padding: var(--spacing__200) var(--spacing__500);
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;

  // use pseudo-classes to increase specificity to compete with global link defaults
  &,
  &:visited,
  &:any-link {
    ${variant};
  }
`

export const ButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  gap: var(--spacing__500);
`

LinkButton.defaultProps = { variant: "secondary" }
