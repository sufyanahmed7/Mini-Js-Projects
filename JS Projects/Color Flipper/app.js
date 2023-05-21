const colors = ["Red", "Green", "Orange", "Yellow", "Blue"];

const button = document.getElementById("btn");

const code = document.getElementById("colorcode");

const hero = document.getElementById("hero");
button.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  hero.style.backgroundColor = colors[randomNumber];
  code.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
