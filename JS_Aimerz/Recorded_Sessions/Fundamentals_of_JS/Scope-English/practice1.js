// // Closures :

// function printName() {
//     let name = 'Amit';
//     return function() {
//         console.log(`${name}`);
//     };
// };

// printName()()
// printName()()

// console.log('hi');

// const counter = () => {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     }
// }

// const counterFunc = counter();
// counterFunc();
// counterFunc();
// counterFunc();
// counterFunc();
// counterFunc();

// ----------------------------------------------------------

// const result = parseInt(9, 10).toString(2);
// console.log(result);

// -------------------------------------------------------------

// Closures is way to access variables, functions or objectb declared in parent's scope to child.

// function counter() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     };
// };


// let counterFunc = counter();
// counterFunc();
// counterFunc();
// counterFunc();
// counterFunc();
// counterFunc();

// ----------------------------------------------------------------

// function add() {
//     let a = 9;
//     return function (b) {
//         return (a + b);
//     }
// }

// const output = add()(7);

// console.log(output);
// console.log(output);

// -----------------------------------------------------------------------

