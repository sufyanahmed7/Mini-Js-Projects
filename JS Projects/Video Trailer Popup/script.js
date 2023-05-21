const btnEl = document.querySelector(".btn");
const closebtn = document.querySelector(".class-icon");
const trailerEl = document.querySelector(".trailer-container");
const video = document.querySelector(".video");
btnEl.addEventListener("click", () => {
  trailerEl.classList.remove("active");
});
closebtn.addEventListener("click", () => {
  trailerEl.classList.add("active");
  video.pause();
});
