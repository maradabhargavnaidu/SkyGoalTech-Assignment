const hamburger = document.querySelector(".ham-bars");
const list = document.querySelector(".none");

hamburger.addEventListener("click", () => {
  console.log("clicked");
  list.classList.toggle("none");
  list.classList.toggle("open");
});
