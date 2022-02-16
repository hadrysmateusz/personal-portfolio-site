import React from "react"
import styled from "styled-components"

import { ProjectMarkdownAttributes } from "~/project"
import { ButtonContainer, ExternalLinkButton } from "~/components/LinkButton"
import { ImageGrid } from "~/components/ImageGrid"
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
          {attributes.liveLink ? (
            <ExternalLinkButton href={attributes.liveLink} variant="primary">
              Go to website
            </ExternalLinkButton>
          ) : null}
          {attributes.codeLink ? (
            <ExternalLinkButton href={attributes.codeLink}>
              View Code
            </ExternalLinkButton>
          ) : null}
        </ButtonContainer>
      </div>
      <ImageGrid sources={[mainImage]}>
        <ImageGrid.Image src={mainImage} alt="project preview" />
      </ImageGrid>
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
    margin-top: var(--spacing__100);
    font-size: var(--font_size__400);
    ${breakpoints.from.xs`font-size: var(--font_size__500);`}
    
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
`

const WipBadge = styled.span`
  color: var(--color__text_500);
`
