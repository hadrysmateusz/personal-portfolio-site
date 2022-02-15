import React from "react"
import { PortfolioSectionWrapper } from "./PortfolioSection.styles"

interface PortfolioSectionProps {
  id: string
  name: string
  heading: string
  marginTop: string
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  id,
  name,
  heading,
  children,
  marginTop,
}) => {
  return (
    <PortfolioSectionWrapper marginTop={marginTop} id={id}>
      <div className="section-name">{name}</div>
      <h2 className="section-heading">{heading}</h2>
      <div className="content-container">{children}</div>
    </PortfolioSectionWrapper>
  )
}
