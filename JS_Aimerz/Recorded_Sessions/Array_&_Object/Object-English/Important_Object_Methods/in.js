// .in operator (Membership operator) :

// const person = {
//     name: 'Amit',
//     age: 28,
//     place: 'Bihar',
// };

// const result1 = 'place' in person;
// console.log(result1);

// const result2 = 'name' in person;
// console.log(result2);

// const result3 = 'age' in person;
// console.log(result3);

// const result4 = 'address' in person;
// console.log(result4);

// ----------------------------------------------

const nums = [1, 2, 3, 4, 50];

const output1 = 1 in nums;
console.log(output1);

const output2 = 2 in nums;
console.log(output2);

const output3 = 3 in nums;
console.log(output3);

const output4 = 4 in nums;
console.log(output4);

const output5 = 50 in nums;
console.log(output5);

const output6 = 56 in nums;
console.log(output6);

// ---------------------------------------------------------------------
