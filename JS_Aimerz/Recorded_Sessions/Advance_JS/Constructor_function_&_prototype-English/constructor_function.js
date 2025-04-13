// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHello = function () {
//     console.log(`Hello Mr.${name}.`);
//   };
// }

// Instance 1 of constructor function :
// const amit = new Person("Amit", 28);
// console.log(amit);
// amit.sayHello();

// Instance 2 of constructor function :
// const monu = new Person("Monu", 26);
// console.log(monu);
// monu.sayHello();

// ----------------------------------------------------------------

// function Animal(name, type) {
//   this.name = name;
//   this.type = type;
//   this.animalDetail = function () {
//     console.log(`I am a ${name}.`);
//   };
// }

// Instance 1 of constructor function(Animal) :
// const dog = new Animal("dog", "pet");
// console.log(dog);
// dog.animalDetail();

// Instance 2 of constructor function(Animal) :
// const cat = new Animal("cat", "wild");
// console.log(cat);
// cat.animalDetail();

// ---------------------------------------------------------------------------------------

// function Car(model, brand) {
//   this.model = model;
//   this.brand = brand;
//   this.carDetails = function () {
//     console.log(`I drive ${brand} ${model}.`);
//   };
// }

// instance-1 of constructor function (Car) :
// const bmw = new Car("7-series", "BMW");
// console.log(bmw);
// bmw.carDetails();

// instance-2 of constructor function (Car) :
// const tata = new Car("Tiago", "Tata");
// console.log(tata);
// tata.carDetails();

// -----------------------------------------------------------------------------------

// * instanceof operator
// console.log(tata instanceof Car);
// console.log(bmw instanceof Car);
// console.log(tata instanceof Object);

// -----------------------------------------------------------------------------------

function Human(name, age, country) {
  this.name = name;
  this.age = age;
  this.country = country;
  this.giveDetails = function () {
    console.log(
      `Hi, my name is ${this.name}, I am ${this.age} years old, all the way from ${this.country}.`
    );
  };
}

const me = new Human("Amit", 28, "India");
console.log(me);
console.log(me.__proto__);
me.giveDetails();

console.log(Human.prototype);

function constructorVariables() {
  console.log(
    `Name : ${this.name}, Age : ${this.age} and Country : ${this.country}.`
  );
}

Human.prototype.constructorVariables = constructorVariables;

console.log(Human.prototype);
console.log(me.__proto__);
me.constructorVariables();

// ---------- Prototype Inheritance

const Student = Object.create(me);
console.log(Student);
Student.name = "Robert";
Student.age = 32;
Student.country = "France";
console.log(Student.__proto__);
Student.giveDetails();
Student.constructorVariables();

// -----------------------------------------------------------------
