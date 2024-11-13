const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  })
);
