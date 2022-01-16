const hamBurger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav__items");

hamBurger.addEventListener("click", openHam);

function openHam() {
    hamBurger.classList.toggle("active");
    navItems.classList.toggle("active");
}
