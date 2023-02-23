const navMenu = document.querySelector(".navbar-list"),
  navOpenButton = document.querySelector(".open-btn"),
  navCloseButton = document.querySelector(".close-nav-btn"),
  logoEl = document.querySelector(".logo"),
  navbar = document.querySelector(".navbar"),
  scrollLinks = document.querySelectorAll(".scroll-link");

navOpenButton.addEventListener("click", () => {
  navMenu.classList.add("active");
  navOpenButton.classList.add("hide");
  document.body.classList.add("disabled-scroll");
  logoEl.classList.add("hidden");
});

navCloseButton.addEventListener("click", () => {
  navMenu.classList.remove("active");
  navOpenButton.classList.remove("hide");
  document.body.classList.remove("disabled-scroll");
  logoEl.classList.remove("hidden");
});
