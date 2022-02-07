import React from "react"
import { ScrollIndicatorWrapper } from "./ScrollIndicator.styles"
import { FaChevronDown } from "react-icons/fa"

interface ScrollIndicatorProps {}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = () => {
  return (
    <ScrollIndicatorWrapper>
      <FaChevronDown />
    </ScrollIndicatorWrapper>
  )
}
