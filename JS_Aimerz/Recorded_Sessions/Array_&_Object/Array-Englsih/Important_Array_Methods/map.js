// map() : We can iterate over an array and it also it returns an array.
// It gives data and index of the data :

// const nums = [1, 2, 3, 4, 5];

// const mappedArray = nums.map((data, index) => {
//     return data*2;
// });

// console.log(mappedArray);

// ------------------------------------------------------------

// const nums = [1, 3, 4, 6, 5, 9];

// const myArray = nums.map((data, index) => data % 2);

// console.log(nums);
// console.log(myArray);

// ---------------------------------------------------------------------------

// const nums = [1, 5, 67, 3, 45];

// const newArray = nums.map((data, index) => {
//     data += 10;
//     index += 10;
//     return `${data} : ${index}`;
// });

// console.log(nums);
// console.log(newArray);

// -----------------------------------------------------------------------------------

// const personDetails = [
//     {
//         name: 'Amit',
//         age: 28,
//         place: 'Hajipur',
//     },
//     {
//         name: 'Sumit',
//         age: 30,
//         place: 'Sonepur',
//     },
//     {
//         name: 'Rohit',
//         age: 38,
//         place: 'Patna',
//     },
//     {
//         name: 'Saksham',
//         age: 25,
//         place: 'Kerala',
//     },
// ];

// const personAge = personDetails.map((data, index) => (data.age)+20);
// console.log(personAge);

// // -------

// const output = personDetails.map((data, index) => data.name.toUpperCase());
// console.log(output);

// -----------------------------------------------------------------------------------------

// const names = ['AMIT', 'RAJ', 'MITHUN', 'PRABIR', 'SANDEEPAK'];
// const myArray = names.map((data, index) => {
//     return data.toLowerCase();
// });
// console.log(myArray);

// ------------------------------------------------------------------------------

