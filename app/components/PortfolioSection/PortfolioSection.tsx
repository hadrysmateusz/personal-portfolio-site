import React from "react"
import { PortfolioSectionWrapper } from "./PortfolioSection.styles"

interface PortfolioSectionProps {
  name: string
  heading: string
  marginTop: string
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  name,
  heading,
  children,marginTop
}) => {
  return (
    <PortfolioSectionWrapper marginTop={marginTop}>
      <div className="section-name">{name}</div>
      <h2 className="section-heading">{heading}</h2>
      <div className="content-container">{children}</div>
    </PortfolioSectionWrapper>
  )
}
