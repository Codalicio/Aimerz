const body = document.querySelector("body");
const input = document.querySelector("input");
const button = document.querySelector("button");
const span = document.querySelector("span");

const bgColor = localStorage.getItem("bgColor");
if (bgColor) {
  span.innerText = bgColor;
  body.style.backgroundColor = bgColor;
}

button.addEventListener("click", function (event) {
  const inputValue = input.value;
  if (!inputValue) {
    alert(`Input field is empty.`);
  }
  localStorage.setItem("bgColor", inputValue);
  window.location.reload();
});
