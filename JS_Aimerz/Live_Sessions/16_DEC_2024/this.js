const person = {
  name: "Amit",
  age: 28,
  greet: function () {
    console.log(this);
  },
};

person.greet();

// -----------------------------------------------------------------

// const person1 = {
//   name: "Sonu",
//   age: 27,
//   greet: function () {
//     console.log(`Hello ${this.name}.`);
//   },
// };

// person1.greet();

// -----------------------------------------------------------------

// const person2 = {
//   name: "Monu",
//   age: 25,
//   greet: function (x) {
//     if (x === 0) {
//       return;
//     }
//     console.log(x);
//     this.greet(x - 1);
//   },
// };

// person2.greet(5);

// --------------------------------------------------------------------
