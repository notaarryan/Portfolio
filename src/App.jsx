import { useEffect, useState } from "react";
import Nav from "./Nav";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem("lightingMode") || "light";
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
      // this.removeCardsOnScroll();
      // this.rotateCards();
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", lightMode === "dark");
    localStorage.setItem("lightingMode", lightMode);

    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 10);

    document.body.classList.add("loaded");
  }, [lightMode]);

  return (
    <>
      {showScrollButton && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
      <Nav setLightMode={setLightMode} />
    </>
  );
}

export default App;
