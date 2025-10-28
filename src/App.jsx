import { useEffect, useState } from "react";
import Nav from "./Nav";
import MainSection from "./MainSection";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem("lightingMode") || "light";
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

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
      <MainSection setShowScrollButton={setShowScrollButton} />
    </>
  );
}

export default App;
