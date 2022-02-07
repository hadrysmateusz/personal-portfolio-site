import React from "react"
import { HeroWrapper, SideNav } from "./Hero.styles"
import { ScrollIndicator } from "~/components"
import { ButtonContainer, LinkButton } from "~/components/LinkButton"

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <HeroWrapper>
      <div className="hero-content-wrapper">
        <h1 className="name">Mateusz Hadryś</h1>
        <div className="subheading">Frontend Web Developer</div>
        <p className="short-about">
          I'm a passionate <strong>web developer</strong> from Poland. I
          specialise in creating web applications with <strong>React.js</strong>
        </p>
        <ButtonContainer>
          <LinkButton to="/" variant="primary">
            My Projects
          </LinkButton>
          <LinkButton to="/" variant="secondary">
            About Me
          </LinkButton>
        </ButtonContainer>
        <ScrollIndicator />
      </div>
      <SideNav>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li className="active">
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </SideNav>
    </HeroWrapper>
  )
}
