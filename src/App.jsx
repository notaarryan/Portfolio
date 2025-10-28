import { useEffect, useState } from "react";
import InteractiveDots from "./InteractiveDots";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [githubLogoSrc, setGithubLogoSrc] = useState(
    "https://img.icons8.com/?size=100&id=12598&format=png&color=000000"
  );
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem("lightingMode") || "light";
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", lightMode === "dark");
    if (lightMode === "dark") {
      setGithubLogoSrc(
        "https://img.icons8.com/?size=100&id=12598&format=png&color=FFFFFF"
      );
    }
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
      <InteractiveDots
        backgroundColor={lightMode == "light" ? "#ffffff" : "#0d0d1a"}
        dotColor={lightMode == "light" ? "#cccccc" : "#e0e0e0"}
        githubLogoSrc={githubLogoSrc}
        setLightMode={setLightMode}
        setGithubLogoSrc={setGithubLogoSrc}
        setShowScrollButton={setShowScrollButton}
      />
    </>
  );
}

export default App;
