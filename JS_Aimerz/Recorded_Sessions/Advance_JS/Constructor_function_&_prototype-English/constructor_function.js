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
// const monu = new Person("Monu", 26);
// console.log(monu);
// monu.sayHello();

// ----------------------------------------------------------------

function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.animalDetail = function () {
    console.log(`I am a ${name}.`);
  };
}

// Instance 1 of constructor function(Animal) :
const dog = new Animal("dog", "pet");
console.log(dog);
dog.animalDetail();

const cat = new Animal("cat", "wild");
console.log(cat);
cat.animalDetail();
