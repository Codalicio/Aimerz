// call method without parameters :

const person1 = {
  name: "Raj",
  age: 34,
  greet: function () {
    console.log(this.name);
  },
};

const person2 = {
  name: "Amit",
  age: 27,
};

person1.greet();
person1.greet.call(person2);

// ----------------------------------------------------------------------------------
