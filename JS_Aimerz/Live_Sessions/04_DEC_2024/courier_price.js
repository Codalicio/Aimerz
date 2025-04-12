function CourierPackagePrice(distance, weight, packageCount) {
  if (distance <= 0 || weight <= 0 || packageCount === 0) {
    return "Invalid Input!";
  }

  let totalPrice = 0;

  if (distance <= 50 && weight <= 50) {
    totalPrice = 15;
    totalPrice *= packageCount;
    return totalPrice;
  } else if (distance <= 50 && weight <= 200) {
    totalPrice = 25;
    totalPrice *= packageCount;
    return totalPrice;
  } else if (distance <= 50 && weight <= 500) {
    totalPrice = 35;
    totalPrice *= packageCount;
    return totalPrice;
  } else if (distance <= 200 && weight <= 50) {
    totalPrice = 35;
    totalPrice *= packageCount;
    return totalPrice;
  } else if (distance <= 200 && weight <= 200) {
    totalPrice = 40;
    totalPrice *= packageCount;
    return totalPrice;
  } else if (distance <= 200 && weight <= 500) {
    totalPrice = 45;
    totalPrice *= packageCount;
    return totalPrice;
  } else if (distance <= 1000 && weight <= 50) {
    totalPrice = 45;
    totalPrice *= packageCount;
    return totalPrice;
  } else if (distance <= 1000 && weight <= 200) {
    totalPrice = 50;
    totalPrice *= packageCount;
    return totalPrice;
  } else if (distance <= 1000 && weight <= 500) {
    totalPrice = 60;
    totalPrice *= packageCount;
    return totalPrice;
  } else if (distance <= 2000 && weight <= 50) {
    totalPrice = 60;
    totalPrice *= packageCount;
    return totalPrice;
  } else if (distance <= 2000 && weight <= 200) {
    totalPrice = 70;
    totalPrice *= packageCount;
    return totalPrice;
  } else if (distance <= 2000 && weight <= 500) {
    totalPrice = 90;
    totalPrice *= packageCount;
    return totalPrice;
  } else if (
    distance > 2000 &&
    distance <= 5000 &&
    (weight <= 50 || weight <= 200 || weight <= 500)
  ) {
    totalPrice = 110;
    totalPrice *= packageCount;
    return totalPrice;
  } else {
    return "We are not supporting the request made.";
  }
}

// console.log(
//   CourierPackagePrice(3000, 200, 1) + CourierPackagePrice(3000, 200, 1)
// );

const totalAmount = (a, b) => {
  return a + b;
};

console.log(
  totalAmount(
    CourierPackagePrice(2001, 500, 1),
    CourierPackagePrice(2007, 300, 1)
  )
);
