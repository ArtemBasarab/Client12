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
});
