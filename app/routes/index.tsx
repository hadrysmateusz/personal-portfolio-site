import {
  Hero,
  PageContainer,
  PageHeader,
  SkillsView,
} from "~/components"
import { PortfolioSection } from "~/components/PortfolioSection/PortfolioSection"
import { ProjectsView } from "~/components/ProjectsView/ProjectsView"
import { Footer } from "~/components/Footer/Footer"

export default function Index() {
  return (
    <div>
      <PageHeader />
      <PageContainer>
        <Hero />
        <PortfolioSection name="About" heading="Who am I?" marginTop="145px">
          <p>
            I'm a 22-year-old web developer from Poland. I'm very passionate
            about programming and design.
          </p>
          <p>
            I was introduced to web development in high school. It was the
            perfect way to combine both of my interests.
          </p>
          <p>
            I'm constantly learning more and experimenting with new technologies
          </p>
        </PortfolioSection>
        <PortfolioSection name="Skills" heading="My Skills" marginTop="290px">
          <SkillsView />
        </PortfolioSection>
        <PortfolioSection
          name="Projects"
          heading="Some of my Work"
          marginTop="360px"
        >
          <ProjectsView />
        </PortfolioSection>
      </PageContainer>
      <Footer />
    </div>
  )
}
