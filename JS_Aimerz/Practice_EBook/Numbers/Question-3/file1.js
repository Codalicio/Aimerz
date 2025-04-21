// Qusetion : Working with Large Numbers : Formatting and Display.
// - Write a function formatLargeNumber that converts a large number into a user-friendly formatLargeNumber(e.g. 1.5K, 3.5M).

// function formatLargeNumber(number) {
//   if (number >= 1000000) {
//     return `${(number / 1000000).toFixed(1)}M`;
//   } else if (number >= 1000) {
//     return `${(number / 1000).toFixed(1)}K`;
//   } else {
//     return number.toString();
//   }
// }

// console.log(formatLargeNumber(1000));
// console.log(formatLargeNumber(3500000));
// console.log(formatLargeNumber(75000));
// console.log(formatLargeNumber(6800));

// ------------------------------------------------------------------------

const formatLargeNumber = (number) => {
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  } else if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  } else {
    return number.toString();
  }
};

console.log(formatLargeNumber(1000));
console.log(formatLargeNumber(3500000));
console.log(formatLargeNumber(75000));
console.log(formatLargeNumber(6800));

// ---------------------------------------------------------------------
