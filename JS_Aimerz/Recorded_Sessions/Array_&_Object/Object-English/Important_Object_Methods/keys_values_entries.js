// Object.keys() : To convert an object into an array use : 1. Object.keys() | 2. Object.values() | 3. Object.entries() :

// const person = {
//   name: "Amit",
//   age: 28,
//   address: "Hajipur(Bihar)-844101",
// };

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// for (let element of Object.entries(person)) {
//   for (let i = 1; i < element.length; i += 2) {
//     console.log(element[i]);
//   }
// }

// ----------------------------------------------------------------------

// for(let value of Object.values(person)) {
//     console.log(value);
// };

// ------------------------------------------------------------------------

// for(let element of Object.entries(person)) {
//     for(let i = 0; i < element.length; i++) {
//         console.log(element[i]);
//     };
// };

// ----------------------------------------------------------------------------

const person = {
  name: "amit",
  age: 28,
  place: "Bihar",
};

for (const [key, value] of Object.entries(person)) {
  console.log(`${key} : ${value}`);
}

const allKeys = Object.keys(person);

for (let i = 0; i < allKeys.length; i++) {
  console.log(allKeys[i]);
}

const allValues = Object.values(person);

for (let i = 0; i < allValues.length; i++) {
  console.log(allValues[i]);
}

// -----------------------------------------------------------------------
