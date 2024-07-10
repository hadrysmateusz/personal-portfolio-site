import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { usePositionManagerDispatch } from "~/components/PositionManager"
import { AboutViewWrapper } from "./AboutView.styles"

interface SkillsViewProps {}

export const AboutView: React.FC<SkillsViewProps> = () => {
  const positionManagerDispatch = usePositionManagerDispatch()

  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    positionManagerDispatch({
      type: "set-visibility",
      section: "about",
      value: inView,
    })
  }, [inView, positionManagerDispatch])

  const age = new Date().getFullYear() - 1999

  return (
    <AboutViewWrapper ref={ref}>
      <p>
        Hi! I'm Mateusz. A passionate web developer from Poland. I'm {age}, but
        I first started programming in my early teens.
      </p>
      <p>
        I loved playing video games and eventually wanted to <b>make</b> them
        too. I saved some money and bought a book about <b>Java</b> programming
        and wrote some command line programs, including a simple{" "}
        <b>text adventure game</b>. Eventually I moved on to learning the{" "}
        <b>Unity game engine</b>, but while trying to make a soundtrack for my
        game, I fell in love with making music.
      </p>
      <p>
        When I got to high school, one of my subjects was web development. I was
        frustrated with how simple the websites we made at school were, so I
        decided to learn more on my own.{" "}
      </p>
      <p>
        I got to test my first taste of real development work at an{" "}
        <b>internship in Spain</b>, where I built a{" "}
        <b>database management app</b> for employees.
      </p>
      <p>
        Since then I've been honing my skills with various web development
        technologies. I especially love working with <b>React</b> and{" "}
        <b>TypeScript</b>
      </p>
    </AboutViewWrapper>
  )
}
