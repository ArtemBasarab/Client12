window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".navbar__burger-btn")
    .addEventListener("click", () => {
      document
        .querySelector(".navbar__burger-btn")
        .classList.toggle("burger-active");
      document
        .querySelector(".navbar__nav-list")
        .classList.toggle("nav-active");
    });

  const homepageAuthors = new Swiper(".homepage-authors", {
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      375: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      550: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  const partnersSlider = new Swiper(".partners__logo-block", {
    autoplay: {
      reverseDirection: true,
    },
    breakpoints: {
      // when window width is >= 320px
      1375: {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          pauseOnMouseEnter: true,
          reverseDirection: true,
        },
      },
      1101: {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          
          reverseDirection: true,
        },
      },
      850: {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          
          reverseDirection: true,
        },
      },
      650: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          
          reverseDirection: true,
        },
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          
          reverseDirection: true,
        },
      },
      374: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          
          reverseDirection: true,
        },
      }
    },
  });

  const testimonialSlider = new Swiper(".testimonials__slider", {
    loop: true,
    navigation: {
      nextEl: '.testimonials__slider-btn_next',
      prevEl: '.testimonials__slider-btn_prev',
    },
  })
});
