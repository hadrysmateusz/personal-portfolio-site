import React from "react"
import { FaGithub, FaMediumM, FaTwitter } from "react-icons/fa"
import { PageHeaderWrapper } from "./PageHeader.styles"
import { useScrollPosition } from "~/components/ScrollPositionProvider/ScrollPositionProvider"

interface PageHeaderProps {}

export const PageHeader: React.FC<PageHeaderProps> = () => {
  const scrollPosition = useScrollPosition()

  return (
    <PageHeaderWrapper>
      <ul className="nav-group">
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="https://hadrysmateusz.medium.com">Blog</a>
        </li>
        <li>
          <a href="mailto:hadrys.mateusz86@gmail.com">Contact</a>
        </li>
      </ul>
      <div className="name-container">
        {typeof scrollPosition === "number" && scrollPosition >= 390 ? (
          <div className="name-inner">Mateusz Hadryś</div>
        ) : null}
      </div>
      <ul className="nav-group">
        <li>
          <a href="https://github.com/hadrysmateusz">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://hadrysmateusz.medium.com">
            <FaMediumM />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/HadrysMateusz">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </PageHeaderWrapper>
  )
}
