// Function Currying : Spliting the function into different parts.

// const output = (res) => console.log(`Result : ${res}.`);

// function add(a) {
//     let result;
//     return function(b) {
//         return function(c, callback) {
//             result =  a + b + c;
//             return callback(result);
//         };
//     };
// };

// add(9)(70)(40, output);

// --------------------------------------------------------------------------------

const output = res => console.log(`Result : ${res}.`);

const multiply = a => {
    let result;
    return function(b) {
        return function(c, callback) {
            result = a * b * c;
            return callback(result);
        };
    };
};

multiply(4)(8)(3, output);

// -------------------------------------------------------------------------------------

// console.log(typeof(multiply));

// ----------------------------------------------------------------------------------------

