// Conditionals : Making Decisions

// Write a program to check if a person can vote or not?

// constraints/input :  
// * Age should be minimum or equal to 18.
// * Should have a aadhar card.

// Output : A message.

// To test a program follow these three steps :
// 1. Take an obvious true case.
// 2. Take an obvious false case.
// 3. Test the edge case(s) condition.

// Program 1 using an arrow function and conitionals :
// let age = 1 + undefined;
// let hasAadharCard = 1;

// const vote = (age, hasAadharCard) => {
//     if(isNaN(age)) {
//         return "Invalid Input!";
//     } else if(age >= 18 && hasAadharCard) {
//         return "You can vote.";
//     } else {
//         return "You cannot vote!"
//     };
// };

// const result = vote(age, hasAadharCard);
// console.log(result);


// Program 1.1 using only conditionals :
// if(isNaN(age)) {
//     console.log("Invalid input!");
// } else if(age >= 18 && hasAadharCard) {
//     console.log("You can vote.");
// } else {
//     console.log("You cannot vote!");
// };

// ----------------------------------------------------------------

// Write a program to check if a number is even or odd?

// Input : A Number.
// Output : A Number.
// Edge Case : 0 is neither even nor odd.

// let num = -7;

// if(isNaN(num)) {
//     console.log("Invalid Input!");
// } else if(num === 0) {
//     console.log("Zero(0) is neither even nor odd.");
// } else if (num % 2 === 0) {
//     console.log(`The number ${num} is even.`);
// } else {
//     console.log(`The number ${num} is odd.`);
// };

// ------------------------------------------------------------------------

// Write a program to check if a user is logged in or not,
// if he/she is logged in then check,
// if the requested page is "/courses" or not,
// if so then send him/her to courses page,
// else send him/her to 404 page,
// also if the user is not logged in,
// send him/her to login page.

// Input : user's login status and requested page.
// Output : A MessageChannel.

// const isUserLoggedIn = true;
// const requestedPage = "/courses";

// if(isUserLoggedIn) {
//     if(requestedPage === '/courses') {
//         console.log("You are in courses page.");
//     } else {
//         console.log("You are in 404 page.");
//     };
// } else {
//     console.log("You are in login page.");
// };

// const isUserLoggedIn = false;
// const requestedPage = "/courses";

// if(isUserLoggedIn) {
//     if(requestedPage === "/courses") {
//         console.log("You are in /courses page.");
//     } else {
//         console.log("You are in 404 page.");
//     };
// } else {
//     console.log("You are in login page.");
// };

// ----------

// const userStatus = (loginStatus, reqPage) => {
//     if(loginStatus) {
//         if(reqPage === "/courses") {
//             return "You are in /courses page.";
//         } else if(reqPage === "/contact") {
//             return "You are in /contact page.";
//         } else {
//             return "You are in 404 page."
//         }
//     } else {
//         return "You are in login page."
//     };
// };

// const result = userStatus(false, "/contact");
// console.log(result);

// -------------------------------------------------------------

// Question 1 :
// * Write a program that determines whether a given number is positive or negative?

// Input : A number
// Output : A message

// let number = -1;

// if(number === 0) {
//     console.log(`The number ${number} is neither positive nor negative.`);
// } else if(number > 0) {
//     console.log(`The number ${number} is positive.`);
// } else {
//     console.log(`The number ${number} is negative.`);
// };

// -------------------------------------------------------------

// Question 2 :
// * Write a program that checks if a number is even or odd?

// Input : A number
// Output : A message

// let number = 90;

// if(number === 0) {
//     console.log(`The number ${number} is neither even nor odd.`);
// } else if (number % 2 === 0) {
//     console.log(`The number ${number} is even.`);
// } else {
//     console.log(`The number ${number} is odd.`);
// };

// -----------------------------------------------------------

// Question 3 :

// * Write a program to determine the greater of two numbers?

// Input : A number
// Output : A message

// Method - 1 :

// let num1 = 3;
// let num2 = 7;

// if(isNaN(num1) || isNaN(num2)) {
//     console.log(`One or both is not a number(NaN). Invalid Input!`);
// } else if (num1 === num2) {
//     console.log(`The num1 is equal to num2.`);
// } else if (num1 > num2) {
//     console.log(`The num1 is greater than num2.`);
// } else {
//     console.log(`The num2 is greater than num1.`);
// };

// ------------

// Method - 2 :
// let num1 = 90;
// let num2 = 7;

// if(!isNaN(num1) && !isNaN(num2)) {
//     if(num1 === num2) {
//         console.log(`num1 is equal to num2.`);
//     } else if(num1 > num2) {
//         console.log(`num1 is greater than num2.`);
//     } else {
//         console.log(`num2 is greater than num2.`);
//     };
// } else {
//     console.log(`One or both is not a number(NaN). Thus, invalid input!`);
// };

// ----------------------------------------------------------------------------

// Question 4 :

// * Write a program that transforms a numerical grade to a letter grade(else.g. grade 10 should display 'A')?

// Input : numerical grade
// Output : letter grade

// let numericalGrade = 10.00001;

// if(numericalGrade < 0 || numericalGrade > 10) {
//     console.log("Invalid Input!");
// } else if(numericalGrade >= 9) {
//     console.log('A');
// } else if(numericalGrade >= 8) {
//     console.log('B');
// } else if(numericalGrade >= 7) {
//     console.log('C');
// } else if(numericalGrade >= 6) {
//     console.log('D');
// } else if(numericalGrade >= 5) {
//     console.log('E');
// } else {
//     console.log('FAIL');
// };

// -----------------------------------------------------------------------------

// Question 5 :

// * Write a program that calculates the ticket price based on age with the following conditions : 
// - age below 12 pay a ticket price of 5,
// - age below 18 pay a ticket price of 10,
// - age below 60 pay a ticket price of 20, and
// - age above 60 pay a ticket price of 15.

// Input: AggregateError(number)
// Output = A message

// const age = undefined;
// let ticketPrice;

// if(!isNaN(age) && age > 0) {
//     if(age <= 12) {
//         ticketPrice = 5;
//     } else if(age <= 18) {
//         ticketPrice = 10;
//     } else if(age <= 60) {
//         ticketPrice = 20;
//     } else {
//         ticketPrice = 15;
//     };
// } else {
//     console.log("Please enter a valid number.");
// };

// console.log(`Your ticket price is ${ticketPrice} rupees.`);

// ------------------------------------------------------------------------

// Question 6 :
// * Write a program that determines if a year is a leap year?

// Input: Year(number)
// Output: A message

// let yearToCheck = null;

// if(!isNaN(yearToCheck) && yearToCheck !== null) {
//     if((yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) || yearToCheck % 400 === 0) {
//         console.log(`The year ${yearToCheck} is a Leap year.`);
//     } else {
//         console.log(`The year ${yearToCheck} is not a leap year`);
//     };
// } else {
//     console.log(`Enter a valid numerical year.`);
// };

// -----------------------------------------------------------------------

// Question 7 :

// * Write a program that calculates a discount based on the purchase amount.
// - Prices equal or over 100 have a discount of 20.
// - Prices equal or over 50 have a discount of 10.
// -Otherwise discount is 0.

// Input: Purchase amount
// Output: Discounted price

// let purchaseAmount = 1906;
// let discount;
// let priceUponDiscount = 0;

// if(!isNaN(purchaseAmount) && purchaseAmount > 0) {
//     if(purchaseAmount < 50) {
//         discount = 0;
//         priceUponDiscount = purchaseAmount - discount;
//     } else if(purchaseAmount >= 50 && purchaseAmount < 100) {
//         discount = 10;
//         priceUponDiscount = purchaseAmount - discount;
//     } else {
//         discount = 20;
//         priceUponDiscount = purchaseAmount - discount;
//     };
// } else {
//     console.log(`To get a discount, purchase something first!`);
// };

// console.log(`Your total bill is ${priceUponDiscount} and you got a discount of ${discount} rupees.`);

// ---------------------------------------------------------------------------------------------------------------

// Question 8 :

// * Write a program that greets the user based on the time of day.
// - Dispaly good morning, good afternoon or good evening based on the time of day when you run the code.

// Input: time of the day
// Output: A greet message

// let currentTime = new Date();
// let currentHour = currentTime.getHours()

// if(currentHour < 12) {
//     console.log("Good morning!");
// } else if(currentHour < 18) {
//     console.log("Good afternoon!");
// } else {
//     console.log("Good evening");
// };

// ----------------------------------------

// let currentTime = new Date();
// let currentDay = currentTime.getDay();
// let currentMonth = currentTime.getMonth();
// let currentYear = currentTime.getFullYear();

// console.log(`Today is ${currentDay}/${currentMonth}/${currentYear}`);
// console.log(currentMonth);

// -----------------------------------------------------------------------------------------

// Question 9 :

// * Write a program that calculates the Body Mass indexedDB(BMI) and categorizes it.
// - The formula for BMI is : weight/(height * height).

// Input : weight(in kilograms) and height(im neters) - numbers
// Output: category message(string)

// let weight = 60;
// let height = 1.75;
// let bmi = weight/(height * height);
// let category;

// if(!isNaN(bmi) && bmi != null && bmi > 0) {
//     if(bmi < 18.5) {
//         category = "under-weight";
//     } else if(bmi < 24.9) {
//         category = "normal-weight";
//     } else if(bmi < 29.9) {
//         category = "over-weight";
//     } else {
//         category = "obese";
//     }
// } else {
//     console.log("Invalid input!");
// };

// console.log(`Your BMI is : ${bmi.toFixed(2)}, and you are/have ${category}.`);

// ------------------------------
// console.log(19.501.toFixed());
// ------------------------------

// ----------------------------------------------------------------------------------------

// Question 10 :

// * Write a simple number guessing game.
// - Provide a secret number and a guess.
// - Based on those numbers give players clues if their guess is higher, lower or correct.

// Input : A secret number and a guess numebr(number)
// Outout : A message : higher, lower or correct

// let winningNumber = 25;
// let userGuess = 25;
// let finalMessage;

// if(!isNaN(userGuess) && userGuess !== null && userGuess > 0 && userGuess <= 50) {
//     if(userGuess === winningNumber) {
//         finalMessage = `Your guess number ${userGuess} is a correct guess - You won!.`;
//     } else if(userGuess < winningNumber) {
//         finalMessage = `Your guess number ${userGuess} is slightly lower.`;
//     } else {
//         finalMessage = `Your guess number ${userGuess} is slightly higher.`;
//     };
// } else {
//     finalMessage = "Invalid Input";
// };

// console.log(`Final Output : ${finalMessage}`);


// ------------------------------------------------------------------------------------------

// Question 11 :
// * Check if a triangle is an equilateral triangle.
// - Given its three sides.

// Input : All three sides of a triangle. (number)
// Output : A message (string)

// let message;
// let side1 = 60;
// let side2 = 60;
// let side3 = 40;

// if(side1 === side2 && side2 === side3) {
//     message = `Yes it's an equilateral triangle.`;
// } else {
//     message = `No, it's not an equilateral triangle.`;
// };

// console.log(`Output : ${message}`);

// ---------------------------------

// Method 2 :

// const arr = [50, 90, 50];
// let message;

// for(let i = 0; i < 1; i++) {
//     if(arr[i] === arr[i + 1] && arr[i + 1] === arr[arr.length - 1]) {
//         message = `Yes, It's an equilateral triangle.`;
//     } else {
//         message = `No, its not an equilateral triangle.`;
//     };
// };

// console.log(`Output : ${message}`);

// ------------------------------------------------------------------------------------------

// Question 12 :

// * Determine the season based on the month.
// - March to May : Spring
// - June to August : Summer
// - September to November : Autumn
// - Otherwise winter

// let monthNumber = 2;
// let message;

// if((!isNaN(monthNumber) && monthNumber !== null) && (monthNumber > 0 && monthNumber <= 12)) {
//     if(monthNumber >= 3 && monthNumber <= 5) {
//         message = "It's Spring.";
//     } else if(monthNumber >= 6 && monthNumber <= 8) {
//         message = "It's Summer.";
//     } else if(monthNumber >= 9 && monthNumber <= 11) {
//         message = "It's Autumn.";
//     } else {
//         message = "It's winter!"
//     };
// } else {
//     message = "Invalid Input!";
// };

// console.log(`Output : ${message}`);

// -------------------------------------------------------------------------------------

// Question 13 :
// * Determine whether a string is empty or not?

// Input : A string (string)
// Output : A message

// let str = 12;
// let formattedStr = String(str);

// if(formattedStr === "") {
//     console.log(`Yes the passed string is an empty string.`);
// } else{
//     console.log(`No It's not an empty string.`);
// };

// --------------------------------------------------------------------------------------

// Question 14 :
// * Check if a number is within a specific range?

// Input : minRange value(number) and maxRange value(number)
// Output : True or false

// let minRange = 25; 
// let maxRange = 75;
// let inputNum = 76;

// if(inputNum >= minRange && inputNum <= maxRange) {
//     console.log(`It lies between the range.`);
// } else  {
//     console.log(`It doesn't lies between the range.`);
// };

// --------------------------------------------------------------------------------

