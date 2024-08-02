const header = document.querySelector("#header");
const closeBtn = document.querySelector("#closeBtn");
const hamburgerBtn = document.querySelector("#hamburgerBtn");

hamburgerBtn.addEventListener("click", () => {
  header.classList.add("open-menu");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("open-menu");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("bg-black/50", "backdrop-blur-sm");
  } else {
    header.classList.remove("bg-black/50", "backdrop-blur-sm");
  }
});
