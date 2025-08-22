import "./style.css";
class App {
  constructor() {
    this.addedScrollToTopButton = false;
    this.#cachedDom();
    this.rotateCards();
    this.#addEventListeners();
  }

  #cachedDom() {
    this.toggleLightingModes = document.getElementById("toggleLightingModes");
    this.cards = document.querySelectorAll("div.cards");
    this.heroSection = document.querySelector("section.hero-section");
    this.body = document.querySelector("body");
    this.projectCard = document.querySelectorAll(".project-cards");
    this.githubLogo = document.getElementById("github-logo");
  }

  #addEventListeners() {
    window.addEventListener("load", () => {
      if (localStorage.getItem("lightingMode") === "dark") {
        document.documentElement.classList.toggle("dark");
        this.githubLogo.src =
          "https://img.icons8.com/?size=100&id=12598&format=png&color=FFFFFF";
      }
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 10);
      document.body.classList.add("loaded");
    });

    this.toggleLightingModes.addEventListener("click", () =>
      this.toggleLightingModeClasses()
    );

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.createScrollToTopButton();
      } else {
        this.deleteScrollToTopButton();
      }

      this.removeCardsOnScroll();
      this.rotateCards();
    });

    this.projectCard.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (x - centerX) / 30;
        const moveY = (y - centerY) / 30;
        console.log(moveX, moveY);
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
  }

  rotateCards() {
    let angle = 0;
    this.cards.forEach((card, zIndex) => {
      if (!card.classList.contains("away")) {
        card.style.transform = `translateY(0) rotate(${angle}deg)`;
        card.style.zIndex = this.cards.length - zIndex;
        angle = angle - 10;
      } else if (card.classList.contains("away")) {
        card.style.transform = `translateY(-120vh) rotate(48deg)`;
      } else {
        card.style.transform = `translateY(120vh) rotate(${angle}deg)`;
      }
    });
  }

  toggleLightingModeClasses() {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("lightingMode", "dark");
      this.githubLogo.src =
        "https://img.icons8.com/?size=100&id=12598&format=png&color=FFFFFF";
      this.toggleLightingModes.innerText = "Light Mode";
    } else {
      localStorage.setItem("lightingMode", "light");
      this.githubLogo.src =
        "https://img.icons8.com/?size=100&id=12598&format=png&color=000000";
      this.toggleLightingModes.innerText = "Dark Mode";
    }
  }

  createScrollToTopButton() {
    if (this.addedScrollToTopButton) return;

    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.innerText = "↑";
    scrollToTopButton.classList.add("scroll-to-top-btn");
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });

    this.body.appendChild(scrollToTopButton);
    this.addedScrollToTopButton = true;
  }

  deleteScrollToTopButton() {
    if (!this.addedScrollToTopButton) return;

    const scrollToTopButton = document.querySelector(
      "button.scroll-to-top-btn"
    );
    if (scrollToTopButton) this.body.removeChild(scrollToTopButton);

    this.addedScrollToTopButton = false;
  }

  removeCardsOnScroll() {
    let distance = window.innerHeight * 2;
    let topValue = this.heroSection.getBoundingClientRect().top;
    let index = -1 * (topValue / distance + 1);
    index = Math.floor(index);
    for (let i = 0; i < this.cards.length; i++) {
      if (i <= index) {
        this.cards[i].classList.add("away");
        this.cards[i].classList.remove("in-place");
      } else {
        this.cards[i].classList.remove("away");
        this.cards[i].classList.add("in-place");
      }
    }
  }
}
new App();
