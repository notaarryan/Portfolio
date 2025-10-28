import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <h2 className="title reveal-on-scroll">About me</h2>
      <div className="content">
        <div className="left-content reveal-on-scroll">
          <p className="about-me-description">
            Hello <span className="wave">👋</span> ! I'm Aryan Parmar, a
            Computer Science student at the University of Windsor with a passion
            for programming, algorithms, and building meaningful projects. I'm
            currently working on projects and gaining industry experience and
            aiming for internships at top tech companies.
          </p>

          <h3>Education</h3>
          <p className="degree">
            Bachelor of Science in Computer Science with Honours in Software
            Engineering
          </p>
          <p className="university">University of Windsor, Ontario</p>
          <p className="graduation-year">(Expected Graduation: 2028)</p>
        </div>
        <div className="right-content reveal-on-scroll">
          <h3>Tech Stack</h3>
          <div className="container">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              alt="HTML5 Logo"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt="CSS3 Logo"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript Logo"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React Logo"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
              alt="Java Logo"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
              alt="Python Logo"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
              alt="C Logo"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
              alt="Bash Logo"
            />
          </div>

          <h3>Accomplishments and Certifications</h3>
          <ul>
            <li>Dean's Honours Roll Winner for the 2024-2025 academic year</li>
            <li>ICPC Regional Qualifier/Competitor (NOV 2024)</li>
            <li>
              <a href="https://www.hackerrank.com/certificates/f003e4b3f80f">
                HackerRank JavaScript (Basic and Intermediate) Certifications
              </a>
            </li>
            <li>
              <a href="https://www.hackerrank.com/certificates/1592fd7a9468">
                Python (Basic) Certifications
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
