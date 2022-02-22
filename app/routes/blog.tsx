import { LinksFunction, MetaFunction, Outlet } from "remix"
import styles from "highlight.js/styles/monokai.css"

import { PageContainer, PageHeader } from "~/components"
import { Footer } from "~/components/Footer/Footer"

export const meta: MetaFunction = () => {
  return { title: "Mateusz Hadryś - Blog" }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ]
}

export default function BlogIndex() {
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
