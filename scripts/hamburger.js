// Hamburger menu
let menubutton = document.getElementById("menubutton");
let navbar = document.getElementById("navbar");

menubutton.addEventListener("click", () => {
    menubutton.classList.toggle("open");
    navbar.classList.toggle("open");
});