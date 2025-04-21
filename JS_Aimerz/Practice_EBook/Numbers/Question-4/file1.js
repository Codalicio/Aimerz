// Question : Optimising Price Calculation with Bulk Discount.
// - Write a function calculateBulkDiscount that calculates tthe total cost for bulk orders, applying a discount when the quantity exceeds a threshold.

// function calculateBulkDiscount(
//   price,
//   quantity,
//   discountThreshold,
//   discountRate
// ) {
//   if (quantity >= discountThreshold) {
//     return price * quantity - (discountRate / 100) * (price * quantity);
//   } else {
//     return price * quantity;
//   }
// }

// console.log(calculateBulkDiscount(50, 10, 10, 10));
// console.log(calculateBulkDiscount(50, 15, 10, 10));
// console.log(calculateBulkDiscount(50, 5, 10, 10));
// console.log(calculateBulkDiscount(100, 20, 15, 20));

// --------------------------------------------------------------------------

const calculateBulkDiscount = (
  price,
  quantity,
  discountThreshold,
  discountRate
) => {
  if (quantity >= discountThreshold) {
    return price * quantity - (discountRate / 100) * (price * quantity);
  } else {
    return price * quantity;
  }
};

console.log(calculateBulkDiscount(50, 10, 10, 10));
console.log(calculateBulkDiscount(50, 15, 10, 10));
console.log(calculateBulkDiscount(50, 5, 10, 10));
console.log(calculateBulkDiscount(100, 20, 15, 20));

// ----------------------------------------------------------------------
