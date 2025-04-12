"use strict";

// In javascript, data are of two types :

// 1.) Primitive Data SVGUnitTypes(Immutable Data Types) :

// 1.1) Strings :

let fName = "Amit";
console.log(fName);
console.log(fName.length, typeof fName, fName[2]);

let lName = 'Raj';
console.log(lName, lName.length, typeof lName, lName[1]);

console.log("4" + 3);
console.log("4" + "3");
console.log("4" + false);

let fullName = "Amit Raj";
console.log(fullName, fullName.length, typeof fullName, fullName[5]);

// 1.2) Numbers :

let num1 = 12;
console.log(num1, typeof num1);

let num2 = 13.21;
console.log(num2, typeof num2, num2 - 13);

// 1.3) Boolean(true or false) :

let one = true;
console.log(one, typeof one, one.length, one[0], one + 96);

let two = false;
console.log(two, typeof two, two.length, two[1], two + 7);

// 1.4) BigInt(with suffix 'n') :

let num3 = 123n;
console.log(num3, typeof num3, num3 + 2n);

let num4 = 1023n + 27n;
console.log(num4, typeof num4);

// 1.5) Symbol :

let word1 = "Hello";
let word2 = 'Hello';
console.log(word1 === word2);

word1 = Symbol(word1);
console.log(word1 === word2);

// 1.6) undefined(not defined yet) :

let word3;
console.log(word3, typeof word3);

// 1.7) null(empty value) :

let word4 = null;
console.log(word4, typeof word4);

// 1.8) NaN(Not a Number) :

let a = 0 / 0;
console.log(a, typeof a);
