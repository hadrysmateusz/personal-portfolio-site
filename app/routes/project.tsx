import { MetaFunction, Outlet } from "remix"

import { PageContainer, PageHeader } from "~/components"
import { Footer } from "~/components/Footer/Footer"

export const meta: MetaFunction = () => {
  return { title: "Mateusz Hadryś - Project Case Study" }
}

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
