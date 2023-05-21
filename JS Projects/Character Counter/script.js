var totalEl = document.getElementById("total");
var remainingEl = document.getElementById("remaining");
var textEl = document.getElementById("text");

textEl.addEventListener("keyup", countChars);

function countChars() {
  updateCounter();
}

function updateCounter() {
  totalEl.innerText = textEl.value.length;
  remainingEl.innerHTML =
    textEl.getAttribute("maxlength") - textEl.value.length;
}
