import React from "react"
import { HeroWrapper } from "./Hero.styles"
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
          specialise in creating web applications with <strong>React</strong> & <strong>TypeScript</strong>
        </p>
        <ButtonContainer>
          <LinkButton to="#projects" variant="primary">
            My Projects
          </LinkButton>
          <LinkButton to="#about" variant="secondary">
            About Me
          </LinkButton>
        </ButtonContainer>
        <ScrollIndicator linkTo="#about"/>
      </div>
    </HeroWrapper>
  )
}
