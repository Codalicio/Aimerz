const button = document.querySelector("button");
const h2 = document.querySelector("h2");

button.addEventListener("click", function () {
  let num = 0;
  setInterval(() => {
    h2.innerText = num;
    num++;
  }, 1000);
});
