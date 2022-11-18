const menuElement = document.querySelector(".topbar-navigation");
const menuTogglerElement = document.querySelector(".topbar-navigation-toggler");

function toggleMenu() {
  menuElement.classList.toggle("show");
}

function closeMenu() {
  menuElement.classList.remove("show");
}

menuTogglerElement.addEventListener("click", toggleMenu);

document.addEventListener("click", (event) => {
  const isMenuTogglerClicked = menuTogglerElement.contains(event.target);
  if (!isMenuTogglerClicked) {
    closeMenu();
  }
});

document.addEventListener("keyup", (event) => {
  const isEscKeyPressed = event.key === "Esc" || event.key === "Escape";
  if (isEscKeyPressed) {
    closeMenu();
  }
});