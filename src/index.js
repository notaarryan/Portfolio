import "./style.css";

const toggleLightingModes = document.getElementById("toggleLightingModes");
const cards = document.querySelectorAll("div.cards");
const heroSection = document.querySelector("section.hero-section");
let addedScrollToTopButton = false;
const body = document.querySelector("body");

toggleLightingModes.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    toggleLightingModes.innerText = "Light Mode";
  } else {
    toggleLightingModes.innerText = "Dark Mode";
  }
});

const rotateCards = () => {
  let angle = 0;
  cards.forEach((card, zIndex) => {
    if (!card.classList.contains("away")) {
      card.style.transform = `translateY(0) rotate(${angle}deg)`;
      card.style.zIndex = cards.length - zIndex;
      angle = angle - 10;
    } else if (card.classList.contains("away")) {
      card.style.transform = `translateY(-120vh) rotate(48deg)`;
    } else {
      card.style.transform = `translateY(120vh) rotate(${angle}deg)`;
    }
  });
};

rotateCards();

window.addEventListener("scroll", () => {
  if (window.scrollY != 0 && addedScrollToTopButton === false) {
    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.innerText = "↑";
    scrollToTopButton.classList.add("scroll-to-top-btn");
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });

    body.appendChild(scrollToTopButton);
    addedScrollToTopButton = true;
  } else if (addedScrollToTopButton === true && window.scrollY === 0) {
    const scrollToTopButton = document.querySelector(
      "button.scroll-to-top-btn"
    );
    body.removeChild(scrollToTopButton);
    addedScrollToTopButton = false;
  }
  let distance = window.innerHeight * 2;
  let topValue = heroSection.getBoundingClientRect().top;
  let index = -1 * (topValue / distance + 1);
  index = Math.floor(index);
  for (let i = 0; i < cards.length; i++) {
    if (i <= index) {
      cards[i].classList.add("away");
      cards[i].classList.remove("in-place");
    } else {
      cards[i].classList.remove("away");
      cards[i].classList.add("in-place");
    }
  }
  rotateCards();
});

window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, 10);
  document.body.classList.add("loaded");
});
