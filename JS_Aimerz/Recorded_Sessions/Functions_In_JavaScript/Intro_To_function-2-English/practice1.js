// Explicit return :

// const addTwoNumbers = (a, b) => {
//     return a + b;
// };

// const output1 = addTwoNumbers(4, 3);
// console.log(output1);

// -----------------------------------------------

// Implicit return :

// const addTwoNumbers = (a, b) => (a + b);

// const output = addTwoNumbers(5, 2);
// console.log(output);

// ----------------------------------------------------------

// this : Context

// const fullName = "Amit Raj";
// const person = {
//     name: 'Amit',
//     sayHello: function() {
//         console.log(`Hello, ${this.name}!`);
//     },
//     sayBye: () => {
//         console.log(`Bye, ${fullName}!`);
//     },
// };

// person.sayHello();
// person.sayBye();

// -------------------------------------------------------------------------

// Recursive functions :

// const myRecursiveFunc = num => {
//     if(num === 0) {
//         return;
//     };
//     console.log(num);
//     myRecursiveFunc(num - 1);
// };

// myRecursiveFunc(10);

// -----------------------------------------------------------------------------------

