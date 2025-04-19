const body = document.querySelector("body");
const button = document.querySelector("button");

let colors = ["green", "blue", "orange", "greenyellow", "orangered"];

button.addEventListener("click", function () {
  let num = 0;
  setInterval(() => {
    if (num < colors.length) {
      body.style.backgroundColor = colors[num];
      num++;
    } else {
      num = 0;
    }
  }, 1000);
});
