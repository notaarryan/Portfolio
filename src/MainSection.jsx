import HeroSection from "./HeroSection";
import "./MainSection.css";

function MainSection({ setShowScrollButton }) {
  return (
    <main>
      <HeroSection setShowScrollButton={setShowScrollButton} />
    </main>
  );
}

export default MainSection;
