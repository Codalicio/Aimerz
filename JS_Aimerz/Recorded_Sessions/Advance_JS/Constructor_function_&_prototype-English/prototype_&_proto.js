function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`Hi, ${name}.`);
  };
}

function sayBye() {
  console.log(`Bye, ${this.name}.`);
}

console.log(Person.prototype);
Person.prototype.sayBye = sayBye;
console.log(Person.prototype);

const amit = new Person("Amit", 28);
console.log(amit);
console.log(amit.__proto__);
amit.sayHi();
amit.sayBye();

console.log(Person.prototype === amit.__proto__);
