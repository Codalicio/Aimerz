// Question : Calculate Electricity Bill.
// - Write a function calculateElectricityBill that calculates the total electricity bill on units consumed and the cost per unit.

function calculateElectricityBill(units, costPerUnit) {
  return `Rs.${(units * costPerUnit).toFixed(2)}`;
}

console.log(calculateElectricityBill(25, 5.3));
console.log(calculateElectricityBill(100, 10));
console.log(calculateElectricityBill(0, 5));

// -----------------------------------------------------------------
