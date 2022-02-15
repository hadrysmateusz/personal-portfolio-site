import React from "react"
import { FooterWrapper } from "./Footer.styles"

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterWrapper>
      <div className="spacer" />
      <div className="credit">
        Developed and designed by&nbsp;<b>Mateusz Hadryś</b>
      </div>
      <div className="contact">
        <a href="mailto:hadrys.mateusz86@gmail.com">
          hadrys.mateusz86@gmail.com
        </a>
      </div>
    </FooterWrapper>
  )
}
