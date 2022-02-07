import React from "react"
import { ProjectCardWrapper } from "./ProjectCard.styles"
import { ButtonContainer, LinkButton } from "~/components/LinkButton"

interface ProjectCardProps {
  name: string
  techStack: string[]
  description: string
  imgSrc: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  techStack,
  description,
  imgSrc,
}) => {
  return (
    <ProjectCardWrapper>
      <div className="meta-container">
        <h3>{name}</h3>
        <ul className="tech-stack">
          {techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <p>{description}</p>
        <ButtonContainer>
          <LinkButton to="/" variant="primary">
            View Project
          </LinkButton>
        </ButtonContainer>
      </div>
      <img src={imgSrc} alt="" />
    </ProjectCardWrapper>
  )
}
