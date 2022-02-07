import React from "react"
import { PageContainerWrapper } from "./PageContainer.styles"

interface PageContainerProps {}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <PageContainerWrapper>
      <div className="inner-container">{children}</div>
    </PageContainerWrapper>
  )
}
