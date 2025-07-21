function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Looping animated professions
const professions = ["Data Analyst", "Web Designer", "Professional Driver"];
let current = 0;

function animateProfession() {
  const textEl = document.querySelector(".animated-text");
  textEl.textContent = professions[current];
  current = (current + 1) % professions.length;
}

setInterval(animateProfession, 2000);
animateProfession(); // Start right away
