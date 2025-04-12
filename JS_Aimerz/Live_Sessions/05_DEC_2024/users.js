const usersDB = [
  {
    id: 1,
    email: "raj@google.com",
    password: "raj123",
  },
  {
    id: 2,
    email: "sonu@aimerz.ai",
    password: "sonu@123",
  },
];

const listUserDetails = () => {
  for (let user of usersDB) {
    console.log(user);
  }
};

let userLoggedInCurrently = 1;

const updateEmail = (newEmail) => {
  for (let user of usersDB) {
    if (user.id === userLoggedInCurrently) {
      user.email = newEmail;
      console.log(user);
    }
  }
};

const updatePassword = (newPassword) => {
  for (let user of usersDB) {
    if (user.id === userLoggedInCurrently) {
      user.password = newPassword;
      console.log(user);
    }
  }
};

listUserDetails();

updateEmail("amit@gmail.com");
updatePassword("qwerty@123");

userLoggedInCurrently = 2;

listUserDetails();

updateEmail("sonu123@gmail.com");
updatePassword("wdvohc@66897fgatl");

// ---------------------------------------------------------------------/
