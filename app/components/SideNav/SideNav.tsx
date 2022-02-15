import React from "react"
import { Link } from "@remix-run/react"

import { usePositionManagerState } from "~/components/PositionManager"
import { SideNavWrapper } from "./SideNav.styles"

export const SideNav = () => {
  const { currentSection } = usePositionManagerState()

  return currentSection !== undefined ? (
    <SideNavWrapper>
      <ul>
        <li className={currentSection === "about" ? "active" : "inactive"}>
          <Link to="#about">About</Link>
        </li>
        <li className={currentSection === "skills" ? "active" : "inactive"}>
          <Link to="#skills">Skills</Link>
        </li>
        <li className={currentSection === "projects" ? "active" : "inactive"}>
          <Link to="#projects">Projects</Link>
        </li>
        {/*<li className={visibility.contact ? "active" : "inactive"}>*/}
        {/*  <a href="">Contact</a>*/}
        {/*</li>*/}
      </ul>
    </SideNavWrapper>
  ) : null
}
