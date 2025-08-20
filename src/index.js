import "./style.css";

const toggleLightingModes = document.getElementById("toggleLightingModes");
const cards = document.querySelectorAll("div.cards");
const heroSection = document.querySelector("section.hero-section");

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
  let distance = window.innerHeight / 5;
  let topValue = heroSection.getBoundingClientRect().top;
  let index = -1 * (topValue / distance + 1);
  index = Math.floor(index);
  for (let i = 0; i < cards.length; i++) {
    if (i <= index) {
      cards[i].classList.add("away");
    } else {
      cards[i].classList.remove("away");
      let angle = -10 * i;
      cards[i].style.transform = `translateY(120vh) rotate(${angle}deg)`;
    }
  }
  rotateCards();
});
