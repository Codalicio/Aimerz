// const names1 = ["mithun", "sai", "ranjit", "vivek"];
// const names2 = ["raj", "abhishek", "raja"];

// const combinedNames = [...names1, ...names2];
// console.log(combinedNames);

// combinedNames.forEach((data, index) => {
//   console.log(`${index} : ${data}`);
// });

// -------------------------------------------------------------------

// const person1 = {
//   name: "Amit",
// };

// const person2 = {
//   age: 28,
// };

// const combinedObj = { ...person1, ...person2 };
// console.log(combinedObj);

// const allEntries = Object.entries(combinedObj);
// console.log(allEntries);

// for (let [key, value] of allEntries) {
//   console.log(`${key} : ${value} `);
// }

// allEntries.forEach((data, index) => {
//   console.log(`${index} : ${data}`);
// });

// ------------------------------------------------------------------

// const nums = [1, 2, 3, 4, 5];
// console.log(...nums);

// ----------------------------------------------------------------------

const num1 = [2, 3, 4, 5];
const num2 = [1, 6, 0, 9, 5];

const combinedNum = [...num1, ...num2];

const sumOfAll = () => {
  return combinedNum.reduce(
    (accumulator, valueToBeAdded) => accumulator + valueToBeAdded
  );
};

const result = sumOfAll();
console.log(result);

// -------------------------------------------------------------------
