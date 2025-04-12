// Array Destructuring :

// const nums = [2, 4, 5, 7, 9];

// const [a, b, c, d, e] = nums;

// console.log(a, b, c, d, e);

// ----------------------------------------------------------------

// const nums = [2, 4, 5, 7, 9];

// const [a, b, ...num] = nums;

// console.log(a, b, num);

// const [c, ...d] = num;

// console.log(c, d);

// ---------------------------------------------------------------------

// Object Destructuring :

const person1 = {
  name: "amit",
};

const person2 = {
  age: 28,
};

const { name, age, place = "Bihar" } = { ...person1, ...person2 };
console.log(name, age, place);
