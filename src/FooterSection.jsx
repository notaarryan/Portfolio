import "./FooterSection.css";

function FooterSection({ githubLogoSrc }) {
  return (
    <footer>
      <section className="contact-me-section" id="contact">
        <p>&copy; 2025 Aryan Parmar</p>
        <div>
          <a
            href="https://www.linkedin.com/in/aryan-parmar-a0634b299/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              id="linkedin-logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              alt="Linkedin Logo"
            />
          </a>

          <a
            href="https://github.com/notaarryan"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img id="github-logo" src={githubLogoSrc} alt="Github Logo" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default FooterSection;
