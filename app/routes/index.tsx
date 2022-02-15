import { Hero, PageContainer, PageHeader, SkillsView } from "~/components"
import { PortfolioSection } from "~/components/PortfolioSection/PortfolioSection"
import { ProjectsView } from "~/components/ProjectsView/ProjectsView"
import { Footer } from "~/components/Footer/Footer"
import { PositionManager } from "~/components/PositionManager"
import { AboutView } from "~/components/AboutView/AboutView"
import { SideNav } from "~/components/SideNav"
import { CurrentSectionIndicator } from "~/components/CurrentSectionIndicator"

export default function Index() {
  return (
    <PositionManager>
      <PageHeader />
      <SideNav />
      <CurrentSectionIndicator />
      <PageContainer>
        <Hero />
        <PortfolioSection id="about" name="About" heading="Who am I?" marginTop="145px">
          <AboutView />
        </PortfolioSection>
        <PortfolioSection id="skills" name="Skills" heading="My Skills" marginTop="290px">
          <SkillsView />
        </PortfolioSection>
        <PortfolioSection
          id="projects"
          name="Projects"
          heading="Some of my Work"
          marginTop="360px"
        >
          <ProjectsView />
        </PortfolioSection>
      </PageContainer>
      <Footer />
    </PositionManager>
  )
}
