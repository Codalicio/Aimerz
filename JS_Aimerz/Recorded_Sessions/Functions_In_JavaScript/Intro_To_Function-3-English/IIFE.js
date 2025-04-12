// IIFE (Immediately Invoke Function Expression) => ()() :

// (
//     function (a, b) {
//         console.log("hello");
//     }
// )()

// const func = (
//     function (a, b) {
//         return "hi";
//     }
// )()

// console.log(func)

// --------------------------------------------------------

// (
//     function(a, b) {
//         console.log(a - b);
//     }
// )(9, 7)

// const subtract = (
//     function(a, b) {
//         return a - b;
//     }
// )(25, 9)

// console.log(subtract);

// ---------------------------------------------------------------------------------

// (
//     function(name) {
//         console.log(`Hello, ${name}.`);
//     }
// )('Amit');

// const userName = (
//     function(name) {
//         return `Hello, ${name}.`;
//     }
// )('Raj');

// console.log(userName);

// -------------------------------------------------------------------

// (
//     function(n) {
//         for(let i = 1; i <= n; i++) {
//             console.log(i);
//         }
//     }
// )(5)

// --------------------------------------------------------------------------

// (
//     function(n) {
//         let sum = 0;
//         for(let i = 1; i <= n; i++) {
//             sum += i
//         }
//         console.log(sum);
//     }
// )(5);

// const overallSum = (
//     function(n) {
//         let sum = 0;
//         for(let i = 0; i <= n; i++) {
//             sum += i;
//         };
//         return sum;
//     }
// )(10);

// console.log(overallSum);

// -----------------------------------------------------------------------------------

// (
//     function() {
//         let sum = 0;
//         for(let i = 0; i < arguments.length; i++) {
//             sum += arguments[i];
//         };
//         console.log(sum);
//     }
// )(1, 4, 5, 6, 9, 100, 80);

// const sumOfAllArguments = (
//     function() {
//         let sum = 0;
//         for(let i = 0; i < arguments.length; i++) {
//             sum += arguments[i];
//         };
//         return sum;
//     }
// )(100, 200, 90, 70, 55, 50);

// console.log(sumOfAllArguments);

// ----------------------------------------------------------------------------

// (
//     function(a, b) {
//         console.log(a ** b);
//     }
// )(3, 4)

// const multiply = (
//     function(a, b) {
//         return a ** b;
//     }
// )(3, 4)

// console.log(multiply);

// ---------------------------------------------------------------------------

// (
//     function(isUserLoggedIn, requestedPage) {
//         if(isUserLoggedIn) {
//             if(requestedPage === '/courses') {
//                 console.log("You are in courses page.");
//             } else if(requestedPage === '/contacts') {
//                 console.log('You are in contacts page.');
//             } else {
//                 console.log("You are in 404 page.")
//             }
//         } else {
//             console.log("You are in login page.");
//         }
//     }
// )(false)

// const userStatus = (
//     function(isUserLoggedIn, requestedPage) {
//         if(isUserLoggedIn) {
//             if(requestedPage === '/courses') {
//                 return ("You are in courses page.");
//             } else if(requestedPage === '/contacts') {
//                 return ('You are in contacts page.');
//             } else {
//                 return ("You are in 404 page.")
//             }
//         } else {
//             return ("You are in login page.");
//         }
//     }
// )(true, '/contacts')

// console.log(userStatus)

// ---------------------------------------------------------------------------

// (
//     function(day) {
//         switch(day) {
//             case 'Monday':
//             case 'Tuesday':
//             case 'Wednesday':
//             case 'Thursday':
//             case 'Friday':
//                 console.log("It's a week day.");
//                 break;
//             case 'Saturday':
//             case 'Sunday':
//                 console.log("It's a week off")
//                 break;
//             default:
//                 console.log("Invalid day input");
//         }
//     }
// )('Saturday')

// const dayRoute = (
//     function(day) {
//         switch(day) {
//             case 'Monday':
//             case 'Tuesday':
//             case 'Wednesday':
//             case 'Thursday':
//             case 'Friday':
//                 return ("It's a week day.");
//                 break;
//             case 'Saturday':
//             case 'Sunday':
//                 return ("It's a week off");
//                 break;
//             default:
//                 return ("Invalid day input");
//         }
//     }
// )('Thursday')

// console.log(dayRoute);

// ---------------------------------------------------------------------------------

// (
//     function() {
//         for(let i = 0; i < arguments.length; i++) {
//             console.log(`Hello, ${arguments[i]}.`)
//         }
//     }
// )('Amit', 'Raj', 'Sonu', 'Kumar', 'Monu', 'Chhotu');

// -----------------------------------------------------------------------------------------

// let sum = 0;

// (
//     function() {
//         for(let i = 1; i <= 5; i++) {
//             sum += i;
//         }
//         console.log(sum);
//     }
// )()

// ---------------------------------------------------------------------

