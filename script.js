const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  //toggle mobile menu visibility//
  document.body.classList.toggle("show-mobile-menu");
});

//close menu ketika tombol ditutup//
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//close menu ketika nav link ditutup//
navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

//initial swipper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  //navigasi arrow//
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prew",
  },

  //Responsive Breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});
