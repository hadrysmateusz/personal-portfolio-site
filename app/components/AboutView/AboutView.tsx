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

  return (
    <AboutViewWrapper ref={ref}>
      <p>
        Hi! I'm Mateusz. A passionate web developer from Poland. I'm 22, but I
        first started programming in my early teens.
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
        I didn't write a single line of code again until <b>high school</b>,
        where one of my subjects was web development. I was frustrated with how
        simple the websites we made at school were, so I decided to learn more
        on my own. I got to test my skills of <b>HTML</b>, <b>CSS</b>,{" "}
        <b>PHP</b> and <b>jQuery</b> at an <b>internship in Spain</b>, where I
        built a <b>database management app</b> for employees.
      </p>
      <p>
        Since then I've been learning everything I could about different web
        development technologies, and eventually found <b>React</b>. It felt so
        much more natural than PHP to me. I was hooked.
      </p>
    </AboutViewWrapper>
  )
}
