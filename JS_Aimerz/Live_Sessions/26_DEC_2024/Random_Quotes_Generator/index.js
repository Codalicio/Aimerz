const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const em = document.querySelector("em");

button.addEventListener("click", async function () {
  const result = await fetch("https://dummyjson.com/quotes/random");
  const res = await result.json();
  h1.innerText = res.quote;
  em.innerText = `- ${res.author}`;
});
