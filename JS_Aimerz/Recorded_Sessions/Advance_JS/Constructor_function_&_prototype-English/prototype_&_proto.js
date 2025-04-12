// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHi = function () {
//     console.log(`Hi, ${this.name}.`);
//   };
// }

// function sayBye() {
//   console.log(`Bye, ${this.name}.`);
// }

// console.log(Person.prototype);
// Person.prototype.sayBye = sayBye;
// console.log(Person.prototype);

// const amit = new Person("Amit", 28);
// console.log(amit);
// console.log(amit.__proto__);
// amit.sayHi();
// amit.sayBye();

// console.log(Person.prototype === amit.__proto__);

// Prototype Inheritance :

// const Student = Object.create(amit);
// console.log(Student);
// console.log(Student.__proto__);
// Student.name = "Sonu";
// console.log(Student.__proto__);
// Student.sayHi();
// Student.sayBye();

// --------------------------------------------------------------------

function Person(name) {
  this.name = name;
  this.sayHi = function () {
    console.log(`Hi, ${this.name}.`);
  };
}

function sayBye() {
  console.log(`Bye, ${this.name}.`);
}

console.log(Person.prototype);

Person.prototype.sayBye = sayBye;

console.log(Person.prototype);

const monu = new Person("Monu");
console.log(monu);
console.log(monu.__proto__);
monu.sayHi();
monu.sayBye();

const Student = Object.create(monu);
Student.name = "Prabir";
console.log(Student.__proto__);
Student.sayHi();
Student.sayBye();

// ---------------------------------------------------------------------
