// HOFs : 
// 1. Functions can be passed as an argument like callback functions.
// 2. Functions can return a function.

// const add = (a, b) => {
//     let result = a + b;
//     return function() {
//         console.log(`The output is : ${result}.`);
//     };
// };

// add(9, 89)()

// ---------------------------------------------------------------------

// const fullName = fName => {
//     let lastName = 'Raj';
//     return function() {
//         let completeName = `${fName} ${lastName}`;
//         return completeName;
//     };
// };

// const output = fullName('Amit')()
// console.log(output);

// -------------------------------------------------------------------

function add (a, b) {
    let result = a + b;
    return function() {
        console.log(`The result is : ${result}`);
    };
};

add(7, 8)()

// ------------------------------------------------------------------------

