import React from "react"
import { SkillsViewWrapper } from "./SkillsView.styles"

interface SkillsViewProps {}

export const SkillsView: React.FC<SkillsViewProps> = () => {
  return (
    <SkillsViewWrapper>
      <p>
        I've worked and experimented with various technologies and tools over
        the years. In addition to the base of <em>HTML</em>, <em>CSS</em> and{" "}
        <em>JavaScript</em>, my stack of choice is <em>React</em> with{" "}
        <em>TypeScript</em> and <em>Styled-Components</em>.
      </p>
      <ul className="skills-list">
        <li>TypeScript</li>
        <li>Gatsby & Remix</li>
        <li>Electron</li>
        <li>Firebase</li>
        <li>AWS</li>
        <li>Git & GitHub</li>
        <li>Responsive Web Design</li>
        <li>REST & GraphQL</li>
        <li>CouchDB</li>
      </ul>
      <p>
        While I specialise in front-end development, I also have experience with
        backend technologies and databases.
      </p>
    </SkillsViewWrapper>
  )
}
