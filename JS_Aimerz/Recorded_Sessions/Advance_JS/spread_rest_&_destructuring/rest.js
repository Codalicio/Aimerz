const addNumbers = (...nums) => {
  return nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 100);
};

result = addNumbers(1, 3, 4, 5, 7, 6, 10);
console.log(result);

// --------------------------------------------------------------------------
