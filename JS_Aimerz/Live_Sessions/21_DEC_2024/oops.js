// OOPs : OOPs stands for 'Object Oriented Programming System'.

// OOJS : Object Oriented JavaScript :

// In OOJS, we use classes and object :
// * Classes are the syntactical sugar of the constructor function.
// * And Instances are referred to as objects here in OOJS.

// OOPs has mainly four pillars :
// 1. Encapsulation : Can be achieved using the : constructor()

// 2. Abstraction : Can be achieved using getters and setters, getters and setters are not methods they are properties of the classes and we can achieve abstraction by defining checks or requirements inside the setters property of the class.

// 3. Inheritance : Can be achieved by using extends keyword and super(). Suppose, there is a class 'Person' with name, age and place initialized inside its constructor function and we want to create an another class 'Student' that also has the same properties like name, age, place, with one exception, i.e., grade. So to avoid code duplication and also Student can inherit the properties of Person we will use the 'extends' keyword and use the class Person as Parent(just in Context) and inherit the similar properties using the super() method inside the constructor of the Student class and thus, it will avoid code duplication and also the methods of the parent(Person) will be made available to the child(Student) for use.

// 4. Polymorphism : Same thing with different forms : We can achieve this by defining the same method inherited from the parent(Person) inside the child(Student) class with the desired modifications.

// -----------------------------------------------------------------------

// Encapsulation :
// class Person {
//   constructor(name, age, place) {
//     // Initializations
//     this.name = name;
//     this.age = age;
//     this.place = place;
//   }
//   // Methods
//   sayDetails() {
//     console.log(
//       `Person's name is : ${this.name}, aged : ${this.age}, from : ${this.place}.`
//     );
//   }
// }

// function sayBye() {
//   console.log(`For the time being, Bye, ${this.name}`);
// }

// console.log(Person.prototype);
// Person.prototype.sayByeBye = sayBye;
// console.log(Person.prototype);

// const amit = new Person("Amit Raj", 28, "Bihar");
// console.log(amit);
// amit.sayDetails();
// console.log(amit.__proto__);
// amit.sayByeBye();

// const sumit = Object.create(amit);
// console.log(sumit);
// console.log(sumit.__proto__);
// sumit.name = "Sumit";
// sumit.age = 34;
// sumit.place = "Bombay";
// sumit.sayByeBye();
// sumit.sayDetails();

// --------------------------------------------------------------------

// * Inheritance and Polymorphism :
// class Person {
//   constructor(name, age, place, occupation) {
//     this.name = name;
//     this.age = age;
//     this.place = place;
//     this.occupation = "Unemployed";
//   }
//   sayDetails() {
//     console.log(
//       `Name : ${this.name}, Age : ${this.age}, Place : ${this.place} and Occupation : ${this.occupation}.`
//     );
//   }
// }

// class Student extends Person {
//   constructor(name, age, place, grade) {
//     super(name, age, place);
//     this.occupation = "Student";
//     this.grade = grade;
//   }
//   sayDetails() {
//     console.log(
//       `Student's Name : ${this.name}, having grade : ${this.grade} and Occupation : ${this.occupation}.`
//     );
//   }
// }

// const person1 = new Person("Amit", 29, "Bihar");
// console.log(person1);
// person1.sayDetails();

// const student1 = new Student("Prabir", 19, "Orissa", 95);
// console.log(student1);
// student1.sayDetails();

// -----------------------------------------------------------------

// Abstraction :
class Person {
  constructor(name, age, place) {
    this._name = name;
    this.age = age;
    this.place = place;
  }

  get getPersonName() {
    return this._name;
  }

  set setPersonName(newName) {
    this._name = newName;
  }
}

const person1 = new Person("Sonu Kumar", 27, "Bihar");
console.log(person1);

console.log(person1.getPersonName);
person1.setPersonName = "Amit Raj";
console.log(person1.getPersonName);

// --------------------------------------------------------------------
