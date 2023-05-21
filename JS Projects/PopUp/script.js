const modalBtn = document.querySelector(".btn");
const modalover = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
modalBtn.addEventListener("click", () => {
  modalover.classList.add("open-modal");
});
closeBtn.addEventListener("click", () => {
  modalover.classList.remove("open-modal");
});
