import React, { useEffect } from "react"
import { ProjectsViewWrapper } from "./ProjectsView.styles"
import { ProjectCard } from "~/components"
import { usePositionManagerDispatch } from "~/components/PositionManager"
import { useInView } from "react-intersection-observer"

import writingApp1 from "~/assets/writing-app/writing-app-card.png"
import streetzone1 from "~/assets/streetzone/streetzone-card.png"

interface ProjectsViewProps {}

export const ProjectsView: React.FC<ProjectsViewProps> = () => {
  const positionManagerDispatch = usePositionManagerDispatch()

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.15,
  })

  useEffect(() => {
    positionManagerDispatch({
      type: "set-visibility",
      section: "projects",
      value: inView,
    })
  }, [inView, positionManagerDispatch])

  return (
    <ProjectsViewWrapper ref={ref}>
      <p>
        I love tinkering with web technologies and creating useful things with
        them. Over my 5 year journey with web development, I've created several
        full-stack projects, some of which are listed below:
      </p>
      <ul className="projects-list">
        <ProjectCard
          name="Unnamed Writing App"
          slug="writing-app"
          techStack={["TypeScript", "Electron", "AWS & CouchDB"]}
          description="Rich-text editor with full offline support and cloud-syncing as well as local file editing functionality. Built with electron."
          imgSrc={writingApp1}
        />
        <ProjectCard
          name="StreetZone"
          slug="streetzone"
          techStack={["React", "Firebase", "Algolia Search"]}
          description="A community for Streetwear enthusiasts. Including a marketplace, blog, in-app messaging, email & social authentication."
          imgSrc={streetzone1}
        />
        {/*<ProjectCard*/}
        {/*  name="Vivaldi Thumbnail Generator"*/}
        {/*  techStack={["React", "Styled-Components"]}*/}
        {/*  description="Thumbnail image generator for the Vivaldi browser. Creates customisable images entirely on the client-side using logos selected by the user."*/}
        {/*  imgSrc="https://picsum.photos/550/380"*/}
        {/*/>*/}
      </ul>
      <p>
        Smaller projects like this portfolio site and more can be found on my{" "}
        <a href={"https://github.com/hadrysmateusz"}>GitHub</a>.
      </p>
    </ProjectsViewWrapper>
  )
}
