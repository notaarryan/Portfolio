import "./style.css";

const toggleLightingModes = document.getElementById("toggleLightingModes");

toggleLightingModes.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    toggleLightingModes.innerText = "Light Mode";
  } else {
    toggleLightingModes.innerText = "Dark Mode";
  }
});
