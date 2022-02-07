import React from "react"
import { FaGithub, FaMediumM, FaTwitter } from "react-icons/fa"
import { PageHeaderWrapper } from "./PageHeader.styles"

interface PageHeaderProps {}

export const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <PageHeaderWrapper>
      <ul className="nav-group">
        <li>
          <a href="">Portfolio</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="name-container">
        <div className="name-inner">Mateusz Hadryś</div>
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
