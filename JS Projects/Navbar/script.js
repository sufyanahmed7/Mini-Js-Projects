const navtoggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navtoggle.addEventListener("click", () => {
  links.classList.toggle("nav-center");
});
