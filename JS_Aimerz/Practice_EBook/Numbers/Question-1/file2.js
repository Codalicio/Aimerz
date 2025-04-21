function convertToNumber(str) {
  const num = Number(str);
  return typeof num === "number" ? num : NaN;
}

console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));

// ----------------------------------------------------------------------

const myStr = "123am45";
const myNum = Number(myStr);
const result = typeof myNum === "number" ? myNum : NaN;
console.log(result);

// ----------------------------------------------------------------------
