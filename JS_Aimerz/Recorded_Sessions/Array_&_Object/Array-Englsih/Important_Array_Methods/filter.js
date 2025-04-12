// filter() method :

// It filters out the array elements based on certain condition, and return an array.

// const arr1 = [1, 3, 5, 7, 6, 4];

// const filteredArray1 = arr1.filter((data, index) => index % 2 === 0);
// console.log(filteredArray1);

// const filteredArray2 = arr1.filter((data, index) => data % 2 !== 0);
// console.log(filteredArray2);

// -----------------------------------------------------------------------

// const fruits = ['apple', 'mangoes', 'banana', 'grapes'];

// const filteredFruits1 = fruits.filter((data, index) => data.endsWith('s'));
// console.log(filteredFruits1);
// console.log(fruits);

// const filteredFruits2 = fruits.filter((data, index) => data.startsWith('b'));
// console.log(filteredFruits2);

// ------------------------------------------------------------------------------------

// const arr = [1+undefined, NaN, 'Amit', 'Raj'];

// const filteredArray = arr.filter((data, index) => !Number.isNaN(data));
// console.log(filteredArray);

// --------------------------------------------------------------------------------------

// const decimals = [12.345, 67.0987, 76.24364, 789.954657];

// const fDecimals = decimals.map((data, index) => {
//     return Number.parseInt(data);
// });
// console.log(fDecimals);

// // -----------

// const roundingOff = decimals.map((data, index) => {
//     return Math.round(data);
// });
// console.log(roundingOff);

// ----------------------------------------------------------------------

// const nums = [2, 4, 6, 1, 3, 5];

// const divisibleBy3 = nums.filter((data, index) => data % 3 === 0);
// console.log(divisibleBy3);

// --------------------------------------------------------------------------------

// const nums = [1, 2, 3, 5, 7, 9, 10];
// const lessThan5 = nums.filter((data, index) => data <= 5 || data <= 9);
// console.log(lessThan5);

// ----------------------------------------------------------------------------------

// const names = ['sahistha', 'sikha', 'siksha', 'amit', 'raj', 'shilpa'];

// const myArray = names.filter((data, index) => {
//     return data.startsWith('s') && data.endsWith('a');
// });
// console.log(myArray);

// ------------------------------------------------------------------------------

