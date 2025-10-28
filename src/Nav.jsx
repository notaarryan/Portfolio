import "./Nav.css";
import { useState } from "react";

function Nav({ setLightMode }) {
  let [lightingModeText, setLightingModeText] = useState("Dark Mode");
  const toggleLightingModeClasses = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("lightingMode", "dark");
      //   this.githubLogo.src =
      //     "https://img.icons8.com/?size=100&id=12598&format=png&color=FFFFFF";
      setLightingModeText("Light Mode");
      setLightMode("dark");
    } else {
      localStorage.setItem("lightingMode", "light");
      //   this.githubLogo.src =
      //     "https://img.icons8.com/?size=100&id=12598&format=png&color=000000";
      setLightingModeText("Dark Mode");
      setLightMode("light");
    }
  };

  return (
    <nav>
      <div className="title">
        <a
          href="https://notaarryan.github.io/Portfolio/"
          className="site-title"
        >
          Aryan Parmar
        </a>
      </div>

      <ul className="nav">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button
            id="toggleLightingModes"
            onClick={() => toggleLightingModeClasses()}
          >
            {lightingModeText}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
