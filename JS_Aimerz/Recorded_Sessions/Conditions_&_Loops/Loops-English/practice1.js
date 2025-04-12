// Loops :

// Problem : Prepare pizza based on number of pizzas.
// Input : Number of pizzas.
// Output : A message

// for loop : (It's controlled loop and doesn't require external work) : 

// let numberOfPizzas = 10;
// for(let i = 1; i <= numberOfPizzas; i++) {
//     console.log(`Pizza ${i} is ready!`);
// };

// for(let i = numberOfPizzas; i >= 1; i--) {
//     console.log(`Pizza ${i} is ready!`);
// };

// While loop (It's not a controlled loop and requires external work) :

// let numberOfPizzas = 5;
// let i = 1;

// while(i <= numberOfPizzas) {
//     console.log(`Pizza ${i} is ready!`);
//     i++;
// };

// do-while loop : Whether the condition is satisfied or not it will run atleast once.

// let numberOfPizzas = 5;
// let i = 1;

// do {
//     console.log(`Pizza ${i} is ready!`);
//     i++;
// } while (i <= numberOfPizzas);

// --------------------------------------------------

// Controlled statements :
// break and continue keywords :

// Problem : Prepare pizzas based on order count and add toppings as well.

// let numberOfPizzas = 10;

// for(let i = 1; i <= numberOfPizzas; i++) {
//     console.log(`Pizza ${i} is ready`);
//     if(i === 2 || i === 5) {
//         continue;
//     };
//     console.log(`Pizza ${i} topping's added!`);
//     if(i === 7) {
//         break;
//     };
// };

// -----------------------------------------------------------------

// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j < 5; j++) {
//         if(j === 0 || j === 4 || (i === 0 && j === 1) || (i === 0 && j === 3) || (i === 1 && j === 2)) {
//             process.stdout.write("*");
//         } else {
//             process.stdout.write(" ");
//         }
//     }
//     process.stdout.write("\n");
// }

// for(let i = 0; i < 8; i++) {
//     for(let j = 0; j < 5; j++) {
//         if(j === 1 || j === 3 || (i === 0 && j === 0) ||( i === 0 && j === 0) || (i === 0 && j === 2) || (i ===0 && j === 4)) {
//             process.stdout.write("*");
//         } else {
//             process.stdout.write(" ");
//         }
//     };
//     process.stdout.write("\n");
// };

// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j < 5-i-1; j++) {
//         process.stdout.write(" ");
//     };
//     for(let k = 0; k < i+1; k++) {
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
// };

// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j < 5 - i - 1; j++) {
//         process.stdout.write(" ");
//     };
//     for(let k = 0; k < 2 * i + 1; k++) {
//         process.stdout.write("*");
//     };
//     process.stdout.write("\n");
// };
