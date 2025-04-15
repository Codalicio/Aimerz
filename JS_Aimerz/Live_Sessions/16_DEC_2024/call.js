// call method without parameters :

// const person1 = {
//   name: "Raj",
//   age: 34,
//   greet: function () {
//     console.log(this.name);
//   },
// };

// const person2 = {
//   name: "Amit",
//   age: 27,
// };

// person1.greet();
// person1.greet.call(person2);

// ----------------------------------------------------------------------------------

// call method with parameters :

const person1 = {
  name: "Amit",
  age: 28,
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}.`);
  },
};

const person2 = {
  name: "Sonu",
  age: 32,
};

person1.greet("Hello");
person1.greet.call(person2, "Good Morning");

// -------------------------------------------------------------------------
