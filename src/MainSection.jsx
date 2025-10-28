import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import "./MainSection.css";

function MainSection({ setShowScrollButton }) {
  return (
    <main>
      <HeroSection setShowScrollButton={setShowScrollButton} />
      <AboutSection />
    </main>
  );
}

export default MainSection;
