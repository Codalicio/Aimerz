// Map Data Structure :
// 1.) Keys can be of any datatype
// 2.) Preserves the order of the insertion

// We use constructor to create a Map :

// const person = new Map();

// person.set('name', 'Amit');
// console.log(person.get('name'));
// console.log(person.size);

// person.set(true, (
//     function(a, b) {
//     return a + b;
// }
// )(3, 4));

// console.log(person.size);
// console.log(person.get(true))
// console.log(person);

// console.log(person.has(true));
// console.log(person.keys());
// console.log(person.values());
// console.log(person.entries());

// person.forEach((value, key) => {
//     console.log(`${key} : ${value}`);
// });

// ------------------------------------------------------------------------------------

// const person1 = new Map();

// console.log(person1.size);
// console.log(person1);

// person1.set('place', 'Hajipur');
// person1.set('age', 28);

// console.log(person1.get('age'));
// console.log(person1);
// console.log(person1.size);
// console.log(person1.has('age'));
// console.log(person1.keys());
// console.log(person1.values());
// console.log(person1.entries());

// person1.forEach((value, key) => {
//     console.log(`${key} : ${value}`)
// });

// ---------------------------------------------------------------------------------

// const person2 = new Map();

// person2.set('class', 10);
// person2.set('section', '10A');

// console.log(person2.size);
// console.log(person2.get('section'));
// console.log(person2.has('name'));
// console.log(person2.keys());
// console.log(person2.values());
// console.log(person2.entries());
// console.log(person2);

// person2.forEach((value, key) => {
//     console.log(`${key} : ${value}`);
// });

// ------------------------------------------------------------------------------------

const person3 = new Map();

person3.set("name", "Amit");
person3.set("age", 28);
person3.set("can vote", true);
console.log(person3.size);
console.log(person3.get("can vote"));
console.log(person3.has("place"));
console.log(person3.keys());
console.log(person3.values());
console.log(person3.entries());

person3.forEach((value, key) => {
  console.log(`${key} : ${value}`);
});

person3.delete("age");
console.log(person3);
person3.clear();
console.log(person3);

// --------------------------------------------------------------------------
