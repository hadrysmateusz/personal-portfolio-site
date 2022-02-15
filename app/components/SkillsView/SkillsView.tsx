import { GridList } from "~/components/GridList"
import { SkillsViewWrapper } from "./SkillsView.styles"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { usePositionManagerDispatch } from "~/components/PositionManager"

interface SkillsViewProps {}

export const SkillsView: React.FC<SkillsViewProps> = () => {
  const positionManagerDispatch = usePositionManagerDispatch()

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  })

  useEffect(() => {
    positionManagerDispatch({
      type: "set-visibility",
      section: "skills",
      value: inView,
    })
  }, [inView, positionManagerDispatch])

  return (
    <SkillsViewWrapper ref={ref}>
      <p>
        I've worked and experimented with various technologies and tools over
        the years. In addition to the base of <em>HTML</em>, <em>CSS</em> and{" "}
        <em>JavaScript</em>, my stack of choice is <em>React</em> with{" "}
        <em>TypeScript</em> and <em>Styled-Components</em>.
      </p>
      <GridList>
        <li>TypeScript</li>
        <li>Gatsby & Remix</li>
        <li>Electron</li>
        <li>Firebase</li>
        <li>AWS</li>
        <li>Git & GitHub</li>
        <li>Responsive Web Design</li>
        <li>REST & GraphQL</li>
        <li>CouchDB</li>
      </GridList>
      <p>
        While I specialise in front-end development, I also have experience with
        backend technologies and databases.
      </p>
    </SkillsViewWrapper>
  )
}
