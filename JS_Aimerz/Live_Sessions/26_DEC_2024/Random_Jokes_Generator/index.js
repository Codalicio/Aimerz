const button = document.querySelector("button");
const h2 = document.querySelector("h2");

button.addEventListener("click", async function () {
  const result = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const data = await result.json();
  const joke = `${data.setup} ${data.punchline}`;
  h2.innerText = joke;
});
