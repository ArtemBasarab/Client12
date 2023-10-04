window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".navbar__burger-btn")
    .addEventListener("click", () => {
      document
        .querySelector(".navbar__burger-btn")
        .classList.toggle("burger-active");
      if (
        document
          .querySelector(".navbar__burger-btn")
          .classList.contains("burger-active")
      ) {
        document.querySelector(".body").style.overflowY = "hidden";
      } else {
        document.querySelector(".body").style.overflowY = "auto";
      }

      document
        .querySelector(".navbar__nav-list")
        .classList.toggle("nav-active");
    });


    const homepageAuthors = new Swiper(".homepage-authors", {
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        freeMode: {
          enabled: true,
        },
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
});
