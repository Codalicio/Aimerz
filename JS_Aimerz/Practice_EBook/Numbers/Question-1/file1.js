// Question : Convert a string to a valid number ?
// - Write a function to convert a string containing a number(e.g. '123') into an actual number. If it is not a valid number, return NaN.

// ---------------------------------------------------------------

// const str = "abc";

// const num = +str;

// const number = typeof num === "number" ? num : NaN;

// console.log(number);

// -------------------------------------------------------------------

// function convertToNumber(str) {
//   let num = +str;
//   let result = typeof num === "number" ? num : NaN;
//   return result;
// }

// console.log(convertToNumber("123"));
// console.log(convertToNumber("abc"));

// -------------------------------------------------------------------

function convertToNumber(str) {
  let num = Number(str);
  return Number.isNaN(num) ? NaN : num;
}

console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));

// ---------------------------------------------------------------------
