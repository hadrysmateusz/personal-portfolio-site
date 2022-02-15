import React from "react"
import { ScrollIndicatorWrapper } from "./ScrollIndicator.styles"
import { FaChevronDown } from "react-icons/fa"
import { Link } from "react-router-dom"

interface ScrollIndicatorProps {
  linkTo: string
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({linkTo}) => {
  // TODO: replace link with smooth scroll to ref (or getElementById)
  return (
    <ScrollIndicatorWrapper>
      <Link to={linkTo}>
        <FaChevronDown />
      </Link>
    </ScrollIndicatorWrapper>
  )
}
