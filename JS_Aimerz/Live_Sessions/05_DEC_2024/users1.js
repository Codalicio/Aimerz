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

let currentUser = 1;

const userListing = () => {
  for (let user of usersDB) {
    console.log(user);
  }
};

const updateEmail = (newEmail) => {
  for (let user of usersDB) {
    if (user.id === currentUser) {
      user.email = newEmail;
    }
  }
};

const updatePassword = (newPassword) => {
  for (let user of usersDB) {
    if (user.id === currentUser) {
      user.password = newPassword;
    }
  }
};

userListing();
updateEmail("rajamitnine@gmail.com");
updatePassword("amitRaj@123456789");
userListing();

currentUser = 2;

userListing();
updateEmail("sonukumar@gmail.com");
updatePassword("kumarsonu@1359");
userListing();

// ------------------------------------------------------------------
