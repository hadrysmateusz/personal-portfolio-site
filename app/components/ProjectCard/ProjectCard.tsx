import React from "react"
import { ProjectCardWrapper } from "./ProjectCard.styles"
import { ButtonContainer, LinkButton } from "~/components/LinkButton"
import { Link } from "@remix-run/react"

interface ProjectCardProps {
  name: string
  slug: string
  techStack: string[]
  description: string
  imgSrc: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  slug,
  techStack,
  description,
  imgSrc,
}) => {
  return (
    <ProjectCardWrapper>
      <div className="meta-container">
        <h3 className="project-name">{name}</h3>
        <ul className="tech-stack">
          {techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <p className="project-description">{description}</p>
        <ButtonContainer>
          <LinkButton to={`/project/${slug}`} variant="primary">
            View Project
          </LinkButton>
        </ButtonContainer>
      </div>
      <Link to={`/project/${slug}`}>
        <img className="project-image" src={imgSrc} alt="" />
      </Link>
    </ProjectCardWrapper>
  )
}
