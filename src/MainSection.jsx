import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import "./MainSection.css";

function MainSection({ setShowScrollButton }) {
  return (
    <main>
      <HeroSection setShowScrollButton={setShowScrollButton} />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}

export default MainSection;
