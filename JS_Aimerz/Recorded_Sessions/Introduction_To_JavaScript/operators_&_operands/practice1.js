"use strict";

// Operators & operands :

// Operation : Addition
// Operator : +
// Operands : 4, 3

// console.log(4 + 3);

// 1.) Arithmetic operators(+, -, *, /, **, %) :

// const x = 12;
// const y = 3

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x ** y);
// console.log(x % y);

// Assignment Operator :

// let num = 9;
// num += 7;
// console.log(num);

// let num1 = 4;
// num1 **= 2;
// num1 += 9;
// console.log(num1);

// let cart = 1000;
// cart += 200;
// console.log(cart);

// Comparison operator :

// == (equality operator) and === (Strictly equal or not) :

// let a = 10; // value = 10, type = number
// let b = "10"; // value = 10, type = string

// console.log(a == b); // will check only values
// console.log(a === b); // will check both values and type

// The return type of comparison operators is a Boolean(true or false).

// Logical operators (and, or and not) : Compares two or more expessions

// && : I will return true if all the conditions are true.
// || : It will return true if atleast one condition is true.
// ! : It will just reverse the input

// console.log(true && true);
// console.log(true && false);
// console.log(10 < 15 || 10 > 15);
// console.log(!true);
// console.log(!(5 > 3));

// Unary operator :

// typeof operator :

// let a = NaN;
// let b = null;
// console.log(typeof a, typeof b);

// Increment and decrement operator :

// let a1 = 10;
// console.log(a1++);
// console.log(++a1);

// let a2 = 10;
// a2++;
// console.log(a2);

// let a3 = 10;
// console.log(++a3);

// let b1 = 10;
// ++b1;
// console.log(b1++);

// -----------------------------------------------

// const _name = 'Raj';
// console.log(_name);

// console.log(null != undefined);
// console.log(null !== undefined);

// Nullish coalescing :

// let name = "Raj";
// console.log(name ?? "Amit");

// const age = 25;
// const hasDrivingLiscense = true;
// const isEligibleToDrive = age >= 18 && hasDrivingLiscense;
// console.log(isEligibleToDrive);

// const num1 = 20;
// const num2 = 40;
// const num3 = 20;

// const result1 = num1 >= num3 || num1 == num3;
// console.log(result1);

// const result2 = num1 >= num2 || num1 == num3;
// console.log(result2);

// const result3 = num1 >= num2 || num1 > num3;
// console.log(result3);

// Example : Checking product availability :

// const productInStock = true;
// const productOnSale = false;
// const isProductAvaialble = productInStock || productOnSale;
// console.log(isProductAvaialble);

// let num1 = 10;
// let num2 = 10;
// let result = !(num1 == num2);
// console.log(result);

// let isDarkModeEnabled = true;
// let isDarkModeDisabled = !isDarkModeEnabled;
// console.log(isDarkModeDisabled);

// Unary plus(+) operator :

// let num1 = "78";
// num1 = +num1;
// console.log(num1, typeof num1);

// let strNumber = "5";
// let number = +strNumber;
// console.log(`Original string : ${strNumber}, ${typeof strNumber}`);
// console.log(`Converted number : ${number}, ${typeof number}`);

// Unary negation(-) operator :

// let num = -10;
// let value = -num;
// console.log(value, typeof value);

// let debt = -500;
// let assets = 1000;
// let networth = debt + assets;
// console.log(networth);

// let isSunny = false;
// let isRainy = !isSunny;
// console.log(isRainy);

// let count = 7;
// count++;
// console.log(count);

// let inventory = 8;
// inventory--;
// console.log(inventory);

// console.log(void 0);
// console.log(void(1));
// console.log(void(2 === 2));
// console.log(void "Hello");
// console.log(void {});
// console.log(void []);

// let person = {
//     name: 'Prabir',
//     age: 25,
// }

// delete person.age;
// console.log(person);

// let arr = [1, 2, 3];
// delete arr[1];
// console.log(arr);

// const age = 18;
// const canVote = age > 18 ? 'Yes' : age === 18 ? 'Ofcourse' : 'No';
// console.log(canVote);

// String Concatenation :

// let firstName = 'John';
// let lastName = 'Doe';
// const fullName = firstName + " " + lastName;
// console.log(fullName);

// Comma(,) Operator :

// let x = 1;
// (x++, x += 2, x *= 3);
// console.log(x);

// Member Access Operators(for objects) :

// const person = {
//     firstName: 'Amit',
//     lastName: 'Raj',
// };

// console.log(person['firstName']);
// console.log(person.lastName);

// class Animal {
//     constructor(name) {
//         this.name = name;
//     };
// };

// const dog = new Animal('Rex');
// console.log(dog instanceof Animal);

// const cat = {
//     name : 'Whiskers'
// };
// console.log(cat instanceof Animal);

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     };
// };

// const amit = new Person("Amit Raj", 28);
// console.log(amit instanceof Person);

// const sonu = {
//     name: 'Sonu',
//     age: 27,
// }
// console.log(sonu instanceof Person);

// parseInt() :

// Convert binary(base 2) to decimal(base 10) :
// const binaryValue = '1101';
// const decimalEquivalent = parseInt(binaryValue, 2);
// console.log(decimalEquivalent);

// Conver decimal(base 10) to binaryValue(base 2) :
// const decimalValue = 50;
// const binaryEquivalent = parseInt(decimalValue, 10).toString(2);
// console.log(binaryEquivalent);

// const decimalNum = 100;
// const binaryEquivalent = parseInt(decimalNum, 10).toString(2);
// console.log(binaryEquivalent);

// const binaryValue = '1100100';
// const decimalEquivalent = parseInt(binaryValue, 2);
// console.log(decimalEquivalent);

// const decimalValue = 50;
// const binaryEquivalent = parseInt(decimalValue, 10).toString(2);
// console.log(binaryEquivalent);

// const binaryValue = '11010';
// const decimalEquivalent = parseInt(binaryValue, 2);
// console.log(decimalEquivalent);

// decimal : 45
// binary : 100101

// const decimalValue = 45;
// const binaryEquivalent = parseInt(decimalValue, 10).toString(2);
// console.log(binaryEquivalent);

// const binaryValue = '100101';
// const decimalEquivalent = parseInt(binaryValue, 2);
// console.log(decimalEquivalent);

// const decimalValue = 200;
// const binaryEquivalent = parseInt(decimalValue, 10).toString(2);
// console.log(binaryEquivalent);

// const binaryValue = '11001000';
// const decimalEquivalent = parseInt(binaryValue, 2);
// console.log(decimalEquivalent);

