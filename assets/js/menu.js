const menuElement = document.querySelector(".topbar-navigation");
const menuTogglerElement = document.querySelector(".topbar-navigation-toggler");

function toggleMenu() {
  menuElement.classList.toggle("show");
}

function closeMenu() {
  menuElement.classList.remove("show");
}

menuTogglerElement.addEventListener("click", toggleMenu);
