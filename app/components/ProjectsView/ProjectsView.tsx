import React from "react"
import { ProjectsViewWrapper } from "./ProjectsView.styles"
import { ProjectCard } from "~/components"

interface ProjectsViewProps {

}

export const ProjectsView: React.FC<ProjectsViewProps> = () => {
  return (
    <ProjectsViewWrapper>
      <p>
        I love tinkering with web technologies and creating useful things
        with them. Over my 5 year journey with web development, I've created
        many full-stack projects, some of which are listed below:
      </p>
      <ul>
        <ProjectCard
          name="Unnamed Writing App"
          techStack={["TypeScript", "Electron", "AWS & CouchDB"]}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eos eveniet nostrum veritatis. Aliquam, delectus dicta distinctio provident quam rem ut vero"
          imgSrc="https://picsum.photos/550/380"
        />
        <ProjectCard
          name="StreetZone"
          techStack={["React", "Firebase", "Algolia Search"]}
          description="A community for Streetwear enthusiasts. Including a marketplace, blog, in-app messaging, email & social authentication."
          imgSrc="https://picsum.photos/550/380"
        />
        <ProjectCard
          name="Vivaldi Thumbnail Generator"
          techStack={["React", "Styled-Components"]}
          description="Thumbnail image generator for the Vivaldi browser. Creates customisable images entirely on the client-side using logos selected by the user."
          imgSrc="https://picsum.photos/550/380"
        />
      </ul>
    </ProjectsViewWrapper>
  )
}
