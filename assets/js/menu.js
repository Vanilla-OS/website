const menuElement = document.querySelector(".topbar-navigation");
const menuTogglerElement = document.querySelector(".topbar-navigation-toggler");

function toggleMenu() {
  menuElement.classList.toggle("show");
}

menuTogglerElement.addEventListener("click", toggleMenu);
