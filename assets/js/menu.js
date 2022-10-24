function toggleMenu() {
    document.querySelector(".topbar-navigation").classList.toggle("show");
}

document.querySelector(".topbar-navigation-toggler").addEventListener("click", toggleMenu);