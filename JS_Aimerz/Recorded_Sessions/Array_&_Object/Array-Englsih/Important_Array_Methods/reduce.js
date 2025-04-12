// reduce() method :

// let nums = [2, 3, 5, 7, 6];
// const total = nums.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(total);

// ----------------------------------------------------------------

// const products = [
//     {
//         id: 1,
//         name: 'Laptop',
//         price: 95000,
//     },
//     {
//         id: 2,
//         name: 'Television',
//         price: 150000,
//     },
//     {
//         id: 3,
//         name: 'IPad',
//         price: 90000,
//     },
//     {
//         id: 1,
//         name: 'IPhone',
//         price: 115000,
//     },
// ];

// const totalCartPrice = products.reduce((totalPrice, currentProduct) => {
//     return totalPrice + currentProduct.price;
// }, 50000);
// console.log(totalCartPrice);

// -------------------------------------------------------------------------------

// const players = [
//     {
//         id: 1,
//         goals: 1,
//     },
//     {
//         id: 2,
//         goals: 2,
//     },
//     {
//         id: 3,
//         goals: 3,
//     },
//     {
//         id: 4,
//         goals: 4,
//     },
//     {
//         id: 5,
//         goals: 5,
//     },
// ];

// const totalGoals = players.reduce((accumulator, player) => {
//     return accumulator + player.goals;
// }, 0);
// console.log(totalGoals);

// ---------------------------------------------------------------------------------------

// const playerScore = [
//     {
//         id: 1,
//         score: 99,
//     },
//     {
//         id: 2,
//         score: 68,
//     },
//     {
//         id: 3,
//         score: 57,
//     },
//     {
//         id: 4,
//         score: 0,
//     },
//     {
//         id: 5,
//         score: 19,
//     },
// ];

// const totalScore = playerScore.reduce((accumulator, currentPlayer) => {
//     return accumulator + currentPlayer.score;
// }, 0);
// console.log(totalScore);

// const starPerformers = playerScore.filter((data, index) => {
//     return data.score > 50;
// });
// console.log(starPerformers);

// const des = starPerformers.sort((a, b) => (a.score - b.score));
// console.log(des);

// ------------------------------------------------------------------------------------------

