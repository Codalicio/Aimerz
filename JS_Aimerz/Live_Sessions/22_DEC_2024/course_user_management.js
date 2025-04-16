// User Course Management System :

// User class :
// name: String
// email: String
// password: String
// isverified: Boolean
// coursesEnrolled: Array

// Course class :
// name: String
// price: Number

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.isVerified = false;
    this.courseEnrolled = [];
  }
  //   Methods :
  verifyUser() {
    this.isVerified = true;
  }

  enrollToACourse(course) {
    this.courseEnrolled.push(course);
  }
}

class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
const user1 = new User("Amit R", "rajamitnine@gmail.com", "rajamit@123");
console.log(user1);

const fsd = new Course("Full Stack Development", 9000);
console.log(fsd);

console.log(user1);

user1.verifyUser();
console.log(user1);
user1.enrollToACourse(fsd);
console.log(user1);

// --------------------------------------------------------------------
