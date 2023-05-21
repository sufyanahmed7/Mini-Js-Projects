const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const button = document.getElementById("btn");

const code = document.getElementById("colorcode");

const hero = document.getElementById("hero");

button.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += colors[getRandomNumber()];
  }
  hero.style.backgroundColor = hexColor;
  code.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
