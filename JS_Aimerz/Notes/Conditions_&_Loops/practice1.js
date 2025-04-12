// Conditionals :

// let isRaining = true;
// let isSunny = !isRaining;

// if(isRaining) {
//     console.log(`Take an umbrella.`);
// } else {
//     console.log(`Wear sunglasses!`);
// };

// let score = 49;
// let attendance = 49;

// if(score > 0 && attendance >= 50) {
//     if(score >= 90 && attendance >= 75) {
//         console.log(`Grade A`);
//     } else if(score >= 80 && score < 90 && attendance >= 75) {
//         console.log("Grade B");
//     } else {
//         console.log('You need to improve!');
//     };
// } else {
//     console.log("Meet the principle.");
// };

// let age = 60;
// let ticketPrice;
// let isStudent = true;
// let itsWeekend = false;
// let itsWeekDay = !itsWeekend;

// if(age > 0 && age <= 100) {
//     if(age < 12) {
//         ticketPrice = 8;
//     } else if(age >= 12 && age < 18) {
//         if(isStudent) {
//             ticketPrice = 10;
//         } else {
//             ticketPrice = 12;
//         }
//     } else if(age >= 18 && age <= 60 && !isStudent) {
//         if(itsWeekend) {
//             ticketPrice = 15;
//         } else {
//             ticketPrice = 12;
//         };
//     } else if(age >= 18 && age <= 60 && isStudent) {
//         if(itsWeekend) {
//             ticketPrice = 14;
//         } else {
//             ticketPrice = 12;
//         };
//     } else {
//         ticketPrice = 9;
//     };
// };

// console.log(`Your Ticket Price : Rs.${ticketPrice}.`);

// let age = 17;

// if(age >= 18) {
//     console.log(`You can drive.`);
// } else {
//     console.log(`You cannot drive.`)
// }

// let customerAge = 30;
// let ticketPrice;

// if(customerAge < 12) {
//     ticketPrice = 8;
//     console.log(`Children under 12 : pay Rs.${ticketPrice}`);
// } else if(customerAge >= 12 && customerAge <= 64) {
//     ticketPrice = 12;
//     console.log(`Person aged between 12 and 64 : pay Rs.${ticketPrice}`);
// } else {
//     ticketPrice = 10;
//     console.log(`Senior Citizen : pay Rs.${ticketPrice}`);
// };

// const weatherCondition = 'rainy';
// const day = 'Sunday';
// let routine;

// if(weatherCondition === 'sunny' && day === 'Saturday') {
//     routine = 'Go to the beach!';
// } else if(weatherCondition === 'sunny' && day !== 'Saturday') {
//     routine = 'Go for hike in the park.'
// } else if(weatherCondition === 'rainy') {
//     routine = 'Visit the meuseum or watch a movie.';
// } else if(weatherCondition === 'snowy') {
//     routine = 'Go skiing or snowboarding.'
// } else {
//     routine = 'Stay indoors and relax!';
// };

// console.log(routine);

// let age = 19;
// const hasPassedDrivingTest = false;

// if(age >= 18) {
//     console.log(`You are eleigible to apply for a driver's license.`)
//     if(hasPassedDrivingTest) {
//         console.log(`You can get your drivers license.`);
//     } else {
//         console.log(`First, passed the driving test.`)
//     };
// } else {
//     console.log(`You are not eligible for a driver's license.`);
// };

// let age = 60;

// let isMember = false;
// let discount;

// if(age >= 60) {
//     discount = 25;
// } else {
//     if(isMember) {
//         discount = 10;
//     } else {
//         discount = 0;
//     };
// };

// console.log(discount);

// --------------------------------------------------------------------

// Loops :

// let sum = 0;
// for(let i = 1; i <= 5; i++) {
//     sum += i;
// };
// console.log(sum);

// let fName;
// while(fName !== 'Amit') {
//     fName = prompt("Enter your name");
//     console.log(fName);
// };

// let countStart = 5;

// while(countStart > 0) {
//     console.log(countStart);
//     countStart--;
// }

// let i = 5;
// do {
//     console.log(i);
//     i--;
// } while(i > 0);

// const fruit = 'apple';

// switch(fruit) {
//     case 'mango':
//         console.log('Mango  is yellow');
//         break;
//     case 'banana':
//         console.log('Banana is yummy.');
//         break;
//     case 'apple':
//         console.log('Apple is red!');
//         break;
//     default:
//         console.log("Invalid fruit selection.");
//         break;
// };

// const getFruitColor = fruit => {
//     switch(fruit) {
//         case 'banana':
//             return 'Yellow';
//         case 'water-melon':
//             return 'Pink';
//         case 'apple':
//             return 'Red';
//         default:
//             return 'Invalid fruit input!';
//     };
// };

// let color = getFruitColor('water-melon');
// console.log(color);

// let num = 5;

// switch(num) {
//     case '5':
//         console.log("Matched string '5'.");
//         break;
//     case 5:
//         console.log("Matched number 5.");
//         break;
//     default:
//         console.log("No match found!");
//         break;
// };

// * Nested switch statement :

// let fruit = 'apple';
// let color = "gold";

// switch(fruit) {
//     case 'banana':
//         console.log("Yellow banana");
//         break;
//     case 'apple':
//         switch(color) {
//             case 'red':
//                 console.log('Red apple');
//                 break;
//             case 'green':
//                 console.log('Green apple');
//                 break;
//             default:
//                 console.log('Apple must have other not mentioned color.');
//         };
//         break;
//     default:
//         console.log("Fruit not found");
//         break;
// };
