import { useEffect, useRef } from "react";
import "./ProjectSection.css";

function ProjectsSection() {
  const projectsContainerRef = useRef(null);

  useEffect(() => {
    Array.from(
      projectsContainerRef.current.querySelectorAll("div.project-cards")
    ).forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (x - centerX) / 30;
        const moveY = (y - centerY) / 30;
        card.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`;
        card.style.boxShadow = `0 0 10px var(--shadow-color)`;
        card.style.zIndex = 10;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1) translate(0, 0)";
        card.style.boxShadow = ``;
        card.style.zIndex = 1;
      });
    });
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2 className="title reveal-on-scroll">Projects</h2>

      <div
        className="projects-container reveal-content-on-scroll"
        ref={projectsContainerRef}
      >
        <div className="project-cards">
          <a
            href="https://github.com/notaarryan/Knight-Travails"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://gh-card.dev/repos/notaarryan/Knight-Travails.svg"
              alt="github-repo"
            />
          </a>
        </div>
        <div className="project-cards">
          <a
            href="https://github.com/notaarryan/Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://gh-card.dev/repos/notaarryan/Weather-App.svg"
              alt="github-repo"
            />
          </a>
        </div>
        <div className="project-cards">
          <a
            href="https://github.com/notaarryan/calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://gh-card.dev/repos/notaarryan/calculator.svg"
              alt="github-repo"
            />
          </a>
        </div>
        <div className="project-cards">
          <a
            href="https://github.com/notaarryan/Library"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://gh-card.dev/repos/notaarryan/Library.svg"
              alt="github-repo"
            />
          </a>
        </div>
        <div className="project-cards">
          <a
            href="https://github.com/notaarryan/etch-a-sketch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://gh-card.dev/repos/notaarryan/etch-a-sketch.svg"
              alt="github-repo"
            />
          </a>
        </div>
        <div className="project-cards">
          <a
            href="https://github.com/notaarryan/Restaurant-Page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://gh-card.dev/repos/notaarryan/Restaurant-Page.svg"
              alt="github-repo"
            />
          </a>
        </div>
        <div className="project-cards ">
          <a
            href="https://github.com/notaarryan/Student-Grading-System"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://gh-card.dev/repos/notaarryan/Student-Grading-System.svg"
              alt="github-repo"
            />
          </a>
        </div>
        <div className="project-cards">
          <a
            href="https://github.com/notaarryan/Matrix-Addition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://gh-card.dev/repos/notaarryan/Matrix-Addition.svg"
              alt="github-repo"
            />
          </a>
        </div>
        <div className="project-cards">
          <a
            href="https://github.com/notaarryan/Covid19TrendAnalysis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://gh-card.dev/repos/notaarryan/Covid19TrendAnalysis.svg"
              alt="github-repo"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
