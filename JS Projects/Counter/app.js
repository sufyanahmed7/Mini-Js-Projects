let count = 0;

const number = document.getElementById("no");

const btns = document.querySelectorAll(".btn");
console.log(btns);
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if (style.contains("increment")) {
      count++;
    } else if (style.contains("decrement")) {
      count--;
    } else {
      count = 0;
    }
    number.textContent = count;
    if (count > 0) {
      number.style.color = "green";
    } else if (count < 0) {
      number.style.color = "red";
    } else {
      number.style.color = "black";
    }
  });
});
