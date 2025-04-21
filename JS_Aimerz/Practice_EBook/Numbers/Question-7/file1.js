// Question : Convert a number to binary.
// - Write a function convertToBinary that converts a given number into its binary representation as a string.

// const convertToBinary = (number) => {
//   return number.toString(2);
// };

const convertToBinary = (num) => {
  return parseInt(num, 10).toString(2);
};

console.log(convertToBinary(10));
console.log(convertToBinary(255));
console.log(convertToBinary(0));

// --------------------------------------------------------------

// Convert binary to number :

function convertToNumber(binary) {
  return parseInt(binary, 2).toString(10);
}

console.log(convertToNumber(1010));

// ------------------------------------------------------------------
