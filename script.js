window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const menuOpen = document.querySelector(".header__menu-toggle");
  const menuClose = document.querySelector(".menu__close");

  menuOpen.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
  });

  menuClose.addEventListener("click", () => {
    menu.classList.remove("menu--open");
  });

  const testimonialsCarousel = document.getElementById("testimonialsCarousel");
  const testimonialsPrev = document.querySelector(".testimonialsPrev");
  const testimonialsNext = document.querySelector(".testimonialsNext");

  testimonialsPrev.addEventListener("click", () => {
    testimonialsCarousel.scrollBy({
      left: -testimonialsCarousel.clientWidth,
      behavior: "smooth",
    });
  });

  testimonialsNext.addEventListener("click", () => {
    testimonialsCarousel.scrollBy({
      left: testimonialsCarousel.clientWidth,
      behavior: "smooth",
    });
  });
});
