// const personDetails = {
//   name: "Amit",
//   age: 28,
//   sayDetails: function () {
//     console.log(`${this.name} is ${this.age} years old!`);
//   },
//   greet: function (greeting) {
//     console.log(`Hello, ${greeting}! How are you ${this.name}?`);
//   },
// };

// const personDetails2 = {
//   name: "Sonu",
//   age: 30,
// };

// const arr = ["Good Evening"];

// personDetails.greet.apply(personDetails2, arr);

// ------------------------------------------------------------------------

const student1 = {
  id: 1,
  name: "Aakash",
  roll_no: 1,
  age: 19,
  giveDetails: function () {
    console.log(
      `Call ${this.name}, whose roll number is ${this.roll_no} and who is ${this.age} years old.`
    );
  },
  greet: function (greeting) {
    console.log(`Hi! ${greeting}, How are you ${this.name}? `);
  },
};

const student2 = {
  id: 2,
  name: "Amit",
  roll_no: 2,
  age: 28,
};

const greetingMessage = ["Good night"];

student1.giveDetails.apply(student2);
student1.greet.apply(student2, greetingMessage);

// ----------------------------------------------------------------------
