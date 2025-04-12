// Add two numbers, store the result in a variable outside the function, and print it.

// const addTwoNumbers = (a, b) => a + b;

// const result = addTwoNumbers(3, 4);
// console.log(result);

// ---------------------------------------------------------------------

const cart = {
  Iphone: 75000,
  Ipad: 45000,
  MacBook: 130000,
};

const totalCartValue = (a) => {
  let grandTotal = 0;
  for (let key in a) {
    grandTotal += a[key];
  }
  return grandTotal;
};

const result = totalCartValue(cart);
console.log(result);

// ------------------------------------------------------------------
