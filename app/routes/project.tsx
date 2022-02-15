import { Outlet } from "remix"

import { PageContainer, PageHeader } from "~/components"
import { Footer } from "~/components/Footer/Footer"

export default function ProjectIndex() {
  return (
    <>
      <PageHeader />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </>
  )
}
