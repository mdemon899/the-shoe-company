const header = document.querySelector("#header");
const closeBtn = document.querySelector("#closeBtn");
const hamburgerBtn = document.querySelector("#hamburgerBtn");

hamburgerBtn.addEventListener("click", () => {
  header.classList.add("open-menu");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("open-menu");
});
