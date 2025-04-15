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

// apply method :

// * If we want to pass the arguments of the reused function as an array then, we use the apply method :

const person3 = {
  name: "Surbhi",
  age: 23,
};

const greetings = ["Hope you are good", "Hii"];

person1.greet.apply(person3, greetings);

// -----------------------------------------------------------------------------------

// bind() method : store in a variable and call whenever needed!

const person3Greet = person1.greet.bind(person3, ["Good evening"]);
person3Greet();

// --------------------------------------------------------------------------------------
