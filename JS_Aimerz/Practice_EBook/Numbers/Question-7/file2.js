const convertToBinary = (number) => {
  return parseInt(number, 10).toString(2);
};

console.log(convertToBinary(10));
console.log(convertToBinary(255));
console.log(convertToBinary(0));

const convertToNumber = (binary) => {
  return parseInt(binary, 2).toString(10);
};

console.log(convertToNumber(1010));
console.log(convertToNumber(11111111));
console.log(convertToNumber(0));

// -------------------------------------------------------------------------
