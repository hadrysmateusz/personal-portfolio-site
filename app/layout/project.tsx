import React from "react"
import styled from "styled-components"

import { ProjectMarkdownAttributes } from "~/project"
import { ButtonContainer, LinkButton } from "~/components/LinkButton"
import { breakpoints } from "~/components/Breakpoints"

export const ProjectLayout = ({
  children,
  attributes,
  mainImage,
}: {
  children: React.ReactNode
  attributes: ProjectMarkdownAttributes
  mainImage: string
}) => {
  console.log("ProjectLayout attributes", attributes)
  return (
    <ProjectLayoutWrapper>
      <div className="meta-container">
        <h1>
          {attributes.name}
          {attributes.workInProgress ? <WipBadge>&nbsp;[WIP]</WipBadge> : null}
        </h1>
        <ul className="info-list">
          <li>{attributes.projectType}</li>
          <li>{attributes.role}</li>
          <li>{attributes.year}</li>
        </ul>
        <p className="short-description">{attributes.shortDescription}</p>
        <ButtonContainer>
          {/* TODO: Use a button that's a regular a tag and not internal link */}
          {attributes.liveLink ? (
            <LinkButton to={attributes.liveLink} variant="primary">
              Go to website
            </LinkButton>
          ) : null}
          {attributes.codeLink ? (
            <LinkButton to={attributes.codeLink}>View Code</LinkButton>
          ) : null}
        </ButtonContainer>
      </div>
      <img src={mainImage} alt="project preview" />
      <main>{children}</main>
    </ProjectLayoutWrapper>
  )
}

const ProjectLayoutWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 0;

  .meta-container {
    margin: var(--spacing__800) 0 var(--spacing__900);

    h1 {
      font-size: var(--font_size__800);
      font-weight: 700;
      margin: 0;
    }
  }

  .info-list {
    li {
      display: inline-block;
      color: var(--color__text_700);

      &:not(&:first-child)::before {
        display: inline;
        content: "•";
        color: var(--color__text_300);
        padding: var(--spacing__200);
      }
    }
  }

  .short-description {
    color: var(--color__text_500);
  }

  .mobile-mockup-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing__500);
    margin-top: var(--spacing__800);
  }

  .desktop-mockup-grid {
    display: grid;
    gap: var(--spacing__300);
    padding-top: var(--spacing__700);

    &:not(&.single-column) {
      ${breakpoints.from.xs`grid-template-columns: repeat(2, 1fr);`}
      ${breakpoints.from.xl`margin: 0 -160px;`}
    }
  }
`

const WipBadge = styled.span`
  color: var(--color__text_500);
`
