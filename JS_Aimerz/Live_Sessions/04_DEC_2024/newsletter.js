const ourSubscribers = ["amit@aimerz.ai", "sonu@aimerz.ai"];

const SubscribeNow = (email) => {
  if (ourSubscribers.includes(email)) {
    console.log("You are already subscribed to our newsletter.");
    return;
  }
  if (email) {
    ourSubscribers.push(email);
    console.log(ourSubscribers);
    console.log("You are now subscribed to our newsletter.");
  } else {
    console.log("Invalid Input!");
  }
  return;
};

SubscribeNow("amit@aimerz.ai");
SubscribeNow("name@gmail.com");
