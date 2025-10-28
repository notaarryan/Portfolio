import "./HeroSection.css";
import { useEffect, useRef } from "react";

function HeroSection({ setShowScrollButton }) {
  const cardsRef = useRef(null);
  const heroSectionRef = useRef(null);

  const rotateCards = (cards) => {
    let angle = 0;
    Array.from(cards).forEach((card, zIndex) => {
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

  const removeCardsOnScroll = (cardsRef, heroSectionRef) => {
    const cards = Array.from(cardsRef);
    let distance = window.innerHeight * 1.5;
    let topValue = heroSectionRef.current.getBoundingClientRect().top;
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
  };

  useEffect(() => {
    const cards = cardsRef.current.querySelectorAll("div.cards");
    rotateCards(cards);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
      removeCardsOnScroll(cards, heroSectionRef);
      rotateCards(cards);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <section className="hero-section" id="hero" ref={heroSectionRef}>
      <div className="hero-section-left">
        <div className="text">
          <h1>Aryan Parmar</h1>
          <p>Computer Science Student | Aspiring Software Engineer</p>
        </div>
      </div>
      <div className="hero-section-right" ref={cardsRef}>
        <div className="cards" id="card1">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
            alt="Python Logo"
          />
        </div>
        <div className="cards" id="card2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
            alt="Java Logo"
          />
        </div>
        <div className="cards" id="card3">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript Logo"
          />
        </div>
        <div className="cards" id="card4">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
            alt="C Logo"
          />
        </div>
        <div className="cards" id="card5">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
            alt="HTML5 Logo"
          />
        </div>
        <div className="cards" id="card6">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
            alt="CSS3 Logo"
          />
        </div>
        <div className="cards" id="card7">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React Logo"
          />
        </div>
        <div className="cards" id="card8">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
            alt="Bash Logo"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
