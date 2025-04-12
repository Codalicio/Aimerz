// Callback function :
// - I will define a function and call it whenever needed!

// - I will perform calculation on two numbers and once operation is completed,  I will call the callback.

// const printResult = result => {
//     console.log(`The result is ${result}`);
// }

// const add = (a, b) => (a + b);
// const subtract = (a, b) => (a - b);
// const multiply = (a, b) => (a * b);

// const calculate = (operation, a, b, callback) => {
//     let result;
//     if(operation === "add") {
//         result = add(a, b);
//     } else if(operation === "sub") {
//         result = subtract(a, b);
//     } else if(operation === 'mul') {
//         result = multiply(a, b);
//     } else {
//         console.log("Invalid operation");
//         return
//     };
//     callback(result);
// };

// calculate('mul', 5, 5, printResult);

// -------------------------------------------------------------------------

// const printResult1 = result => {
//     console.log(`The result is : ${result}.`);
// };

// const add = (a, b) => (a + b);
// const subtract = (a, b) => (a - b);
// const multiply = (a, b) => (a * b);

// const calculate1 = (operation, a, b, callback) => {
//     let result;
//     switch(operation) {
//         case "+":
//             result =  add(a, b);
//             break;
//         case "-":
//             result = subtract(a, b);
//             break;
//         case "*":
//             result = multiply(a, b);
//             break;
//         default:
//             result =  "Invalid operation input."
//             break;
//     };
//     callback(result);
// };

// calculate1("+", 7, 100, printResult1);

// ------------------------------------------------------------------

// const output = (result) => {
//     console.log(`The output is : ${result}.`);
// };

// const sentence = (callback, day) => {
//     let result;
//     switch(day) {
//         case 1:
//         case 2:
//         case 3: 
//         case 4:
//         case 5:
//             result =  `It's a week day | No holiday.`;
//             break;
//         case 6:
//         case 7:
//             result =  `Yeah! It's week off.`;
//             break;
//         default:
//             result =  "Invalid Input";
//             break;
//     }
//     callback(result);
// };

// sentence(output, 6);

// --------------------------------------------------------------------

// const output = result => (console.log(`Result : ${result}`));

// const num = (a, callback) => {
//     let res;
//     if(a === 0) {
//         res = `Zero(0) is neither positive nor negative.`;
//     } else if(a > 0) {
//         res = `The number ${a} is positive.`;
//     } else {
//         res = `The number ${a} is negative`;
//     };
//     callback(res);
// };

// num(0, output);

// ---------------------------------------------------------------------

