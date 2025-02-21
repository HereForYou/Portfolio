import AboutSection from "@/components/sections/AboutSection"
import ContactSection from "@/components/sections/ContactSection"
import HeroSection from "@/components/sections/HeroSection"
// import MouseSection from "@/components/sections/MouseSection"
import ProjectSection from "@/components/sections/ProjectSection"
import SkillsSection from "@/components/sections/SkillsSection"
import Mouse from "@/components/ui/mouse"

export default function Home() {
  return (
    <main id="main">
      <Mouse />
      {/* <MouseSection /> */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}
