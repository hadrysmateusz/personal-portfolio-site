import styled from "styled-components"
import { breakpoints } from "~/components/Breakpoints"

export const ProjectCardWrapper = styled.li`
  color: var(--color__text_500);
  overflow: hidden;
  font-size: var(--font_size__400);
  
  .project-description {
    margin-top: var(--spacing__400);
    margin-bottom: var(--spacing__500);
  }

  h3.project-name {
    color: var(--color__white);
    font-size: var(--font_size__600);
    font-weight: bold;

    margin-top: var(--spacing__200);
    margin-bottom: var(--spacing__400);
  }

  .tech-stack {
    display: flex;
    flex-flow: row wrap;
    gap: 0;

    li {
      display: inline-block;
      color: var(--color__text_600);
      font-size: var(--font_size__400);
      font-weight: bold;
      text-transform: uppercase;

      &:not(&:first-child)::before {
        display: inline;
        content: "•";
        color: var(--color__text_300);
        padding: var(--spacing__200);
      }
    }
  }

  @media (max-width: ${breakpoints.sm.value - 1 + breakpoints.sm.unit}) {
    display: grid;
    width: 100%;

    grid-template-areas:
      "image"
      "meta";

    .meta-container {
      grid-area: meta;
    }

    .project-description {
      font-size: var(--font_size__500);
    }

    img.project-image {
      object-fit: cover;
      display: block;
      width: 100%;

      height: 240px;
      grid-area: image;
      border-radius: 8px;
      margin-bottom: var(--spacing__400);
    }
  }

  @media (min-width: ${breakpoints.sm.toString()}) {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);

    background: var(--color__background_lighter);
    border-radius: 14px;

    img.project-image {
      object-fit: cover;
      display: block;
      width: 100%;

      height: 100%;
    }

    .meta-container {
      padding: var(--spacing__500) var(--spacing__400) var(--spacing__500)
        var(--spacing__500);
    }
  }
`
