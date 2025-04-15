function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Student(name, age) {
  this.name = name;
  this.age = age;
}

function greet() {
  console.log(`Hi, ${this.name}`);
}

console.log(Person.prototype);
console.log(Student.prototype);

Person.prototype.personGreet = greet;
Student.prototype.studentGreet = greet;

console.log(Person.prototype);
console.log(Student.prototype);

const person1 = new Person("Raj", 45);
console.log(person1.__proto__);
person1.personGreet();

const student1 = new Student("Kailash", 16);
console.log(student1.__proto__);
student1.studentGreet();

const person2 = Object.create(person1);
console.log(person2);
console.log(person2.__proto__);
person2.name = "Soubhik";
person2.personGreet();

const student2 = Object.create(student1);
console.log(student2.__proto__);
student2.name = "Shefali";
student2.studentGreet();

// -----------------------------------------------------------------------

const obj1 = {
  name: "Mithun",
  age: 28,
  hello: function () {
    console.log(`Hello, ${this.name}, aged ${this.age}.`);
  },
};

const obj2 = Object.create(obj1);
console.log(obj2);
console.log(obj2.__proto__);
obj2.name = "Amit";
obj2.age = 34;
obj2.hello();

// ----------------------------------------------------------------------
