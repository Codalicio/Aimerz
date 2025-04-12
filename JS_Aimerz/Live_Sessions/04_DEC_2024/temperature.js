const tempConverter = (unit, temp) => {
  let tempValue;
  if (unit === "C") {
    tempValue = (temp * 9) / 5 + 32;
  }
  if (unit === "F") {
    tempValue = ((temp - 32) * 5) / 9;
  }
  return tempValue;
};
console.log(tempConverter("F", 32));
console.log(tempConverter("C", 100));
