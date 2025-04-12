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

// personDetails.sayDetails.call(personDetails2);
// personDetails.greet("Good Morning");
// personDetails.greet.call(personDetails2, "Good Evening");

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

student1.giveDetails();
student1.greet("Good Morning");

const student2 = {
  id: 2,
  name: "Amit",
  roll_no: 2,
  age: 28,
};

student1.giveDetails.call(student2);
student1.greet.call(student2, "Good Evening");

// -------------------------------------------------------------------
