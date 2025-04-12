// const personDetails = {
//   name: "Amit",
//   age: 28,
//   sayDetails: function () {
//     console.log(`${this.name} is ${this.age} years old!`);
//   },
// };

// personDetails.sayDetails();

// ------------------------------------------------------------------

// const student1 = {
//   id: 1,
//   name: "Aakash",
//   roll_no: 1,
//   age: 19,
//   giveDetails: function () {
//     console.log(
//       `Call ${this.name}, whose roll number is ${this.roll_no} and who is ${this.age} years old.`
//     );
//   },
//   greet: function (greeting) {
//     console.log(`Hi! ${greeting}, How are you ${this.name}? `);
//   },
// };

// student1.giveDetails();
// student1.greet("Good Morning");

// -----------------------------------------------------------------------

// const person1 = {
//   name: "Raj",
//   age: 26,
//   address: "Hajipur",
//   printDetails: function () {
//     console.log(
//       `${this.name} is ${this.age} years old and he lives at ${this.address}.`
//     );
//   },
//   greetPerson: function (greetMessage) {
//     console.log(
//       `Hello, ${this.name} ${greetMessage}, How are you today, Mr.${this.name}?`
//     );
//   },
// };

// const person2 = {
//   name: "Amit",
//   age: 28,
//   address: "Chhapra",
// };

// const person3 = {
//   name: "Sumit",
//   age: 25,
//   address: "Patna",
// };

// person1.printDetails();
// person1.greetPerson("Good Morning");

// person1.printDetails.call(person2);
// person1.printDetails.apply(person2);
// const output = person1.printDetails.bind(person2);
// output();

// person1.printDetails.call(person3);
// person1.printDetails.apply(person3);
// const output1 = person1.printDetails.bind(person3);
// output1();

// person1.greetPerson.call(person2, "Good Evening");
// person1.greetPerson.apply(person2, ["Good Night"]);
// const output2 = person1.greetPerson.bind(person2);
// output2("Good to see you!");

// person1.greetPerson.call(person3, "Good Evening");
// person1.greetPerson.apply(person3, ["Good Night"]);
// const output3 = person1.greetPerson.bind(person3);
// output3("Good to see you!");

// ---------------------------------------------------------------------------------------
