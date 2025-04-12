// Array :

// 1.) Arrays are indexed.
// 2.) Items in an array are ordered.
// 3.) Array are of variable length, if.e., we should not explicitly define the length
// 4.) We ca store any datatype in an array, i.e., it is datatype flexible.

// const person = ['Amit', 28, 'Bihar'];
// console.log(person, typeof(person), person.length, );

// console.log(person[person.length-1]);

// for(let i = 0; i < person.length; i++) {
//     console.log(person[i]);
// };

// for(let item of person) {
//     console.log(item);
// };

// --------------------------------------------------------------------

// const fruits = ['apple', 'mango', 'banana', 'grapes'];
// for(let fruit of fruits) {
//     console.log(fruit);
// };

// ---------------------------------------------------------------------------------

// Array methods :

// 1.) push() : Adds an element at the ened of an array.

// const fruits = ['apple', 'mango', 'banana'];
// fruits.push('grapes');
// console.log(fruits);

// const fruits = ['apple', 'mango', 'banana'];
// let myFruit = 'grapes';
// fruits.push(`${myFruit}`);
// console.log(fruits);

// const names = ['Amit', 'Sonu'];
// names.push('monu', 'kumar');
// console.log(names);

// ---------------------------------------------------------------------------

// 2.) splice() : It removes elements from main array modifying the actual array.

// const nums = [1, 2, 3, 4];
// const splicedItems = nums.splice(0, 2, 7, 9, 11);
// console.log(splicedItems);
// console.log(nums);

// const fruits = ['apple', 'mango', 'grapes'];
// const newFruits = fruits.splice(0, 3, 'banana');
// console.log(newFruits);
// console.log(fruits);

// const names = ['amit', 'raj', 'sonu', 'kumar'];
// const removedNames = names.splice(0, 3, 'Vishwajeet');
// console.log(removedNames);
// console.log(names);

// ----------------------------------------------------------------------------------------

// 3.) reverse() :

// const nums = [1, 2, 3, 4];
// nums.reverse();
// console.log(nums);

// -------------------------------------------------------------------------

// 4.) includes() :

// const nums = [2, 4, 6, 7, 9];
// const output = nums.includes(7);
// console.log(output);

// -------------------------------------------------------------------------------

// 5.) indexOf() :

// const nums = [1, 3, 4, 6, 7, 9];
// const output = nums.indexOf(7);
// console.log(output);

// -------------------------------------------------------------------------------

