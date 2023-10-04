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

  document.querySelector(".form__select-head").addEventListener("click", () => {
    document
      .querySelector(".form__select-head")
      .classList.toggle("form__select-head_active");
  });

  document.querySelectorAll(".form__select-item").forEach((item) => {
    item.addEventListener("click", () => {
        const itemValue = item.innerText
        document.querySelector('.form__select-head').innerText = itemValue
        document.querySelector(".form__select-head_active").classList.remove("form__select-head_active")
        console.log(item)
    })
  })
});
