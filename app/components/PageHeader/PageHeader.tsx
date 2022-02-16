import React from "react"
import { FaGithub, FaMediumM, FaTwitter } from "react-icons/fa"
import { PageHeaderWrapper } from "./PageHeader.styles"
import { useScrollPosition } from "~/components/ScrollPositionProvider/ScrollPositionProvider"
import { Link } from "@remix-run/react"

interface PageHeaderProps {}

export const PageHeader: React.FC<PageHeaderProps> = () => {
  const scrollPosition = useScrollPosition()

  return (
    <PageHeaderWrapper>
      <ul className="nav-group">
        <li>
          <Link to="/">Portfolio</Link>
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
          <Link to="/">
            <div className="name-inner">Mateusz Hadryś</div>
          </Link>
        ) : null}
      </div>
      <ul className="nav-group">
        <li className="icon-nav-item">
          <a href="https://github.com/hadrysmateusz">
            <FaGithub />
          </a>
        </li>
        <li className="icon-nav-item">
          <a href="https://hadrysmateusz.medium.com">
            <FaMediumM />
          </a>
        </li>
        <li className="icon-nav-item">
          <a href="https://twitter.com/HadrysMateusz">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </PageHeaderWrapper>
  )
}
