function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello Mr.${name}.`);
  };
}
// Instance 1 of constructor function :
const amit = new Person("Amit", 28);
console.log(amit);
amit.sayHello();

// Instance 2 of constructor function :
const monu = new Person("Monu", 26);
console.log(monu);
monu.sayHello();
