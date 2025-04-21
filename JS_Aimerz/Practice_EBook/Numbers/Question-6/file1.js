// Question : Generating a Random Number in a Range.
// - Write a function generateRandomNumber that generates a random number between a given minimum and maximum avlue(inclusive).

// function generateRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(generateRandomNumber(1, 10));
// console.log(generateRandomNumber(5, 15));

// -----------------------------------------------------------------------

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(5, 15));
console.log(generateRandomNumber(7, 7));
console.log(generateRandomNumber(-10, -1));
